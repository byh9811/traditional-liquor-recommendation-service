package com.theStupids.traditionalliquorrecommendationservice.dto.controller.response;

import lombok.Data;

@Data
public class BaseResponse {
    Status status;
    Object data;
}
