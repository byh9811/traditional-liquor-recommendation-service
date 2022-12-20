package com.theStupids.traditionalliquorrecommendationservice.controller;

import com.theStupids.traditionalliquorrecommendationservice.dto.controller.data.LiquorDetailDTO;
import com.theStupids.traditionalliquorrecommendationservice.dto.controller.response.BaseResponse;
import com.theStupids.traditionalliquorrecommendationservice.dto.controller.response.Status;
import com.theStupids.traditionalliquorrecommendationservice.service.LiquorService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

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

    @GetMapping("/main-carousel")
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
}
