package com.example.HotalManagement.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.HotalManagement.entity.Booking;

public interface BookRepository extends JpaRepository<Booking,Long>{



}
