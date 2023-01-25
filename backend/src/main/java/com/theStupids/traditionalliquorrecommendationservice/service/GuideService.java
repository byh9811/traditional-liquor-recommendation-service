package com.theStupids.traditionalliquorrecommendationservice.service;

import com.theStupids.traditionalliquorrecommendationservice.domain.guide.Guide;
import com.theStupids.traditionalliquorrecommendationservice.repository.GuideRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class GuideService {
    final GuideRepository guideRepository;

    public List<Guide> getGuideList() {
        return guideRepository.findAll();
    }
}
