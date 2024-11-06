package com.springproject.Cycle_Rental_System.services.customer;

import java.util.List;
import java.util.Optional;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.springproject.Cycle_Rental_System.dto.BookACycleDto;
import com.springproject.Cycle_Rental_System.dto.CycleDto;
import com.springproject.Cycle_Rental_System.entity.BookACycle;
import com.springproject.Cycle_Rental_System.entity.Cycle;
import com.springproject.Cycle_Rental_System.entity.User;
import com.springproject.Cycle_Rental_System.enums.BookCycleStatus;
import com.springproject.Cycle_Rental_System.repository.BookACycleRepository;
import com.springproject.Cycle_Rental_System.repository.CycleRepository;
import com.springproject.Cycle_Rental_System.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CustomerServiceImpl implements CustomerService {
	
	private final CycleRepository cycleRepository;
	private final UserRepository userRepository;
	private final BookACycleRepository bookACycleRepository;

	@Override
	public List<CycleDto> getAllCycles() {
		// TODO Auto-generated method stub
		return cycleRepository.findAll().stream().map(Cycle::getCycleDto).collect(Collectors.toList());
	}
	
	@Override
	public boolean bookACycle(BookACycleDto bookACycleDto) {
	  Optional<Cycle> optionalCycle = cycleRepository.findById(bookACycleDto.getCardId());
	  Optional<User> optionalUser = userRepository.findById(bookACycleDto.getUserId());

	  if (optionalCycle.isPresent() && optionalUser.isPresent()) {
	    Cycle existingCycle = optionalCycle.get();

	    BookACycle bookACycle = new BookACycle();
	    bookACycle.setUser(optionalUser.get());
	    bookACycle.setCycle(existingCycle);
	    bookACycle.setBookCycleStatus(BookCycleStatus.PENDING);

	    long diffInMilliseconds = bookACycleDto.getToDate().getTime() - bookACycleDto.getFromDate().getTime();
	    long days = TimeUnit.MILLISECONDS.toDays(diffInMilliseconds);

	    bookACycle.setDays(days);
	    bookACycle.setPrice(existingCycle.getPrice() * days);

	    bookACycleRepository.save(bookACycle);
	    return true;
	  }
	  return false;
	}


}
