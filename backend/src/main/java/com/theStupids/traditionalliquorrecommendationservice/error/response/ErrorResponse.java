package com.theStupids.traditionalliquorrecommendationservice.error.response;

import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.validation.FieldError;

import java.util.List;

@Getter
@RequiredArgsConstructor
@Builder
public class ErrorResponse {
    private final String code;
    private final String message;
}
