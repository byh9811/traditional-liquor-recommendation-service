package com.theStupids.traditionalliquorrecommendationservice.error.exception;

import com.theStupids.traditionalliquorrecommendationservice.error.errorcode.ErrorCode;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public class RestApiException extends RuntimeException {
    private final ErrorCode errorCode;
}
