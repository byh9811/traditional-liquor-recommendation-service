package com.theStupids.traditionalliquorrecommendationservice.dto.controller.data;

import lombok.Data;

import java.util.List;

@Data
public class TypeDTO {
    private int id;
    private List<String> questions;

    public TypeDTO(List<String> questions) {
        this.questions = questions;
    }
}
