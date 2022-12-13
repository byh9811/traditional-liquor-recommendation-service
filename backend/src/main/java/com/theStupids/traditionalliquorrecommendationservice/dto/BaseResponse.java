package com.theStupids.traditionalliquorrecommendationservice.dto;

import lombok.Data;

@Data
public class BaseResponse {
    int status;
    String message;
    Object data;
}
