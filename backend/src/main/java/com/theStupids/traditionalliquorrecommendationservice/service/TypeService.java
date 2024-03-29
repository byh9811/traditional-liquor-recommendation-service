package com.theStupids.traditionalliquorrecommendationservice.service;

import com.theStupids.traditionalliquorrecommendationservice.domain.type.Type;
import com.theStupids.traditionalliquorrecommendationservice.repository.TypeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TypeService {
    final TypeRepository typeRepository;

    public List<Type> getTypeList() {
        return typeRepository.findAll();
    }

}
