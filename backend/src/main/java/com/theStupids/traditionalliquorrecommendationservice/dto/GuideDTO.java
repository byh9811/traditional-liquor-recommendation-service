package com.theStupids.traditionalliquorrecommendationservice.dto;

import com.theStupids.traditionalliquorrecommendationservice.domain.Guide;
import lombok.Data;


@Data
public class GuideDTO {
    private int id;
    private String keyword;
    private String meaning;

    public GuideDTO(Guide guide) {
        this.keyword = guide.getKeyword();
        this.meaning = guide.getMeaning();
    }
}
