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

import com.example.HotalManagement.entity.Room;
import com.example.HotalManagement.service.RoomService;

@RestController
@RequestMapping("/RoomController")
public class RoomController {
	
	@Autowired
	private RoomService rser;
	
	@PostMapping("create")
	public String cre(@RequestBody Room rrr) {
		
		return rser.crt(rrr);
	}

	@GetMapping("/listall")
	public List<Room> listall(){
		
		return rser.getall();
	}
	
	@GetMapping("/{id}")
	public Room bit(@RequestParam Long id) {
		
		return rser.getid(id);
	}
	
	@DeleteMapping("/delete")
	public String delt(@RequestParam Long id) {
		
		return rser.deleteid(id);
	}
	
	@PostMapping("/update")
	public String updt(@RequestBody Room rrr) {
		
		
		return rser.updat(rrr);
	}
	
}
