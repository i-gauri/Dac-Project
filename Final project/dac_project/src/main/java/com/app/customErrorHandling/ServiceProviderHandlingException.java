package com.app.customErrorHandling;

@SuppressWarnings("serial")
public class ServiceProviderHandlingException extends RuntimeException{
	
	public ServiceProviderHandlingException(String msg) {
		super(msg);
	}

}
