package com.app.pojos;

import java.util.ArrayList;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter

@Entity
@Table(name = "cust")
public class Customer extends BaseEntity {
	 @NotBlank(message = "contact no must be supplied")
	@Column(length = 10)
	@Pattern(regexp="^[0-9]{10}", message="Phone number must be valid")
	private String contactNo;
	@Column(length = 40, unique = true)
	 @NotBlank(message = "email must be supplied")
	private String email;
	@Column(length = 40)
	 @NotBlank(message = "firstName must be supplied")
	private String firstname;
	@Column(length = 40)
	 @NotBlank(message = "lastName must be supplied")
	private String lastname;
	@Column(length = 40)
	 @NotBlank(message = "password must be supplied")
	@Pattern(regexp = "((?=.*\\d)(?=.*[a-z])(?=.*[#@$*]).{5,20})", message = "Blank or Invalid password")
	private String password;

//	@OneToMany(mappedBy = "bookedService", cascade = CascadeType.ALL, orphanRemoval = true,fetch = FetchType.EAGER)
//	private ServiceProvider selectedProvider ;

}
