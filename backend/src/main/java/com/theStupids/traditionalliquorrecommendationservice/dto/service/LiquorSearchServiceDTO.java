package com.theStupids.traditionalliquorrecommendationservice.dto.service;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class LiquorSearchServiceDTO {
    private String keyword;
    private int curPage;
    private int pageSize;
}
