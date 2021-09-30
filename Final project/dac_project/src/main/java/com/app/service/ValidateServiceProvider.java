package com.app.service;

import java.util.List;
import java.util.UUID;
import java.util.concurrent.TimeUnit;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;

import com.app.customErrorHandling.AdminHandling;
import com.app.customErrorHandling.ServiceProviderHandlingException;
import com.app.dao.ServiceProviderRepository;
import com.app.dto.CustomerDTO;
import com.app.dto.ServiceProviderDetails;
import com.app.dto.ServiceTokenDto;
import com.app.pojos.Customer;
import com.app.pojos.Event;
import com.app.pojos.ServiceProvider;

import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Service
@Transactional
public class ValidateServiceProvider implements ServiceProviderLoginService {

	@Autowired
	private ServiceProviderRepository serviceProviderRepo;

	@Autowired
	private ServiceProviderLoginService providerService;
	
	@Autowired
	Environment env;
	
	@Override
	public ServiceProvider authenticateServicePovider(String email, String password) {
		ServiceProvider servicePro = serviceProviderRepo.findByEmailAndPassword(email, password)
				.orElseThrow(() -> new ServiceProviderHandlingException ("invalid Credentials"));
		return servicePro;
	}
	
	public ServiceTokenDto getAccessToken(String email, String password, int entity ) {
		ServiceProvider sp=providerService.authenticateServicePovider(email, password);
		if(sp.getStatus().equals("APPROVED")) {
		JwtBuilder builder = Jwts.builder().setIssuedAt(new java.util.Date()).setIssuer(env.getProperty("tokenIssuer")).setId(UUID.randomUUID().toString())
				.setExpiration(new java.util.Date(System.currentTimeMillis() + TimeUnit.MINUTES.toMillis(Long.valueOf(env.getProperty("tokenDuration")))))
				.signWith(SignatureAlgorithm.HS512, env.getProperty("salt"));
		builder.claim("entity", entity);
		ServiceTokenDto spdto = new ServiceTokenDto();
		spdto.setAccessToken(builder.compact());
		spdto.setFirstname(sp.getProviderName());
		spdto.setId(sp.getId());
		
		
			return spdto;
		}else {
			return null;
		}
		
		
		
		
	}

	@Override
	public ServiceProvider addProvider(ServiceProvider trasientProvider) {

		return serviceProviderRepo.save(trasientProvider);
	}

	@Override
	public String updateEventStatus(int id) {
		serviceProviderRepo.updateEventStatus("ACCEPTED", id);
		return "ACCEPTED";
	}

	@Override
	public List<Event> getCustomer(int id) {
		return serviceProviderRepo.getCustomer(id);
		 
	}

	@Override
	public ServiceProviderDetails getProviderById(int id) {
		
		return serviceProviderRepo.getProviderById(id);
	}
	
	

}
