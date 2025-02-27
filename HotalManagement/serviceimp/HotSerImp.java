package com.example.HotalManagement.serviceimp;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.HotalManagement.entity.Hotel;
import com.example.HotalManagement.repo.HotRepository;
import com.example.HotalManagement.service.HotelService;

@Service
public class HotSerImp implements HotelService {

    @Autowired
    private HotRepository hotelRepository;

    @Override
    public String create(Hotel hotel) {
        try {
            if (hotel.getName() != null && !hotel.getName().isEmpty() &&
            
                hotel.getAddress() != null && !hotel.getAddress().isEmpty() &&
                hotel.getPhoto() != null ); {

                	Hotel jp =new Hotel();
                	
                	jp.setName(hotel.getName());
                	jp.setEstablished_On(hotel.getEstablished_On());
                	jp.setAddress(hotel.getAddress());
                	jp.setPhoto(hotel.getPhoto());
                	
                	
                hotelRepository.save(jp);
                return "Hotel created successfully";
            }
               
        } 
            catch (Exception e) {
          
            System.out.println("Error creating hotel: " + e.getMessage());
            return "Error creating hotel: " + e.getMessage();
        }
    }

    @Override
    public List<Hotel> getAll() {
        return hotelRepository.findAll();
    }

    @Override
    public Hotel getById(Long id) {
        Optional<Hotel> hotel = hotelRepository.findById(id);
        return hotel.orElse(null);
    }

    @Override
    public String deleteById(Long id) {
        Optional<Hotel> hotel = hotelRepository.findById(id);
        if (hotel.isPresent()) {
            hotelRepository.deleteById(id);
            return "Hotel deleted successfully";
        } else {
            return "Hotel not found";
        }
    }

    @Override
    public String update(Hotel hotel) {
      
    	
    	if( hotelRepository.existsById(hotel.getId())) {
    		
    		Hotel obj1=hotelRepository.getById(hotel.getId());
          
    		obj1.setName(hotel.getName());
    		obj1.setEstablished_On(hotel.getEstablished_On());
    		obj1.setAddress(hotel.getAddress());
    		obj1.setPhoto(hotel.getPhoto());

    		
    		hotelRepository.save(obj1);
    		 
                return "Updated successfully";
            }

            return "Hotel not found";
        }


      
        	
        	
        	
        	
        	
        	
        	
        	
        	
        }
            
