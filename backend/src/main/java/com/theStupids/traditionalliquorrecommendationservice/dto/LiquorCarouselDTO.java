package com.theStupids.traditionalliquorrecommendationservice.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class LiquorCarouselDTO {
    private int id;
    private String title;
    private String img;
}
