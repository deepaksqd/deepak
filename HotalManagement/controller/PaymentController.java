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

import com.example.HotalManagement.entity.Payment;
import com.example.HotalManagement.service.PaymentService;

@RestController
@RequestMapping("/PaymentController")
public class PaymentController {
	
	
	@Autowired
	private PaymentService pser;
	

    @PostMapping("/create")
    public String createPayment(@RequestBody Payment pay) {
        return pser.creat(pay);
    }


    @GetMapping("/listall")
    public List<Payment> getAllPayments() {
        return pser.getall();
    }

    @GetMapping("/{id}")
    public Payment getPaymentById(@RequestParam    Long  id) {
        return pser.getid(id);
    }


    @PostMapping("/ update")
    public  String updateid( @RequestBody Payment pay) {
        return pser.updt(  pay);
    }
    
    
    @DeleteMapping("/delete")
    public String deleteid(@RequestParam  Long id) {
    	
    	
    	return pser.delt(id);
    	
    	
    }

    
    
    
}
