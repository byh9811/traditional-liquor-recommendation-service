package com.theStupids.traditionalliquorrecommendationservice.dto.controller.response;

import lombok.Data;

@Data
public class Status {
    int code;
    String message;

    public void setSuccess() {
        code = 200;
        message = "Success";
    }

    public void setFail() {
        code = 500;
        message = "Error";
    }
}
