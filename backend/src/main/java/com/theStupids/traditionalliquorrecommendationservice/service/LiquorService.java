package com.theStupids.traditionalliquorrecommendationservice.service;

import com.theStupids.traditionalliquorrecommendationservice.domain.Liquor;
import com.theStupids.traditionalliquorrecommendationservice.domain.LiquorList;
import com.theStupids.traditionalliquorrecommendationservice.dto.controller.data.LiquorCarouselDTO;
import com.theStupids.traditionalliquorrecommendationservice.dto.controller.data.LiquorListDTO;
import com.theStupids.traditionalliquorrecommendationservice.dto.controller.data.LiquorRecommendDTO;
import com.theStupids.traditionalliquorrecommendationservice.dto.service.LiquorSearchServiceDTO;
import com.theStupids.traditionalliquorrecommendationservice.repository.LiquorRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
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

    public Page<LiquorList> getLiquorList(LiquorSearchServiceDTO dto) {
        return liquorRepository.findByTitleContaining(dto.getKeyword(), PageRequest.of(dto.getCurPage(), dto.getPageSize()));
    }

    public List<LiquorRecommendDTO> getRecommendLiquor(int[] answer) {
        return liquorRepository.findClosest(answer[0], answer[1], answer[2], answer[3]).stream().map(l -> new LiquorRecommendDTO(l.getId(), l.getTitle(), l.getImg())).toList();
    }
}
