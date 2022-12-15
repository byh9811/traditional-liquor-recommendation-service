package com.theStupids.traditionalliquorrecommendationservice.controller;

import com.theStupids.traditionalliquorrecommendationservice.domain.Store;
import com.theStupids.traditionalliquorrecommendationservice.dto.PageData;
import com.theStupids.traditionalliquorrecommendationservice.dto.Status;
import com.theStupids.traditionalliquorrecommendationservice.dto.StoreDTO;
import com.theStupids.traditionalliquorrecommendationservice.dto.StoreResponse;
import com.theStupids.traditionalliquorrecommendationservice.service.StoreService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
@RequiredArgsConstructor
public class StoreController {
    final StoreService storeService;

    @GetMapping("/drinks-stores")
    public StoreResponse getStores() {
        StoreResponse response = new StoreResponse();
        Status status = new Status();
        status.setSuccess();
        response.setStatus(status);

        Page<Store> storePage = storeService.getStores("서울", 0);
        response.setData(storePage.get().map(s -> new StoreDTO(s, new ArrayList<>())).toList());
        response.setPageData(new PageData(storePage.getTotalPages(), storePage.getNumber(), storePage.getTotalElements()));

        return response;
    }
}
