package com.theStupids.traditionalliquorrecommendationservice.controller;

import com.theStupids.traditionalliquorrecommendationservice.dto.controller.response.BaseResponse;
import com.theStupids.traditionalliquorrecommendationservice.service.TypeService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class TypeController {
    final TypeService typeService;

    @GetMapping("/questions")
    public BaseResponse getTypeList() {
        return new BaseResponse(typeService.getTypeList());
    }

}
