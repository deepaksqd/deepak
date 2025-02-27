package com.example.HotalManagement.service;

import java.util.List;

import com.example.HotalManagement.entity.Room;

public interface RoomService {

	public String crt(Room rrr);
	
	public List<Room> getall();
	
	public Room getid(Long id);
	
	public String deleteid(Long id);
	
	public String updat(Room rrr);

}
