package com.app.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.dto.CustomerDTO;
import com.app.dto.ServiceProviderDetails;
import com.app.pojos.Customer;
import com.app.pojos.Event;
import com.app.pojos.ServiceProvider;

public interface ServiceProviderRepository  extends JpaRepository<ServiceProvider, Integer> {
	Optional<ServiceProvider> findByEmailAndPassword(String email, String pwd);
	
	@Modifying
	@Query("update Event e set e.status = ?1 where e.id = ?2")	
	int updateEventStatus(String status,int id);
	
	//@Query("select c.customer from Event e inner join Customer c on e.customer.id=c.id where e.serviceProvider.id = ?1")
	@Query("select e from Event e where e.serviceProvider.id=:id")
	List<Event> getCustomer(@Param("id") int id);
	//new com.app.dto.AdminDTO(a.email,a.firstname)
	@Query("select new com.app.dto.ServiceProviderDetails(s.providerName,s.email,s.contactNo,s.rent,s.capacity) from ServiceProvider s where s.id=?1")
	ServiceProviderDetails getProviderById(int id);
	

	
}
