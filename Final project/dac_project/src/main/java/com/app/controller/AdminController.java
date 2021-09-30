package com.app.controller;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ErrorResponse;
import com.app.dto.LoginRequest;
import com.app.dto.ResponseDTO;
import com.app.pojos.Customer;
import com.app.pojos.ServiceProvider;
import com.app.service.AdminLoginService;
import com.app.utils.CommonUtils;
@CrossOrigin
@RestController
@RequestMapping("/admin")
public class AdminController {
	@Autowired
	private AdminLoginService loginService; 
	@Autowired
	private CommonUtils cu;


	@PostMapping("/signin")
	public ResponseEntity<?> authenticateAdmin(@RequestBody @Valid LoginRequest request) {
		System.out.println("in auth admin " + request);
		return ResponseEntity.ok(loginService.getAccessToken(request.getEmail(), request.getPassword(),0));
	}

	@DeleteMapping("/deleteCust/{custId}") // URI template var
	public ResponseEntity<ResponseDTO> deleteCustDetails(@PathVariable int custId, HttpServletRequest request) throws Exception {
		System.out.println("in delete user details " + custId);
		int entityid=cu.validatetoken(request);
		if(entityid!=0)
			throw new Exception ("Invalid access token for admin");
		return ResponseEntity.ok(new ResponseDTO(loginService.deleteCustomer(custId)));
	}

	@GetMapping("/getAllCust")
	public ResponseEntity<?> getCustDetails( HttpServletRequest request) throws Exception {
		System.out.println("in get cust details ");
		// invoke service method to get user details
		int entityid=cu.validatetoken(request);
		if(entityid!=0)
			throw new Exception ("Invalid access token for admin");
		return ResponseEntity.ok(loginService.getAllCust());

	}

	@PutMapping("/updateCust/{id}")
	public ResponseEntity<?> updateUserDetails(@RequestBody Customer detachedCust, @PathVariable int id, HttpServletRequest request) throws Exception {
		System.out.println("in update user " + detachedCust + " " + id);
		try {
			// invoke service layer method for validating user id
			Customer existingCustomer = loginService.getCustDetails(id);
			cu.validatetoken(request);
			int entityid=cu.validatetoken(request);
			if(entityid!=0)
				throw new Exception ("Invalid access token for admin");
			return ResponseEntity.ok(loginService.updateCustDetails(detachedCust));
		} catch (RuntimeException e) {
			System.out.println("err in get " + e);
			return new ResponseEntity<>(new ErrorResponse("Updating customer details failed", e.getMessage()),
					HttpStatus.BAD_REQUEST);
		}

	}

	@DeleteMapping("/deleteProvider/{providerId}") // URI template var
	public ResponseEntity<ResponseDTO> deleteProvider(@PathVariable int providerId,HttpServletRequest request) throws Exception {
		System.out.println("in delete user details " + providerId);
		cu.validatetoken(request);
		int entityid=cu.validatetoken(request);
		if(entityid!=0)
			throw new Exception ("Invalid access token for admin");
		return ResponseEntity.ok(new ResponseDTO(loginService.deleteServicePovider(providerId)));
	}

	@GetMapping("/getAllProviders")
	public ResponseEntity<?> getProviderDetails( HttpServletRequest request) throws Exception {
		System.out.println("in get cust details ");
		// invoke service method to get user details
		cu.validatetoken(request);
		int entityid=cu.validatetoken(request);
		if(entityid!=0)
			throw new Exception ("Invalid access token for admin");
		return ResponseEntity.ok(loginService.getAllProviders());

	}
	@PutMapping("/updateProvider/{id}")
	public ResponseEntity<?> updateProviderDetails( @PathVariable int id, HttpServletRequest request) throws Exception {
		System.out.println("in update user " +   " " + id);
		try {
			
			ServiceProvider existingProvider = loginService.getProviderDetails(id);
	
			cu.validatetoken(request);
			int entityid=cu.validatetoken(request);
			if(entityid!=0)
				throw new Exception ("Invalid access token for admin");
			return ResponseEntity.ok(loginService.updateProviderDetails(id));
		} catch (RuntimeException e) {
			System.out.println("err in get " + e);
			return new ResponseEntity<>(new ErrorResponse("Updating Provider details failed", e.getMessage()),
					HttpStatus.BAD_REQUEST);
		}

	}
	
	//Get event details
	@GetMapping("/getAllEventDetails")
	public ResponseEntity<?> getAllEventDetails( HttpServletRequest request) throws Exception {
		System.out.println("in get cust details ");
		
		cu.validatetoken(request);
		int entityid=cu.validatetoken(request);
		if(entityid!=0)
			throw new Exception ("Invalid access token for admin");
		return ResponseEntity.ok(loginService.getAllEvenetDetails());

	}

}
