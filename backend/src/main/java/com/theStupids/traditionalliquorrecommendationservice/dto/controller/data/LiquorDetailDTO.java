package com.theStupids.traditionalliquorrecommendationservice.dto.controller.data;

import com.theStupids.traditionalliquorrecommendationservice.domain.Liquor;
import lombok.Data;

import java.util.List;

@Data
public class LiquorDetailDTO {
    private int id;
    private String title;
    private String img;
    private int price;
    private int volume;
    private String type;
    private double alcohol;
    private List<String> food;
    private int sweet;
    private int sour;
    private int body;
    private int cool;
    private String material;
    private String company;
    private int flavorType;

    public LiquorDetailDTO(Liquor liquor, List<String> food) {
        this.id = liquor.getId();
        this.title = liquor.getTitle();
        this.price = liquor.getPrice();
        this.volume = liquor.getVolume();
        this.type = liquor.getType();
        this.alcohol = liquor.getAlcohol();
        this.food = food;
        this.sweet = liquor.getSweet();
        this.sour = liquor.getSour();
        this.body = liquor.getBody();
        this.cool = liquor.getCool();
        this.material = liquor.getMaterial();
        this.company = liquor.getCompany();
        this.flavorType = liquor.getFlavor_type();
    }
}
