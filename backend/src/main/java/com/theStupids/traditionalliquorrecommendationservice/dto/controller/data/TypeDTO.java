package com.theStupids.traditionalliquorrecommendationservice.dto.controller.data;

import lombok.Data;

import java.util.List;

@Data
public class TypeDTO {
    private int id;
    private List<String> question;

    public TypeDTO(List<String> question) {
        this.question = question;
    }
}
