package com.springproject.Cycle_Rental_System.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.springproject.Cycle_Rental_System.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {

	Optional<User> findFirstByEmail(String email);

}
