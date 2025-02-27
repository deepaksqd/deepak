package com.example.HotalManagement.service;

import java.util.List;

import com.example.HotalManagement.entity.Payment;

public interface PaymentService {
	
	
	public String creat(Payment pay);
	
	public String updt(Payment pay);
	
	public String  delt(Long id);
	
	public Payment getid(Long id);
	
	public List<Payment> getall();
	

}
