package com.example.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.backend.entity.userBooking;

import com.example.backend.service.bookingService;

@RestController
@RequestMapping("/api/booking")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class bookingController {
    @Autowired
    private bookingService bookingService;

    @GetMapping("/all")
    public List<userBooking> getAllUsers() {
        return bookingService.getAllUsers();
    }

    @PostMapping("/add")
    public userBooking createuserBooking(@RequestBody userBooking userBooking) {
        return bookingService.createuserBooking(userBooking);
    }

    @PutMapping("/update")
    public userBooking updateuserBooking(@PathVariable Long id, @RequestBody userBooking updateduserBooking) {
        return bookingService.updateuserBooking(id, updateduserBooking);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteuserBooking(@PathVariable Long id) {
        bookingService.deleteuserBooking(id);
    }
}