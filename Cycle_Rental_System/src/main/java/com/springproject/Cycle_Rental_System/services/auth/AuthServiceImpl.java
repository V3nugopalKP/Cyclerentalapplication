package com.springproject.Cycle_Rental_System.services.auth;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.springproject.Cycle_Rental_System.dto.SignupRequest;
import com.springproject.Cycle_Rental_System.dto.UserDto;
import com.springproject.Cycle_Rental_System.entity.User;
import com.springproject.Cycle_Rental_System.enums.UserRole;
import com.springproject.Cycle_Rental_System.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {
	private final UserRepository userRepository;

	@Override
	public UserDto createCustomer(SignupRequest signupRequest) {
		// TODO Auto-generated method stub
		User user = new User();
		user.setName(signupRequest.getName());
		user.setEmail(signupRequest.getEmail());
		user.setPassword(signupRequest.getPassword());
		user.setUserRole(UserRole.CUSTOMER);
		User createdUser = userRepository.save(user);
		UserDto userDto = new UserDto();
		userDto.setId(createdUser.getId());
		return userDto;
	}

	@Override
	public boolean hasCustomerWithEmail(String email) {
		// TODO Auto-generated method stub
		return userRepository.findFirstByEmail(email).isPresent();
	}

}
