package com.theStupids.traditionalliquorrecommendationservice.dto;

import lombok.Data;

@Data
public class PageData {
    int totalData;
    int dataPerPage;
    int pageCount;
    int currentPage;
}
