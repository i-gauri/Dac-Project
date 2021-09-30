package com.app.controller;


import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.transaction.Transactional;
import javax.validation.ConstraintViolationException;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dao.CustomerRepository;
import com.app.dao.EventRepository;
import com.app.dao.ServiceProviderRepository;
import com.app.dto.CapacityRange;
import com.app.dto.ErrorResponse;
import com.app.dto.LoginRequest;
import com.app.dto.ResponseDTO;
import com.app.dto.ServiceType;
import com.app.pojos.Customer;
import com.app.pojos.Event;
import com.app.pojos.ServiceProvider;
import com.app.service.CustomerLoginService;
import com.app.service.ValidateCustomer;
import com.app.utils.CommonUtils;
@CrossOrigin
@RestController
@RequestMapping("/customer")
public class CustomerController {
	@Autowired
	private CustomerLoginService custService;
	@Autowired
	private EventRepository eventRepo;
	@Autowired
	private ServiceProviderRepository providerRepo;
	@Autowired
	private CustomerRepository custRepo;
	@Autowired
	private ValidateCustomer vc;
	@Autowired
	private CommonUtils cu;
	
	
	@PostMapping("/signin")
	public ResponseEntity<?> authenticateCust(@RequestBody @Valid LoginRequest request) {
		System.out.println("in auth cust " + request);
		
		return ResponseEntity.ok(custService.getAccessToken(request.getEmail(), request.getPassword(), 1));
	}

	
	@PostMapping("/signup")
	public ResponseEntity<?> addCust(@RequestBody @Valid Customer trasientCust) {
		System.out.println("in signup cust " + trasientCust);
		try {
		return new ResponseEntity<>(custService.addCustomer(trasientCust), HttpStatus.CREATED);
		}catch(ConstraintViolationException e) {
			System.out.println("error in signup");
			return new ResponseEntity<>(new ResponseDTO(e.getMessage()),HttpStatus.BAD_REQUEST);
			
		}

	}
	@PutMapping("/cancelEvent/{id}")

	public ResponseEntity<?> updateUserDetails(@PathVariable int id, HttpServletRequest request) throws Exception {
		System.out.println("in cancelEvent "  + " " + id);
		try {
			// invoke service layer method for validating user id
			Event event = custService.getEventDetails(id);
			// => user is valid
			// existingUser => user details fetched from DB (stale)
			// detachedUser => updated user details from front end.
			cu.validatetoken(request);
			int entityid=cu.validatetoken(request);
			if(entityid!=1)
				throw new Exception ("Invalid access token for Customer");
			return ResponseEntity.ok(custService.cancelEvent(id));
		} catch (RuntimeException e) {
			System.out.println("err in get " + e);
			return new ResponseEntity<>(new ErrorResponse("Updating customer details failed", e.getMessage()),
					HttpStatus.BAD_REQUEST);
		}

	}
	//@ExceptionHandler({HttpMessageNotReadableException.class, JsonMappingException.class, HttpMediaTypeNotSupportedException.class})
	@PostMapping("/getEventList")
	public ResponseEntity<?> getProviders(@RequestBody CapacityRange range, HttpServletRequest request) throws Exception {
		
		System.out.println("in list of  provider  "+range.getFrom()+range.getTo());
		cu.validatetoken(request);
		int entityid=cu.validatetoken(request);
		if(entityid!=1)
			throw new Exception ("Invalid access token for Customer");
		return ResponseEntity.ok(custService.providerList(range.getFrom(),range.getTo(),range.getDate()));

	}
	/*
	 * @GetMapping("/getAllCust")
	public ResponseEntity<?> getCustDetails() {
		System.out.println("in get cust details ");
		// invoke service method to get user details

		return ResponseEntity.ok(loginService.getAllCust());

	}*/
	@Transactional
	@PostMapping("/bookEvent")
	public ResponseEntity<?> bookEvent(@RequestBody Event event,  HttpServletRequest request) throws Exception {
		System.out.println("in bookEvent  "+event);
		ServiceProvider provider=  providerRepo.findById(event.getServiceProvider().getId()).get();
		event.setServiceProvider(provider);
		Customer cust= custRepo.findById(event.getCustomer().getId()).get(); 
		event.setCustomer(cust);
		eventRepo.save(event);
		cu.validatetoken(request);
		int entityid=cu.validatetoken(request);
		if(entityid!=1)
			throw new Exception ("Invalid access token for Customer");
		return ResponseEntity.ok(event);

	}
	//viewBookings
	@PostMapping("/viewBookings/{id}")
	public List<Event> viewBookings(@PathVariable int id, HttpServletRequest request) throws Exception {
		System.out.println("in viewBookings "  + " " + id);
		cu.validatetoken(request);
		int entityid=cu.validatetoken(request);
		if(entityid!=1)
			throw new Exception ("Invalid access token for Customer");
		return custService.viewBooking(id);


	}
	
	@PostMapping("/getDecorators")
	public ResponseEntity<?> getAllDecoratorsAndCaterers(@RequestBody ServiceType type , HttpServletRequest request) throws Exception {
		System.out.println("in list of  Caterers  "+type);
		cu.validatetoken(request);
		int entityid=cu.validatetoken(request);
//		if(entityid!=1)
//			throw new Exception ("Invalid access token for Customer");
		return ResponseEntity.ok(custService.getAllDecoratorsAndCaterers(type.getServiceType(),type.getDate()));
		
	}



}
