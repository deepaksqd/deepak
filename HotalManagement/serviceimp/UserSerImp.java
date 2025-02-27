package com.example.HotalManagement.serviceimp;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.HotalManagement.entity.Room;
import com.example.HotalManagement.entity.User;
import com.example.HotalManagement.repo.UserRepository;
import com.example.HotalManagement.service.UserService;
@Service
public class UserSerImp implements UserService {
	
	@Autowired
	private UserRepository repo;
	
	public String create(User us) {
		
		repo.save(us);
		
		return "created sucessfully";
	
	}
	
	
	public List<User> getall(){
		
		return repo.findAll();
	}
          
public User getid(Long id) {
		
		Optional<User>obj=repo.findById(id);
		
		
		if(obj.isPresent()) {
			
			
		 return	repo.findById(id).get();
			
			
		}
		return null;
		
		
	}


public String deleteid(Long id) {
	
	Optional<User>obj2=repo.findById(id);
	
	if(obj2.isPresent()) {
		
		repo.deleteById(id);
		
		return "delete sucessfully";
	}
	
	return "not found";
}      



public String updated(User hook) {
	
	
	  if(repo.existsById(hook.getId())) {
		  
		  User us=repo.getById(hook.getId());
		  
		  us.setName(hook.getName());
		  us.setUserName(hook.getUserName());
		  us.setPassword(hook.getPassword());
		  us.setContact_Number(hook.getContact_Number()); 
		  us.setAddress(hook.getAddress());
		  
		  repo.save(us);
	  
	  return "updated sucessfully";
	
	}
	return "not found ";
	
	
	
}

 
}

	
	
	
