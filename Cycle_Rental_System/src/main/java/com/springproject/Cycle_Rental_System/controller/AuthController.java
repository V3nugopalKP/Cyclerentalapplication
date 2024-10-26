package com.springproject.Cycle_Rental_System.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springproject.Cycle_Rental_System.dto.SignupRequest;
import com.springproject.Cycle_Rental_System.dto.UserDto;
import com.springproject.Cycle_Rental_System.services.auth.AuthService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {
	private final AuthService authService;
	
	@PostMapping("/signup")
	public ResponseEntity<?> signupCustomer(@RequestBody SignupRequest signuprequest) {
		if (authService.hasCustomerWithEmail(signuprequest.getEmail())) {
            return new ResponseEntity<>("Email is already in use. Please choose another one.", HttpStatus.NOT_ACCEPTABLE);
        }
        UserDto createdCustomerDto = authService.createCustomer(signuprequest);
        if(createdCustomerDto == null) {
        	return new ResponseEntity<>("Customer not created, Come again Later",HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(createdCustomerDto, HttpStatus.CREATED);
    }
}
