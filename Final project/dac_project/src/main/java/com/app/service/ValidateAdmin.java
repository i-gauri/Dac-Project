package com.app.service;

import java.util.List;
import java.util.UUID;
import java.util.concurrent.TimeUnit;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;

import com.app.customErrorHandling.AdminHandling;
import com.app.customErrorHandling.CustomerHandlingException;
import com.app.customErrorHandling.ServiceProviderHandlingException;
import com.app.dao.AdminRepository;
import com.app.dao.CustomerRepository;
import com.app.dao.EventRepository;
import com.app.dao.ServiceProviderRepository;
import com.app.dto.AdminDTO;
import com.app.dto.AdminTokenDto;
import com.app.dto.CustomerDTO;
import com.app.pojos.Customer;
import com.app.pojos.Event;
import com.app.pojos.ServiceProvider;

import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Service
@Transactional//(dontRollbackOn = ServiceProvider.class)
public class ValidateAdmin implements AdminLoginService {

	@Autowired
	private AdminRepository adminRepo;
	@Autowired
	private CustomerRepository custRepo;
	@Autowired
	private ServiceProviderRepository providerRepo;
	@Autowired
	private EventRepository eventRepo;
	
	@Autowired
	private AdminLoginService adminser;
	@Autowired
	Environment env;
	
	@Override
	public AdminDTO authenticateAdmin(String email, String password) {
		AdminDTO admin = adminRepo.findByEmailAndPassword(email, password)
				.orElseThrow(() -> new AdminHandling("invalid Credentials"));
		return admin;
	}
	
	public AdminTokenDto getAccessToken(String email, String password,int entity  ) {
		AdminDTO admin=adminser.authenticateAdmin(email, password);
		JwtBuilder builder = Jwts.builder().setIssuedAt(new java.util.Date()).setIssuer(env.getProperty("tokenIssuer")).setId(UUID.randomUUID().toString())
				.setExpiration(new java.util.Date(System.currentTimeMillis() + TimeUnit.MINUTES.toMillis(Long.valueOf(env.getProperty("tokenDuration")))))
				.signWith(SignatureAlgorithm.HS512, env.getProperty("salt"));
		builder.claim("entity", entity);
		AdminTokenDto admintok = new AdminTokenDto();
		admintok.setAccessToken(builder.compact());
		admintok.setFirstname(admin.getFirstname());
		return admintok;
	}

	@Override
	public String deleteCustomer(int custId) {
		custRepo.deleteById(custId);
		return "User details deleted for ID=" + custId;
	}

	@Override
	public List<Customer> getAllCust() {

		return custRepo.findAll();
	}

	@Override
	public Customer updateCustDetails(Customer detachedCustomer) {

		return custRepo.save(detachedCustomer);
	}

	@Override
	public Customer getCustDetails(int custId) {
		return custRepo.findById(custId).orElseThrow(() -> new CustomerHandlingException("Invalid User ID !!!!!"));

	}
	@Override
	public String deleteServicePovider(int providerId) {
		providerRepo.deleteById(providerId);
		return "provider details deleted for ID=" + providerId;
	}

	@Override
	public ServiceProvider getProviderDetails(int providerId) {
		return providerRepo.findById(providerId).
				orElseThrow(() -> new ServiceProviderHandlingException ("Invalid Provider ID !!!!!"));

	}
	@Override
	public List<ServiceProvider> getAllProviders() {
		
		return providerRepo.findAll();
	}
	
	@Override
	public String updateProviderDetails( int id) {
		adminRepo.updateProviderDetails("APPROVED", id);
		return "APPROVED";
	}

	@Override
	public List<Event> getAllEvenetDetails() {
		
		return eventRepo.findAll();
	}
	
	

}
