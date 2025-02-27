package com.example.HotalManagement.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.HotalManagement.entity.Hotel; 

public interface HotRepository extends JpaRepository<Hotel,Long> {
   
}
