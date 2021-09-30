package com.app.pojos;

import java.sql.Date;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "event")
public class Event {
	@Id
	@Column(name = "event_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "cust_id")
	private Customer customer; 
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "provider_id")
	private ServiceProvider serviceProvider;
	
	@Column(name = "booking_date")
	private Date bookingDate;


	@Column(length = 20)
	private String status="PENDING";
//	@OneToMany(mappedBy = "Event")
//	@Column(name = "event_name")
//	private List<String> eventName=new ArrayList<>();
	


}
