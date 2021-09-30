package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.app.pojos.Customer;


public interface IAuthDao extends JpaRepository<Customer,Integer>{

	@Modifying
	@Query("UPDATE Customer u set u.password =?2 where u.email=?1")
	int changePassword(String email , String password);


}
