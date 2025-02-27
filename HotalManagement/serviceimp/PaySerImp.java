package com.example.HotalManagement.serviceimp;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.HotalManagement.entity.Payment;
import com.example.HotalManagement.repo.PaymentRepository;
import com.example.HotalManagement.service.PaymentService;

@Service
public class PaySerImp implements PaymentService {
	
	@Autowired
	private PaymentRepository prepo;

	
	public String creat(Payment pay) {
		
		
		prepo.save(pay);
		
		return "create";
		
		
		
	}

	public String  delt(Long id) {
		
		Optional<Payment>obj=prepo.findById(id);
		
		if(obj.isPresent()) {
			
			prepo.deleteById(id);
			return "delete";
		}
		return  "not found";
		
	}
	
	public Payment getid(Long id) {
		
   Optional<Payment>obj1=prepo.findById(id);
		
		if(obj1.isPresent()) {
			
		 return	obj1.get();
		}
		return  null;
		
	}
		
	
	
	public List<Payment> getall(){
		
		
	  return prepo.findAll();
		

}
	public String updt(Payment pay) {

	    if(prepo.existsById(pay.getId())) {
	    	
	    	Payment obj2=prepo.getById(pay.getId());
	    	
	    	
	    	obj2.setPayment_Method(pay.getPayment_Method());
	    	obj2.setStatus(pay.isStatus());
	    	obj2.setBooking_Id(pay.getBooking_Id());
	    	obj2.setCustomer_Id(pay.getCustomer_Id());
	    	
	    	prepo.save(obj2);
			
			return "updated sucessfully";
			
			
		}
		return "not find id";
		
	}
	
}
