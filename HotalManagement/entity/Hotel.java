

package com.example.HotalManagement.entity;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.util.Arrays;
import java.util.Date;

@Entity
@Table(name = "tbl_hotel") 
public class Hotel {
    @Id
	@GeneratedValue(strategy = GenerationType.AUTO)
    private Long  id;
	
    private String name;

    private Date established_On;

    private String address;
  
    private byte[] photo;
    
  

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

	public Date getEstablished_On() {
		return established_On;
	}

	public void setEstablished_On(Date established_On) {
		this.established_On = established_On;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public byte[] getPhoto() {
		return photo;
	}

	public void setPhoto(byte[] photo) {
		this.photo = photo;
	}

	@Override
	public String toString() {
		return "Hotel [id=" + id + ", name=" + name + ", established_On=" + established_On + ", address=" + address
				+ ", photo=" + Arrays.toString(photo) + "]";
	}
    
  
	
}
