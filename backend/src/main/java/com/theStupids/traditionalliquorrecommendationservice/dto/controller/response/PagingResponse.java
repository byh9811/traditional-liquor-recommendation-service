package com.theStupids.traditionalliquorrecommendationservice.dto.controller.response;

import lombok.Data;

@Data
public class PagingResponse {
    Status status;
    Object data;
    PageData pageData;
}