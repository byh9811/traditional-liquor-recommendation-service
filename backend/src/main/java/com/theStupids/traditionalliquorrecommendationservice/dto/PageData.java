package com.theStupids.traditionalliquorrecommendationservice.dto;

import lombok.Data;

@Data
public class PageData {
    int startPage;
    int endPage;
    int totalPages;
    int currentPage;
}
