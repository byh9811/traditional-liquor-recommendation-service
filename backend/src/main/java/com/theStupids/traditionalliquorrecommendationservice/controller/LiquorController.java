package com.theStupids.traditionalliquorrecommendationservice.controller;

import com.theStupids.traditionalliquorrecommendationservice.domain.LiquorList;
import com.theStupids.traditionalliquorrecommendationservice.dto.controller.data.LiquorDetailDTO;
import com.theStupids.traditionalliquorrecommendationservice.dto.controller.data.LiquorListDTO;
import com.theStupids.traditionalliquorrecommendationservice.dto.controller.response.BaseResponse;
import com.theStupids.traditionalliquorrecommendationservice.dto.controller.response.PageData;
import com.theStupids.traditionalliquorrecommendationservice.dto.controller.response.PagingResponse;
import com.theStupids.traditionalliquorrecommendationservice.dto.controller.response.Status;
import com.theStupids.traditionalliquorrecommendationservice.dto.service.LiquorSearchServiceDTO;
import com.theStupids.traditionalliquorrecommendationservice.service.LiquorService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequiredArgsConstructor
public class LiquorController {
    final LiquorService liquorService;

    @GetMapping("/drinks/{id}")
    public BaseResponse getLiquor(@PathVariable("id") int id) {
        BaseResponse response = new BaseResponse();
        Status status = new Status();
        try {
            response.setData(new LiquorDetailDTO(liquorService.getLiquor(id), new ArrayList<>()));
            status.setSuccess();
            response.setStatus(status);
        } catch (Exception e) {
            status.setFail();
            response.setStatus(status);
        }

        return response;
    }

    @GetMapping("/drinks/main-carousel")
    public BaseResponse getCarouselLiquor() {
        BaseResponse response = new BaseResponse();
        Status status = new Status();
        try {
            response.setData(liquorService.getCarouselLiquor());
            status.setSuccess();
            response.setStatus(status);
        } catch (Exception e) {
            status.setFail();
            response.setStatus(status);
        }

        return response;
    }

    @GetMapping("/drinks")
    public PagingResponse getLiquorList(@RequestParam("search") String keyword, @RequestParam("page") int page) {
        PagingResponse response = new PagingResponse();
        Status status = new Status();
        try {
            Page<LiquorList> liquorPage = liquorService.getLiquorList(new LiquorSearchServiceDTO(keyword, page-1, 10));
            response.setData(liquorPage.get().map(l -> new LiquorListDTO(l, new ArrayList<>())).toList());
            response.setPageData(new PageData(liquorPage.getTotalPages(), liquorPage.getNumber(), liquorPage.getTotalElements()));
            status.setSuccess();
            response.setStatus(status);
        } catch (Exception e) {
            status.setFail();
            response.setStatus(status);
        }

        return response;
    }

    @GetMapping("/drinks/recommendation")
    public BaseResponse getRecommendationLiquor(@RequestParam("answer[]") List<Integer> answer) {
        BaseResponse response = new BaseResponse();
        Status status = new Status();
        try {
            response.setData(liquorService.getRecommendLiquor(answer));
            status.setSuccess();
        } catch (Exception e) {
            status.setFail();
        }
        response.setStatus(status);

        return response;
    }
}
