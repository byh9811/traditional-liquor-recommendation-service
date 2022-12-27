package com.theStupids.traditionalliquorrecommendationservice.dto.controller.response;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class PagingResponse {
    Object data;
    PageData pageData;
}