package com.app.dto;

import java.sql.Date;
import com.app.pojos.Customer;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CustomerDTO {
	private int id;
	private String firstname;
	private String accessToken;
	
	
	

}
