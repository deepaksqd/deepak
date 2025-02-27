package com.example.HotalManagement.entity;




import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name="tbl_booking")
public class Booking {
	
	
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="id")
	private Long id;
	
    @Temporal(TemporalType.DATE) 
    @Column(name="booked on")
    private Date booked_On; 
    
    @ManyToOne
     private User user_Id;
	

	@ManyToOne
	private Room room_Id;
	
	@ManyToOne
	private User  approved_By;

	private Date from_Date;
  
     private Date to_Date;
    
    private double total_Amount;
     
    private double balance_Amount;
    
    private double discount;
   
    private double damage_Cost;
    
    private String status;
   
   
    private Date approved_On;
    
    
    private String cancellation_Reason ;
 
    private String remarks;
    
    public Booking() {
		
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Date getBooked_On() {
		return booked_On;
	}

	public void setBooked_On(Date booked_On) {
		this.booked_On = booked_On;
	}

	

	public Date getFrom_Date() {
		return from_Date;
	}

	public void setFrom_Date(Date from_Date) {
		this.from_Date = from_Date;
	}

	public Date getTo_Date() {
		return to_Date;
	}

	public void setTo_Date(Date to_Date) {
		this.to_Date = to_Date;
	}

	public double getTotal_Amount() {
		return total_Amount;
	}

	public void setTotal_Amount(double total_Amount) {
		this.total_Amount = total_Amount;
	}

	public double getBalance_Amount() {
		return balance_Amount;
	}

	public void setBalance_Amount(double balance_Amount) {
		this.balance_Amount = balance_Amount;
	}

	public double getDiscount() {
		return discount;
	}

	public void setDiscount(double discount) {
		this.discount = discount;
	}

	public double getDamage_Cost() {
		return damage_Cost;
	}

	public void setDamage_Cost(double damage_Cost) {
		this.damage_Cost = damage_Cost;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Date getApproved_On() {
		return approved_On;
	}

	public void setApproved_On(Date approved_On) {
		this.approved_On = approved_On;
	}

	public String getCancellation_Reason() {
		return cancellation_Reason;
	}

	public void setCancellation_Reason(String cancellation_Reason) {
		this.cancellation_Reason = cancellation_Reason;
	}

	public String getRemarks() {
		return remarks;
	}

	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}

	public User getUser_Id() {
		return user_Id;
	}

	public void setUser_Id(User user_Id) {
		this.user_Id = user_Id;
	}
    
	public Room getRoom_Id() {
		return room_Id;
	}

	public void setRoom_Id(Room room_Id) {
		this.room_Id = room_Id;
	}
	  public User getApproved_By() {
			return approved_By;
		}

		public void setApproved_By(User approved_By) {
			this.approved_By = approved_By;
		}

		@Override
		public String toString() {
			return "Booking [id=" + id + ", booked_On=" + booked_On + ", user_Id=" + user_Id + ", room_Id=" + room_Id
					+ ", approved_By=" + approved_By + ", from_Date=" + from_Date + ", to_Date=" + to_Date
					+ ", total_Amount=" + total_Amount + ", balance_Amount=" + balance_Amount + ", discount=" + discount
					+ ", damage_Cost=" + damage_Cost + ", status=" + status + ", approved_On=" + approved_On
					+ ", cancellation_Reason=" + cancellation_Reason + ", remarks=" + remarks + "]";
		}

}
