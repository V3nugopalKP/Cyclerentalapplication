package com.springproject.Cycle_Rental_System.dto;

import java.util.Date;

import org.springframework.web.multipart.MultipartFile;

import lombok.Data;
@Data
public class CycleDto {
	private Long id;
    private String brand;
    private String color;
    private String name;
    private String type;
    private String description;
    private Long price;
    private Date year;
    private MultipartFile image;
    private byte[] returnedImage;

}
