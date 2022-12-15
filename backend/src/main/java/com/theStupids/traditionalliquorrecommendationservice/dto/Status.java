package com.theStupids.traditionalliquorrecommendationservice.dto;

import lombok.Data;

@Data
public class Status {
    int code;
    String message;

    public void setSuccess() {
        code = 200;
        message = "Success";
    }
}
