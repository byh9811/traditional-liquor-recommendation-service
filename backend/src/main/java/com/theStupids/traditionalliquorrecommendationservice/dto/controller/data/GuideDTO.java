package com.theStupids.traditionalliquorrecommendationservice.dto;

import com.theStupids.traditionalliquorrecommendationservice.domain.Guide;
import lombok.Data;


@Data
public class GuideDTO {
    private int id;
    private List<String> keyword;
    private List<String> meaning;

    public GuideDTO(List<String> keyword, List<String> meaning) {
        this.keyword = keyword;
        this.meaning = meaning;
    }
}
