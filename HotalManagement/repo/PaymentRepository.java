package com.example.HotalManagement.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.HotalManagement.entity.Payment;

public interface PaymentRepository extends JpaRepository<Payment,Long>{

}
