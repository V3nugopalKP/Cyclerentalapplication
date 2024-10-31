package com.springproject.Cycle_Rental_System.entity;


import java.util.Date;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "cycles")
public class Cycle {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String brand;
    
    private String color;

    
    private String name;

    
    private String type;

    private String transmission;
    
    private String description;

    
    private Long price;
    

    
    private Date year;
    
    @Column(columnDefinition = "longblob")
    private byte[] image;
}
