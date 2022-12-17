package com.theStupids.traditionalliquorrecommendationservice.service;

import com.theStupids.traditionalliquorrecommendationservice.domain.Liquor;
import com.theStupids.traditionalliquorrecommendationservice.repository.LiquorRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class LiquorService {
    final LiquorRepository liquorRepository;

    public Liquor getLiquor(int id) {
        return liquorRepository.findById(id);
    }
}
