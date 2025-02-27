package com.example.HotalManagement.entity;

import jakarta.persistence.Entity;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="tbl_payment")
public class Payment {
	
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	private String payment_Method;
	private boolean status;
	

	@ManyToOne
	private Booking booking_Id;

	public Booking getBooking_Id() {
		return booking_Id;
	}

	public void setBooking_Id(Booking booking_Id) {
		this.booking_Id = booking_Id;
	}

	public User getCustomer_Id() {
		return customer_Id;
	}

	public void setCustomer_Id(User customer_Id) {
		this.customer_Id = customer_Id;
	}

	@ManyToOne
	private User customer_Id;
	
public Payment() {
	// TODO Auto-generated constructor stub
}

public Long getId() {
	return id;
}

public void setId(Long id) {
	this.id = id;
}

public String getPayment_Method() {
	return payment_Method;
}

public void setPayment_Method(String payment_Method) {
	this.payment_Method = payment_Method;
}

public boolean isStatus() {
	return status;
}

public void setStatus(boolean status) {
	this.status = status;
}

@Override
public String toString() {
	return "Payment [id=" + id + ", payment_Method=" + payment_Method + ", status=" + status + ", booking_Id="
			+ booking_Id + ", customer_Id=" + customer_Id + "]";
}

	

}
