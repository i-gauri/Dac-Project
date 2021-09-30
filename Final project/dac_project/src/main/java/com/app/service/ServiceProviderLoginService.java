package com.app.service;

import java.util.List;

import com.app.dto.CustomerDTO;
import com.app.dto.ServiceProviderDetails;
import com.app.dto.ServiceTokenDto;
import com.app.pojos.Event;
import com.app.pojos.ServiceProvider;

public interface ServiceProviderLoginService {
	
	ServiceProvider authenticateServicePovider(String email,String password);

	ServiceProvider addProvider(ServiceProvider trasientProvider);
	String updateEventStatus(int id);
	List<Event> getCustomer(int id);
	
	ServiceProviderDetails getProviderById(int id);
	ServiceTokenDto getAccessToken(String email, String password,int entity ) ;
}
