package com.theStupids.traditionalliquorrecommendationservice.dto.service;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class StoreSearchServiceDTO {
    private String regionExp;
    private int curPage;
    private int pageSize;
}
