package com.app.customErrorHandling;

@SuppressWarnings("serial")
public class AdminHandling extends RuntimeException{
	
	public AdminHandling(String msg) {
		super(msg);
	}

}
