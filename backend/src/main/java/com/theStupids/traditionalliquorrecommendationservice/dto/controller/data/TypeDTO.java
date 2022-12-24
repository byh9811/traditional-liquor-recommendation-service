package com.theStupids.traditionalliquorrecommendationservice.dto.controller.data;

import com.theStupids.traditionalliquorrecommendationservice.domain.Type;
import lombok.Data;

@Data
public class TypeDTO {
    private int id;
    private String question;

    public TypeDTO(Type type) {
        this.question = type.getQuestion();
    }
}
