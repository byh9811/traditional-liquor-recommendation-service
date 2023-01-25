package com.theStupids.traditionalliquorrecommendationservice.repository;

import com.theStupids.traditionalliquorrecommendationservice.domain.type.Type;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TypeRepository extends JpaRepository<Type, Integer> {
 
    List<Type> findAll();
}
