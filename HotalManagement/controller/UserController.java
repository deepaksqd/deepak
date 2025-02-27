package com.example.HotalManagement.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.HotalManagement.entity.Room;
import com.example.HotalManagement.entity.User;
import com.example.HotalManagement.service.UserService;

import jakarta.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/UserController")
public class UserController {
	
	@Autowired
	private UserService use;
	
	
	@PostMapping("/create")
	public String creat(@RequestBody User us) {
		
		return use.create(us);
	}
	
	public List<User> listall(){
		
		return use.getall();
	}
  
	
	@GetMapping("/{id}")
	public User bito(@RequestParam Long id) {
		
		return use.getid(id);
	}
	
	@DeleteMapping("/delete")
	public String deltq(@RequestParam Long id) {
		
		return use.deleteid(id);
	}
	

	@PostMapping("/update")
	public String updtm(@RequestBody User hook) {
		
		
		return use.updated(hook);
	}
	
	
	
	
	
	private List<User> user=new ArrayList<>(List.of(
			
			new User(1,"gowtham","635467327","ponneri"),
			
			new User(2,"jack","6354673272","chinnaponneri")
			));
	
	public List<User> getUser(){
		
		return user;
	}
	

	
}