package com.app.service;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;

import com.app.dto.CustomerDTO;
import com.app.pojos.Customer;
import com.app.pojos.Event;
import com.app.pojos.ServiceProvider;

public interface CustomerLoginService {
	Customer authenticateCustomer(String email,String password);
	Customer addCustomer(Customer trasientCust);
	Event getEventDetails(int eventId);
	String cancelEvent(int eventId);
	List<ServiceProvider> providerList(int from,int to, Date date);
	CustomerDTO getAccessToken(String email, String password,int entity ) ;
	List<Event> viewBooking(int custId);
	List<ServiceProvider> getAllDecoratorsAndCaterers(String type,Date date);
	
}
