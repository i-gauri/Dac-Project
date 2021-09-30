package com.app.service;

import com.app.pojos.Customer;

public interface IAuthService {
	
		void sendMail(Customer cust, String url);

		int changePassword(Customer cust);
		
		
}
