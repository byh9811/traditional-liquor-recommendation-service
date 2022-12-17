package com.theStupids.traditionalliquorrecommendationservice.dto;

import lombok.Data;

import java.util.List;

@Data
public class GuideResponse {
    Status status;
    List<GuideDTO> data;
}
