package com.app.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ServiceProviderDetails {
	private String providerName;
	private String email;
	private String contactNo;
	private double rent;
	private int capacity;
	

}
