package com.theStupids.traditionalliquorrecommendationservice.dto.controller.data;

import com.theStupids.traditionalliquorrecommendationservice.domain.LiquorList;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class LiquorListDTO {
    private int id;
    private String title;
    private String img;
    private int price;
    private int volume;
    private String type;
    private double alcohol;
    private List<String> food;

    public LiquorListDTO(LiquorList liquorList, List<String> food) {
        this.id = liquorList.getId();
        this.title = liquorList.getTitle();
        this.price = liquorList.getPrice();
        this.volume = liquorList.getVolume();
        this.type = liquorList.getType();
        this.alcohol = liquorList.getAlcohol();
        this.food = food;
    }
}
