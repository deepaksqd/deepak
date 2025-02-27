package com.example.HotalManagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.HotalManagement.entity.Hotel;
import com.example.HotalManagement.service.HotelService;

@RestController
@RequestMapping("/hotel")
public class HotalController {

    @Autowired
    private HotelService hotelService;

    @PostMapping("/create")
    public String create(@RequestBody Hotel hotel) {
        return hotelService.create(hotel);
    }

    @GetMapping("/list")
    public List<Hotel> listAll() {
        return hotelService.getAll();
    }

    @GetMapping("/{id}")
    public Hotel getOne(@RequestParam Long id) {
        return hotelService.getById(id);
    }

    @DeleteMapping("/delete")
    public String delete(@RequestParam Long id) {
        return hotelService.deleteById(id);
    }

    @PostMapping("/update")
    public String update(@RequestBody Hotel hotel) {
        return hotelService.update(hotel);
    }
}
