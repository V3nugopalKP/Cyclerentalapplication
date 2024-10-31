package com.springproject.Cycle_Rental_System.services.admin;

import java.util.List;

import com.springproject.Cycle_Rental_System.dto.CycleDto;

public interface AdminService {
	boolean postCycle(CycleDto cycleDto);
	List<CycleDto> getAllCycles();

}
