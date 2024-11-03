package com.springproject.Cycle_Rental_System.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springproject.Cycle_Rental_System.dto.CycleDto;
import com.springproject.Cycle_Rental_System.services.admin.AdminService;

import lombok.RequiredArgsConstructor;

import java.io.IOException;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
public class AdminController {
	private final AdminService adminService;

    @PostMapping("/cycle")
    public ResponseEntity<?> postCycle(@ModelAttribute CycleDto cycleDto) throws IOException {
        boolean success = adminService.postCycle(cycleDto);

        if (success) {
            return ResponseEntity.status(HttpStatus.CREATED).build();
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }
    
    @GetMapping("/cycles")
    public ResponseEntity<?> getAllCycles() {
        return ResponseEntity.ok(adminService.getAllCycles());
    }

    @DeleteMapping("/cycle/{id}")
    public ResponseEntity<Void> deleteCar(@PathVariable Long id) {
    adminService.deleteCycle(id);
    return ResponseEntity.ok().body(null);
}

    @GetMapping("/cycle/{id}")
    public ResponseEntity<CycleDto> getCycleById(@PathVariable Long id) {

        CycleDto cycleDto = adminService.getCycleById(id);
        return ResponseEntity.ok(cycleDto);

    }
}
