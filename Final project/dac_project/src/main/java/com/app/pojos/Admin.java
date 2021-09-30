package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
//@AllArgsConstructor
@Getter
@Setter
@ToString

@Entity
@Table(name = "admin")
public class Admin extends BaseEntity{
	@Column(length = 20,unique = true)
	private String email;
	@Column(length = 40)
	private String firstname;
	@Column(length = 40)
	private String lastname;
	@Column(length = 40)
	private String password;
	public Admin(String email, String firstname) {
		super();
		this.email = email;
		this.firstname = firstname;
	}
	
	

}
