package com.example.HotalManagement.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.HotalManagement.entity.User;

public interface UserRepository extends JpaRepository<User,Long> {

}
