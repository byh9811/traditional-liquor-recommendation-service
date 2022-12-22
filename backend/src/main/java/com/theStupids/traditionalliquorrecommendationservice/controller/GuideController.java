package com.theStupids.traditionalliquorrecommendationservice.controller;

import com.theStupids.traditionalliquorrecommendationservice.domain.Guide;
import com.theStupids.traditionalliquorrecommendationservice.dto.controller.response.BaseResponse;
import com.theStupids.traditionalliquorrecommendationservice.dto.controller.response.Status;
import com.theStupids.traditionalliquorrecommendationservice.service.GuideService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class GuideController {
    final GuideService guideService;

    @GetMapping("/drink-guides")
    public List<Guide> getGuideList() {
        BaseResponse response = new BaseResponse();
        Status status = new Status();
        try {
            response.setData(guideService.getGuideList());
            status.setSuccess();
            response.setStatus(status);
        } catch (Exception e) {
            status.setFail();
            response.setStatus(status);
        }
        return guideService.getGuideList();
    }
}
