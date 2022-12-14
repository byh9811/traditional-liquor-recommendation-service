package com.theStupids.traditionalliquorrecommendationservice.dto;

import com.theStupids.traditionalliquorrecommendationservice.domain.Store;
import lombok.Data;

import java.util.List;

@Data
public class StoreResponse {
    Status status;
    List<Store> data;
    PageData pageData;
}