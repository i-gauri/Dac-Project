package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.app.dto.AdminDTO;
import com.app.pojos.Admin;
import com.app.pojos.ServiceProvider;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Integer> {
	@Query("select new com.app.dto.AdminDTO(a.email,a.firstname) from Admin a where a.email=?1 and a.password=?2")
	Optional<AdminDTO> findByEmailAndPassword(String email, String pwd);

	@Modifying
	@Query("update ServiceProvider s set s.status = ?1 where s.id = ?2")
	
	int updateProviderDetails(String status,int id);
//@Query("update Orders o set o.paymentStatus ='PAID',o.deliveryStatus='DELIVERED' where o.orderId=?1")

}