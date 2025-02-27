package com.example.HotalManagement.entity;





import jakarta.persistence.Column;
import jakarta.persistence.Entity;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import jakarta.persistence.Table;

@Entity
@Table(name="tbl_User")
public class User {
	
	
	
@Id
@GeneratedValue(strategy=GenerationType.AUTO)
private Long id;

private String name;

@Column(name="userName"  ,nullable=false,unique=true)
private String userName;

@Column(name="password"  ,nullable=false)
private String  password ;

private String contact_Number;

private String address;



public User(int i, String string, String string2, String string3) {
	// TODO Auto-generated constructor stub
}

public Long getId() {
	return id;
}

public void setId(Long id) {
	this.id = id;
}

public String getName() {
	return name;
}

public void setName(String name) {
	this.name = name;
}

public String getUserName() {
	return userName;
}

public void setUserName(String userName) {
	this.userName = userName;
}

public String getPassword() {
	return password;
}

public void setPassword(String password) {
	this.password = password;
}

public String getContact_Number() {
	return contact_Number;
}

public void setContact_Number(String contact_Number) {
	this.contact_Number = contact_Number;
}

public String getAddress() {
	return address;
}

public void setAddress(String address) {
	this.address = address;
}

@Override
public String toString() {
	return "User [id=" + id + ", name=" + name + ", userName=" + userName + ", password=" + password
			+ ", contact_Number=" + contact_Number + ", address=" + address + "]";
}


}
