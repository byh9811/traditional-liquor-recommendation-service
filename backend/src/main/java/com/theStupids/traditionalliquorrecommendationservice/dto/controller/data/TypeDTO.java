package com.theStupids.traditionalliquorrecommendationservice.dto.controller.data;

import lombok.Data;

import java.util.List;

@Data
public class TypeDTO {
    private int id;
    private String question;

    public TypeDTO(Type type) {
        this.question = type.getQuestion();
    }
}
