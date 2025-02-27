package com.example.HotalManagement.entity;


import jakarta.persistence.Entity;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="tbl_room")
public class Room {
	
	
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long roomId;
	private String room_Number;
	private String  status;
	private double cost_Per_Day;
	private String room_Type;

public Room() {
	// TODO Auto-generated constructor stub
}



public Long getRoomId() {
	return roomId;
}



public void setRoomId(Long roomId) {
	this.roomId = roomId;
}



public String getRoom_Number() {
	return room_Number;
}

public void setRoom_Number(String room_Number) {
	this.room_Number = room_Number;
}

public String getStatus() {
	return status;
}

public void setStatus(String status) {
	this.status = status;
}

public double getCost_Per_Day() {
	return cost_Per_Day;
}

public void setCost_Per_Day(double cost_Per_Day) {
	this.cost_Per_Day = cost_Per_Day;
}

public String getRoom_Type() {
	return room_Type;
}

public void setRoom_Type(String room_Type) {
	this.room_Type = room_Type;
}



@Override
public String toString() {
	return "Room [roomId=" + roomId + ", room_Number=" + room_Number + ", status=" + status + ", cost_Per_Day="
			+ cost_Per_Day + ", room_Type=" + room_Type + "]";
}




	

}


   