package com.example.HotalManagement.serviceimp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.HotalManagement.entity.Booking;
import com.example.HotalManagement.repo.BookRepository;
import com.example.HotalManagement.service.BookingService;

import java.util.List;
import java.util.Optional;

@Service
public class BookServiceImpl implements BookingService {

    @Autowired
    private BookRepository bkrepo;

    @Override
    public String creates(Booking bk) {
    	
    	bkrepo.save(bk);
    	
    	return "create";
    }
	



public List<Booking> getall(){
	
	return bkrepo.findAll();
}   

public Booking getid(Long id) {

	Optional<Booking>obj= bkrepo.findById(id);
	
	if(obj.isPresent()) {
		
		
		return bkrepo.findById(id).get();
		
	}
	return null;
	
	
}


public String deleteid(Long id) {
	
	Optional<Booking> obj1= bkrepo.findById(id);
	
	if(obj1.isPresent()) {
		
		bkrepo.deleteById(id);
		return "delete";
		
	}
	
	return "not found";
}


@Override 
public String updat(Booking bk) {
   
  

    if (bkrepo.existsById(bk.getId()))
   {
        
    	Booking obj=bkrepo.getById(bk.getId());
    	
    	obj.setBooked_On(bk.getBooked_On());
    	obj.setUser_Id(bk.getUser_Id());
    	obj.setFrom_Date(bk.getFrom_Date());
    	obj.setTo_Date(bk.getTo_Date());
    	obj.setTotal_Amount(bk.getTotal_Amount());
    	obj.setBalance_Amount(bk.getBalance_Amount());
    	obj.setDiscount(bk.getDiscount());
    	obj.setDamage_Cost(bk.getDamage_Cost());
    	obj.setStatus(bk.getStatus());
    	obj.setApproved_On(bk.getApproved_On());
    	obj.setCancellation_Reason(bk.getCancellation_Reason());
    	obj.setRemarks(bk.getRemarks());
    	
    	
      bkrepo.save(obj);
    

        return "Updated successfully";
    }

   
    return "Booking not found";
}
}

















