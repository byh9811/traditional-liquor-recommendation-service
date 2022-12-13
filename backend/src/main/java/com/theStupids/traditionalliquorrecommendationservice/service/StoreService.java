package com.theStupids.traditionalliquorrecommendationservice.service;

import com.theStupids.traditionalliquorrecommendationservice.domain.Store;
import com.theStupids.traditionalliquorrecommendationservice.repository.StoreRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class StoreService {
    final StoreRepository storeRepository;

    public String getStoreName(int id) {
        return storeRepository.findById(id).getName();
    }

    public Page<Store> getStores(String region, int page) {
        return storeRepository.findByAddress(PageRequest.of(page, 10), region);
    }
}
