package com.theStupids.traditionalliquorrecommendationservice.service;

import com.theStupids.traditionalliquorrecommendationservice.repository.FoodRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class FoodService {
    final FoodRepository foodRepository;
}
