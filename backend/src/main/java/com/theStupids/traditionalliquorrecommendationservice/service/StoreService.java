package com.theStupids.traditionalliquorrecommendationservice.service;

import com.theStupids.traditionalliquorrecommendationservice.domain.Store;
import com.theStupids.traditionalliquorrecommendationservice.dto.service.StoreSearchServiceDTO;
import com.theStupids.traditionalliquorrecommendationservice.repository.StoreRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class StoreService {
    final StoreRepository storeRepository;
    final FoodRepository foodRepository;

    public Page<Store> getStores(StoreSearchServiceDTO dto) {
        Page<StoreList> storePage = storeRepository.findByAddress(PageRequest.of(dto.getCurPage(), dto.getPageSize()), dto.getRegionExp());
        return storePage.map(l -> new StoreDTO(l, foodRepository.findSell(l.getId()).stream().map(Food::getName).toList()));
    }
}
