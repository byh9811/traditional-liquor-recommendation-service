package com.theStupids.traditionalliquorrecommendationservice.dto;

import lombok.Data;

import java.util.List;

@Data
public class StoreResponse {
    Status status;
    List<StoreDTO> data;
    PageData pageData;
}