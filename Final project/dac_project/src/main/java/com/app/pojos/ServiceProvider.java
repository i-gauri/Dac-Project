package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter

@Entity
@Table(name = "service_provider")

public class ServiceProvider extends BaseEntity {
	@Column(length = 20,unique = true)
	@NotBlank(message = "email must be supplied")
	private String email;
	@Column(length = 10)
	@NotBlank(message = "contactNo must be supplied")
	@Pattern(regexp="^[0-9]{10}", message="Phone number must be valid")
	private String contactNo;
	@Column(length = 40)
	@NotBlank(message = "firstname must be supplied")
	private String providerName;

	@Column(length = 40)
	@NotBlank(message = "password must be supplied")
	@Pattern(regexp = "((?=.*\\d)(?=.*[a-z])(?=.*[#@$*]).{5,20})", message = "Blank or Invalid password")
	private String password;
	
	@Column(length = 20)
	private String serviceType;
	
	@Column(length = 20)
	
	private String status="PENDING";
	private double rent;
	private int capacity;
	
	

	public ServiceProvider(String status) {
		super();
		this.status = status;
	}


	
	
	
}
