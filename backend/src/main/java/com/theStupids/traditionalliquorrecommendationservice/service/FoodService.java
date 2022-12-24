package com.theStupids.traditionalliquorrecommendationservice.service;

import com.theStupids.traditionalliquorrecommendationservice.domain.Type;
import com.theStupids.traditionalliquorrecommendationservice.repository.FoodRepository;
import com.theStupids.traditionalliquorrecommendationservice.repository.TypeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class FoodService {
    final FoodRepository foodRepository;
}
