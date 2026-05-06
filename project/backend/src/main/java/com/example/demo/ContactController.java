package com.example.demo;

import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class ContactController {

    @GetMapping("/")
    public String home() {
        return "Backend is working!";
    }

    @PostMapping("/contact")
    public String handleContact(@RequestBody ContactForm form) {
        return "Message received!";
    }
}