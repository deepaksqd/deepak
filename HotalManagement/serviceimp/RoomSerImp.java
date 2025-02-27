package com.example.HotalManagement.serviceimp;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.HotalManagement.entity.Room;
import com.example.HotalManagement.repo.RoomRepository;
import com.example.HotalManagement.service.RoomService;


@Service
public class RoomSerImp implements RoomService{
	
	@Autowired
 private RoomRepository rep;
	
	public String crt(Room rrr) {
		
		rep.save(rrr);
		return "create";
	}
	
	
	public List<Room> getall(){
		
		return rep.findAll();
	}

	public Room getid(Long id) {
		
		Optional<Room>obj=rep.findById(id);
		
		
		if(obj.isPresent()) {
			
			
		 return	rep.findById(id).get();
			
			
		}
		return null;
		
		
	}
	
	public String deleteid(Long id) {
		
		Optional<Room>obj2=rep.findById(id);
		
		if(obj2.isPresent()) {
			
			rep.deleteById(id);
			
			return "delete sucessfully";
		}
		
		return "not found";
	}
	
	

@Override
public String updat(Room rrr) {
 
    
  if(rep.existsById(rrr.getRoomId())) {
	  
	  
	  Room obj3=rep.getById(rrr.getRoomId());
	  
	  
	  obj3.setRoom_Number(rrr.getRoom_Number());
      obj3.setStatus(rrr.getStatus());
      obj3.setCost_Per_Day(rrr.getCost_Per_Day());
      obj3.setRoom_Type(rrr.getRoom_Type());
      
      rep.save(obj3);
   
        return "Updated successfully";
    }

   
    return "Room not found";
}}

