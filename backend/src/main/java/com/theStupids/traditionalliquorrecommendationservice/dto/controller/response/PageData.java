package com.theStupids.traditionalliquorrecommendationservice.dto.controller.response;

import lombok.Data;
import lombok.Getter;
import org.springframework.data.domain.Page;

/**
 * <pre>
 * 프론트에서 표시되는 페이징 데이터의 정보를 담는 클래스.
 * PagingResponse의 매개변수로 사용된다.
 * </pre>
 * @author byh9811
 * @version 1.0.0
 */
@Getter
public class PageData {
    /**
     * 페이징 바의 가장 왼쪽에 표시될 페이지
     */
    int startPage;

    /**
     * 페이징 바의 가장 오른쪽에 표시될 페이지
     */
    int endPage;

    /**
     * 맨 끝으로 이동하기 위한 전체 페이지 수
     */
    int totalPages;

    /**
     * 현재 페이지
     */
    int currentPage;

    /**
     * Page 클래스에 담긴 페이징 정보를 사용되는 형식에 맞게 가공하여 PageData로 변환하는 생성자.
     * @param data 페이징 데이터를 추출할 Page클래스.
     */
    public PageData(Page<?> data) {
        totalPages = data.getTotalPages();
        currentPage = data.getNumber() + 1;
        int end = (int) (Math.ceil(currentPage / 10.0)) * 10;
        int start = end - 9;
        int realEnd = (int) (Math.ceil(data.getTotalElements() / (double)data.getSize()));
        if(realEnd < end)
            end = realEnd;
        startPage = start;
        endPage = end;
    }
}
