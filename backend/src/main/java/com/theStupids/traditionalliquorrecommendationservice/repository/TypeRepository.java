package com.example.drink.repository;

import com.example.drink.domain.Guide;
import com.example.drink.domain.Type;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TypeRepository extends JpaRepository<Type, Integer> {
    Type findById(int id);
    List<Type> findAll();
}
