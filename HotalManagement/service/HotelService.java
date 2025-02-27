package com.example.HotalManagement.service;

import java.util.List;

import com.example.HotalManagement.entity.Hotel;

public interface HotelService {
    String create(Hotel hotel);
    
    List<Hotel> getAll();
    
    Hotel getById(Long id);
    
    String deleteById(Long id);
    
    String update(Hotel hotel);
}
