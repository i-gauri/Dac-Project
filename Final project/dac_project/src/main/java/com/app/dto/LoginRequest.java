package com.app.dto;

import javax.validation.constraints.NotBlank;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter

public class LoginRequest {
	@NotBlank(message = "email must be supplied")
	private String email;
	@NotBlank(message = "password must be supplied")
	private String password;
	
}
