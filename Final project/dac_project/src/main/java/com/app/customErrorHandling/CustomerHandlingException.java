package com.app.customErrorHandling;

@SuppressWarnings("serial")
public class CustomerHandlingException extends RuntimeException{

	
	public CustomerHandlingException(String msg) {
		
		super(msg);
	}

}
