package com.springproject.Cycle_Rental_System.services.admin;


import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.springproject.Cycle_Rental_System.dto.CycleDto;
import com.springproject.Cycle_Rental_System.entity.Cycle;
import com.springproject.Cycle_Rental_System.repository.CycleRepository;

import io.jsonwebtoken.io.IOException;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AdminServiceImpl implements AdminService {
	private final CycleRepository cycleRepository;

	@Override
	public boolean postCycle(CycleDto cycleDto) {
		try {
	        Cycle cycle = new Cycle();
	        cycle.setName(cycleDto.getName());
	        cycle.setBrand(cycleDto.getBrand());
	        cycle.setColor(cycleDto.getColor());
	        cycle.setPrice(cycleDto.getPrice());
	        cycle.setYear(cycleDto.getYear());
	        cycle.setType(cycleDto.getType());
			cycle.setTransmission(cycleDto.getTransmission());
	        cycle.setDescription(cycleDto.getDescription());
	        cycle.setTransmission(cycleDto.getTransmission());
	        cycle.setImage(cycleDto.getImage().getBytes());
			
	        cycleRepository.save(cycle);
	        return true;
	    } catch (Exception e) {
	        return false;
	    }
	}

	@Override
	public List<CycleDto> getAllCycles() {
	    return cycleRepository.findAll().stream().map(Cycle::getCycleDto).collect(Collectors.toList());
	}
	

}
