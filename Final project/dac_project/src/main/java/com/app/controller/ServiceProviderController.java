package com.app.controller;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dao.EventRepository;
import com.app.dto.ErrorResponse;
import com.app.dto.LoginRequest;
import com.app.pojos.Event;
import com.app.pojos.ServiceProvider;
import com.app.service.ServiceProviderLoginService;
import com.app.utils.CommonUtils;
@CrossOrigin
@RestController
@RequestMapping("/provider")
public class ServiceProviderController {
	@Autowired
	private ServiceProviderLoginService providerService;
	@Autowired
	private EventRepository eventRepo;
	@Autowired
	private CommonUtils cu;

	
	@PostMapping("/signin")
	public ResponseEntity<?> authenticateProvider(@RequestBody @Valid LoginRequest request) {
		System.out.println("in auth cust " + request);
		return ResponseEntity.ok(providerService.getAccessToken(request.getEmail(), request.getPassword(),2));
	}

	// String contactNo, String email, String fName, String lName, String password
	@PostMapping("/signup")
	public ResponseEntity<?> addProvidert(@RequestBody @Valid ServiceProvider trasientProvider) {
		System.out.println("in signup cust " + trasientProvider);

			return new ResponseEntity<>(providerService.addProvider(trasientProvider), HttpStatus.CREATED);
		
	}
	@PutMapping("/updateEventStatus/{id}")
	public ResponseEntity<?> updateProviderDetails( @PathVariable int id, HttpServletRequest request) throws Exception {
		System.out.println("in update event Status " +   " " + id);
		try {
			
			Event event = eventRepo.findById(id).orElseThrow(()->new RuntimeException("Event not registered"));
		
			cu.validatetoken(request);
			int entityid=cu.validatetoken(request);
			if(entityid!=2)
				throw new Exception ("Invalid access token for Provider");
			return ResponseEntity.ok(providerService.updateEventStatus(id));
		} catch (RuntimeException e) {
			System.out.println("err in get " + e);
			return new ResponseEntity<>(new ErrorResponse("Updating Provider details failed", e.getMessage()),
					HttpStatus.BAD_REQUEST);
		}

	}
	//get customers
	@GetMapping("/getCustomers/{id}")
	
	public ResponseEntity<?> getCustDetails(@PathVariable int id, HttpServletRequest request) throws Exception {
		System.out.println("in  getCustomers   ");
		// invoke service method to get user details
		cu.validatetoken(request);
		int entityid=cu.validatetoken(request);
		if(entityid!=2)
			throw new Exception ("Invalid access token for Provider");
		return ResponseEntity.ok(providerService.getCustomer(id));

	}
	
	//getServiceProviderById
@GetMapping("/getProviderById/{id}")
	
	public ResponseEntity<?> getServiceProviderById(@PathVariable int id, HttpServletRequest request) throws Exception {
		System.out.println("in  getServiceProviderById   "+id);
		// invoke service method to get user details
		cu.validatetoken(request);
		int entityid=cu.validatetoken(request);
		if(entityid!=2)
			throw new Exception ("Invalid access token for Provider");
		return ResponseEntity.ok(providerService.getProviderById(id));

	}
	
	
	
}
