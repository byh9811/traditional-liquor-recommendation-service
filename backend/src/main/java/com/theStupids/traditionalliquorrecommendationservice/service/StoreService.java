package com.theStupids.traditionalliquorrecommendationservice.service;

import com.theStupids.traditionalliquorrecommendationservice.domain.Food;
import com.theStupids.traditionalliquorrecommendationservice.domain.Store;
import com.theStupids.traditionalliquorrecommendationservice.dto.controller.data.StoreDTO;
import com.theStupids.traditionalliquorrecommendationservice.dto.service.StoreSearchServiceDTO;
import com.theStupids.traditionalliquorrecommendationservice.repository.FoodRepository;
import com.theStupids.traditionalliquorrecommendationservice.repository.StoreRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import com.theStupids.traditionalliquorrecommendationservice.domain.StoreList;

@Service
@RequiredArgsConstructor
public class StoreService {
    final StoreRepository storeRepository;
    final FoodRepository foodRepository;

    public Page<StoreDTO> getStores(StoreSearchServiceDTO dto) {
        Page<StoreList> storePage = storeRepository.findByAddress(PageRequest.of(dto.getCurPage(), dto.getPageSize()), dto.getRegionExp());
        return storePage.map(l -> new StoreDTO(l, foodRepository.findSell(l.getId()).stream().map(Food::getName).toList()));
    }
}
