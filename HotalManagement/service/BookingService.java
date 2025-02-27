package com.example.HotalManagement.service;


import java.util.List;


import com.example.HotalManagement.entity.Booking;


public interface BookingService {
	
	public String creates(Booking bk);
	
	
	public List<Booking> getall();
		
	
	public Booking getid(Long id);
	
	
	public String deleteid(Long id)	;
	
	public String updat(Booking bk);
	
}

    
