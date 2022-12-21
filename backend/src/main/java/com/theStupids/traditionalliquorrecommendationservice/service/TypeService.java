package com.example.drink.service;

import com.example.drink.domain.Type;
import com.example.drink.repository.TypeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TypeService {
    final TypeRepository typeRepository;

    public Type getType(int id) {
        return typeRepository.findById(id);
    }

    public List<Type> getTypeList() {
        return typeRepository.findAll();
    }

}
