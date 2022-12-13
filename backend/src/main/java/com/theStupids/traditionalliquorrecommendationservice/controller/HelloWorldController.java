package com.theStupids.traditionalliquorrecommendationservice.controller;

import com.theStupids.traditionalliquorrecommendationservice.domain.Store;
import com.theStupids.traditionalliquorrecommendationservice.dto.BaseResponse;
import com.theStupids.traditionalliquorrecommendationservice.dto.PageData;
import com.theStupids.traditionalliquorrecommendationservice.service.StoreService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;

@RestController
@RequiredArgsConstructor
public class HelloWorldController {
    final StoreService storeService;

    @GetMapping("/test")
    public BaseResponse test() {
        BaseResponse response = new BaseResponse();
        response.setStatus(200);
        response.setMessage("Success");
        Page<Store> storePage = storeService.getStores("서울", 0);
        HashMap<String, Object> data = new HashMap<>();
        data.put("data", storePage.get());
        PageData pd = new PageData();
        pd.setTotalData((int)storePage.getTotalElements());
        pd.setDataPerPage(10);
        pd.setPageCount(storePage.getTotalPages());
        pd.setCurrentPage(storePage.getNumber());
        data.put("pageData", pd);
        response.setData(data);
        return response;
    }
}
