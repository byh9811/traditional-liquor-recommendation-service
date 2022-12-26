package com.theStupids.traditionalliquorrecommendationservice.controller;

import com.theStupids.traditionalliquorrecommendationservice.domain.Store;
import com.theStupids.traditionalliquorrecommendationservice.dto.controller.data.StoreDTO;
import com.theStupids.traditionalliquorrecommendationservice.dto.controller.response.PageData;
import com.theStupids.traditionalliquorrecommendationservice.dto.controller.response.PagingResponse;
import com.theStupids.traditionalliquorrecommendationservice.dto.controller.response.Status;
import com.theStupids.traditionalliquorrecommendationservice.dto.service.StoreSearchServiceDTO;
import com.theStupids.traditionalliquorrecommendationservice.enumerate.Region;
import com.theStupids.traditionalliquorrecommendationservice.service.StoreService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
@RequiredArgsConstructor
public class StoreController {
    final StoreService storeService;

    @GetMapping("/stores")
    public PagingResponse getStores(@RequestParam("areaName") String areaName, @RequestParam("page") int page) {
        PagingResponse response = new PagingResponse();
        Status status = new Status();
        try {
            Page<Store> storePage = storeService.getStores(new StoreSearchServiceDTO(Region.valueOf(areaName).getExp(), page-1, 20));
            response.setData(storePage.get().map(s -> new StoreDTO(s, new ArrayList<>())).toList());
            response.setPageData(new PageData(storePage.getTotalPages(), storePage.getNumber(), storePage.getTotalElements()));
            status.setSuccess();
            response.setStatus(status);
        } catch (Exception e) {
            status.setFail();
            response.setStatus(status);
        }

        return response;
    }
}
