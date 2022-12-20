package com.theStupids.traditionalliquorrecommendationservice.dto;

import com.theStupids.traditionalliquorrecommendationservice.dto.controller.response.Status;
import lombok.Data;

import java.util.List;

@Data
public class GuideResponse {
    Status status;
    List<GuideDTO> data;
}
