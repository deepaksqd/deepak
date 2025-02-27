package com.example.HotalManagement.service;

import java.util.List;

import com.example.HotalManagement.entity.User;


public interface UserService {
	
	
	public String create(User us);
	
	public List<User> getall();
	
	public User getid(Long id);
	
	public String deleteid(Long id);
	
	public String updated(User hook);



}
