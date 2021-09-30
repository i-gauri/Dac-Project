package com.app.dao;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.Customer;
import com.app.pojos.Event;
import com.app.pojos.ServiceProvider;

public interface CustomerRepository extends JpaRepository<Customer, Integer> {
	Optional<Customer> findByEmailAndPassword(String email, String pwd);
	
	@Modifying
	@Query("update Event s set s.status = ?1 where s.id = ?2")
	int cancelEvent(String status,int eventId);
	
	//@Query("select new com.app.dto.AdminDTO(a.email,a.firstname) from Admin a where a.email=?1 and a.password=?2")
	
//	@Query("select s from ServiceProvider s where s.capacity between ?1 and ?2 ")
//	@Query("select s from ServiceProvider s where s.capacity between ?1 and ?2 and s != (select e.serviceProvider from Event e where e.bookingDate == ?3)")
	public static String q="select s from ServiceProvider s LEFT JOIN Event e on e.serviceProvider.id=s.id where s.capacity between :from and :to and s.serviceType not in('Decorator','Caterer') and s.id not in (select e.serviceProvider.id from Event e where e.bookingDate = :date)";	
	@Query(q)
	
	List<ServiceProvider> getServiceProviderList(@Param("from") int from, @Param("to") int to, @Param("date") Date date );
	
	@Query("select e from Event e where e.customer.id=?1")
	List<Event> viewBooking(int custId);
	
	public static String l="select s from ServiceProvider s LEFT JOIN Event e on e.serviceProvider.id=s.id where s.serviceType not in('Ceremony Hall') and "
			+ "s.serviceType = :type and s.id not in "
			+ "(select e.serviceProvider.id from Event e where e.bookingDate = :date)";
	@Query(l)
	List<ServiceProvider> getAllDecoratorsAndCaterers(@Param("type")String type,@Param("date") Date date);
	
}
