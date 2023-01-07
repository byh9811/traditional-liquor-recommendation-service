package com.theStupids.traditionalliquorrecommendationservice.service;

import com.theStupids.traditionalliquorrecommendationservice.domain.Food;
import com.theStupids.traditionalliquorrecommendationservice.domain.LiquorCarousel;
import com.theStupids.traditionalliquorrecommendationservice.domain.LiquorList;
import com.theStupids.traditionalliquorrecommendationservice.dto.controller.data.LiquorDetailDTO;
import com.theStupids.traditionalliquorrecommendationservice.dto.controller.data.LiquorListDTO;
import com.theStupids.traditionalliquorrecommendationservice.dto.controller.data.LiquorRecommendDTO;
import com.theStupids.traditionalliquorrecommendationservice.dto.service.LiquorSearchServiceDTO;
import com.theStupids.traditionalliquorrecommendationservice.repository.FoodRepository;
import com.theStupids.traditionalliquorrecommendationservice.repository.LiquorRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class LiquorService {
    final LiquorRepository liquorRepository;
    final FoodRepository foodRepository;

    public LiquorDetailDTO getLiquor(int id) {
        return new LiquorDetailDTO(liquorRepository.findById(id), foodRepository.findAnju(id).stream().map(Food::getName).toList());
    }

    public List<Integer> getCarouselLiquor() {
        return liquorRepository.findRandom().stream().map(LiquorCarousel::getId).toList();
    }

    public Page<LiquorListDTO> getLiquorList(LiquorSearchServiceDTO dto) {
        Page<LiquorList> liquorPage = liquorRepository.findByTitleContains(dto.getKeyword(), PageRequest.of(dto.getCurPage(), dto.getPageSize()));
        return liquorPage.map(l -> new LiquorListDTO(l, foodRepository.findAnju(l.getId()).stream().map(Food::getName).toList()));
    }

    public List<LiquorRecommendDTO> getRecommendLiquor(int[] answer) {
        return liquorRepository.findClosest(answer[0], answer[1], answer[2], answer[3]).stream().map(l -> new LiquorRecommendDTO(l.getId(), l.getTitle())).toList();
    }
}
