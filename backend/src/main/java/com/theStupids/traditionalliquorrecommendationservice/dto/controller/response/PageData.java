package com.theStupids.traditionalliquorrecommendationservice.dto.controller.response;

import lombok.Data;

@Data
public class PageData {
    int startPage;
    int endPage;
    int totalPages;
    int currentPage;

    public PageData(int totalP, int current, long totalE) {
        totalPages = totalP;
        currentPage = current + 1;
        int end = (int) (Math.ceil(currentPage / 10.0)) * 10;
        int start = end - 9;
        int realEnd = (int) (Math.ceil(totalE / 10.0));
        if(realEnd < end)
            end = realEnd;
        startPage = start;
        endPage = end;
    }
}
