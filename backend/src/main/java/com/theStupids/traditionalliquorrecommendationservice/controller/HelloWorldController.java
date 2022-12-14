package com.theStupids.traditionalliquorrecommendationservice.controller;

import com.theStupids.traditionalliquorrecommendationservice.domain.Store;
import com.theStupids.traditionalliquorrecommendationservice.dto.Status;
import com.theStupids.traditionalliquorrecommendationservice.dto.PageData;
import com.theStupids.traditionalliquorrecommendationservice.dto.StoreResponse;
import com.theStupids.traditionalliquorrecommendationservice.service.StoreService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class HelloWorldController {
    final StoreService storeService;

    @GetMapping("/test")
    public StoreResponse test() {
        StoreResponse response = new StoreResponse();
        Status status = new Status();
        status.setCode(200);
        status.setMessage("Success");
        response.setStatus(status);

        Page<Store> storePage = storeService.getStores("서울", 0);
        response.setData(storePage.get().toList());
        PageData pd = new PageData();
        pd.setTotalPages(storePage.getTotalPages());
        pd.setCurrentPage(storePage.getNumber()+1);
        int endPage = (int) (Math.ceil(pd.getCurrentPage() / 10.0)) * 10;
        int startPage = endPage-9;
        int realEnd = (int) (Math.ceil(storePage.getTotalElements() / 10.0));
        if(realEnd < endPage)
            endPage = realEnd;
        pd.setStartPage(startPage);
        pd.setEndPage(endPage);
        response.setPageData(pd);

        return response;
    }
}
