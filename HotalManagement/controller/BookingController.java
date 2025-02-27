package com.example.HotalManagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import com.example.HotalManagement.entity.Booking;
import com.example.HotalManagement.service.BookingService;

@RestController
@RequestMapping("/booking")
public class BookingController {
	
	@Autowired
 private BookingService bkser;
	
	
	
	@PostMapping("/create")
	public String creat(@RequestBody Booking bk) {
		
		
		return bkser. creates(bk);
		
	}
	
	@GetMapping("/List")
	  public List<Booking> listall(){
		  
		  return bkser.getall();
	  }
	
	
	@GetMapping("/{id}")
	  public Booking oneid(@RequestParam Long id) {
		
		return bkser.getid(id);		  
	  }
	
	
	@DeleteMapping("/delete")
	public String delt(@RequestParam Long id) {
		
		return bkser.deleteid(id);
	}
	
	
     @PostMapping("/update")
     public String updt(@RequestBody Booking bk) {
    	 
    	 return bkser.updat(bk);
     }
     
}
