package com.theStupids.traditionalliquorrecommendationservice.dto;

import com.theStupids.traditionalliquorrecommendationservice.domain.Liquor;
import lombok.Data;

import java.util.List;

@Data
public class LiquorResponse {
    Status status;
    Object data;
}
