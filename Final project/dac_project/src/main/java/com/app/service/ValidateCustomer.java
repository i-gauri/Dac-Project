package com.app.service;

import java.sql.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.concurrent.TimeUnit;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;

import com.app.customErrorHandling.CustomerHandlingException;
import com.app.dao.CustomerRepository;
import com.app.dao.EventRepository;
import com.app.dto.CustomerDTO;
import com.app.pojos.Customer;
import com.app.pojos.Event;
import com.app.pojos.ServiceProvider;

import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Service
@Transactional
public class ValidateCustomer implements CustomerLoginService {

	
	
	@Autowired
	private CustomerRepository custRepo;
	@Autowired
	private EventRepository eventRepo;;
//	@Autowired
//	private ServiceProviderRepository providerRepo;

	@Autowired
	private CustomerLoginService custService;
	
	@Autowired
	Environment env;
	
	
	@Override
	public Customer authenticateCustomer(String email, String password) {
		Customer customer = custRepo.findByEmailAndPassword(email, password)
				.orElseThrow(() -> new CustomerHandlingException("invalid Credentials"));
		return customer;
	}
	
	
	public CustomerDTO getAccessToken(String email, String password, int entity ) {
		Customer cust=custService.authenticateCustomer(email, password);
		JwtBuilder builder = Jwts.builder().setIssuedAt(new java.util.Date()).setIssuer(env.getProperty("tokenIssuer")).setId(UUID.randomUUID().toString())
				.setExpiration(new java.util.Date(System.currentTimeMillis() + TimeUnit.MINUTES.toMillis(Long.valueOf(env.getProperty("tokenDuration")))))
				.signWith(SignatureAlgorithm.HS512, env.getProperty("salt"));
		builder.claim("entity", entity);
		CustomerDTO custdto = new CustomerDTO();
		custdto.setAccessToken(builder.compact());
		custdto.setFirstname(cust.getFirstname());
		custdto.setId(cust.getId());
		return custdto;
	}

	@Override
	public Customer addCustomer(Customer cust) {
		return custRepo.save(cust) ; 

	}
	
	@Override
	public List<ServiceProvider> getAllDecoratorsAndCaterers(String type, Date date) {
		
		return custRepo.getAllDecoratorsAndCaterers(type,date);
	}
	
	@Override
	public Event getEventDetails(int eventId) {
		return eventRepo.findById(eventId).orElseThrow(() -> new CustomerHandlingException("Invalid User ID !!!!!"));

	}

	@Override
	public String cancelEvent(int eventId) {
		custRepo.cancelEvent("CANCELLED", eventId);
		return "your event is cancelled";
	}

	@Override
	public List<ServiceProvider> providerList(int from, int to,Date date) {
		return custRepo.getServiceProviderList(from, to,date);
		
	}

	@Override
	public List<Event> viewBooking(int custId) {
		
		return custRepo.viewBooking(custId);
	}
	


}
