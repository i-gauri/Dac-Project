package com.app.service;

import java.util.List;

import com.app.dto.AdminDTO;
import com.app.dto.AdminTokenDto;
import com.app.dto.CustomerDTO;
import com.app.pojos.Customer;
import com.app.pojos.Event;
import com.app.pojos.ServiceProvider;

public interface AdminLoginService {
	
	AdminDTO authenticateAdmin(String email,String password);
	//Customer
	String deleteCustomer(int custId);
	Customer getCustDetails(int custId);
	List<Customer> getAllCust();
	Customer updateCustDetails(Customer detachedCustomer);
	//provider
	String deleteServicePovider(int providerId);
	ServiceProvider getProviderDetails(int providerId);
	List<ServiceProvider> getAllProviders();
	String updateProviderDetails(int id);
	//All event details
	List<Event> getAllEvenetDetails();
	AdminTokenDto getAccessToken(String email, String password,int entity ) ;
}
