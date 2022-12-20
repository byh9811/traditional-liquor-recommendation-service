package com.theStupids.traditionalliquorrecommendationservice.service;

import com.theStupids.traditionalliquorrecommendationservice.domain.Liquor;
import com.theStupids.traditionalliquorrecommendationservice.dto.controller.data.LiquorCarouselDTO;
import com.theStupids.traditionalliquorrecommendationservice.repository.LiquorRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class LiquorService {
    final LiquorRepository liquorRepository;

    public Liquor getLiquor(int id) {
        return liquorRepository.findById(id);
    }

    public List<LiquorCarouselDTO> getCarouselLiquor() {
        return liquorRepository.findTop3ByOrderByIdAsc().stream().map(i -> new LiquorCarouselDTO(i.getId(), i.getTitle(), i.getImg())).toList();
    }
}
