package com.theStupids.traditionalliquorrecommendationservice.controller;

import com.theStupids.traditionalliquorrecommendationservice.dto.controller.response.BaseResponse;
import com.theStupids.traditionalliquorrecommendationservice.service.GuideService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class GuideController {
    final GuideService guideService;

    @GetMapping("/guides")
    public BaseResponse getGuideList() {
        return new BaseResponse(guideService.getGuideList());
    }
}
