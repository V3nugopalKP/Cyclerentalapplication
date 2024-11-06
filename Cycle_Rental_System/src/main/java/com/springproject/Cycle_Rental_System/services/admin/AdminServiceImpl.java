package com.springproject.Cycle_Rental_System.services.admin;


import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import java.io.IOException;

import org.springframework.stereotype.Service;

import com.springproject.Cycle_Rental_System.dto.CycleDto;
import com.springproject.Cycle_Rental_System.entity.Cycle;
import com.springproject.Cycle_Rental_System.repository.CycleRepository;

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

	@Override
	public void deleteCycle(Long id) {
		cycleRepository.deleteById(id);
		
		
	}

	@Override
	public CycleDto getCycleById(Long id) {
	  Optional<Cycle> optionalCycle = cycleRepository.findById(id);
	  return optionalCycle.map(Cycle::getCycleDto).orElse(null);
	
	}
	
	@Override
	public boolean updateCycle(Long cycleId, CycleDto cycleDto) throws IOException{
	    Optional<Cycle> optionalCycle = cycleRepository.findById(cycleId);
	    if (optionalCycle.isPresent()) {
	        Cycle existingCycle = optionalCycle.get();
	        if (cycleDto.getImage() != null) {
	            existingCycle.setImage(cycleDto.getImage().getBytes());
	        }
	        existingCycle.setPrice(cycleDto.getPrice());
	        existingCycle.setYear(cycleDto.getYear());
	        existingCycle.setType(cycleDto.getType());
	        existingCycle.setDescription(cycleDto.getDescription());
	        existingCycle.setTransmission(cycleDto.getTransmission());
	        existingCycle.setColor(cycleDto.getColor());
	        existingCycle.setName(cycleDto.getName());
	        existingCycle.setBrand(cycleDto.getBrand());
	        cycleRepository.save(existingCycle);
	        return true;
	    } else {
	        return false;
	    }
	}




	

}
