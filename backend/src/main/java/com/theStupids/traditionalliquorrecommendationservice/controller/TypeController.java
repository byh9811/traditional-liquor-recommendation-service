package com.example.drink.controller;

import com.example.drink.domain.Type;
import com.example.drink.dto.controller.response.BaseResponse;
import com.example.drink.dto.controller.response.GuideResponse;
import com.example.drink.dto.controller.response.Status;
import com.example.drink.service.TypeService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class TypeController {
    final TypeService typeService;
    //술 취향 테스트 페이지
    @GetMapping("/questions")
    public List<Type> getTypeList() {
        BaseResponse response = new BaseResponse();
        Status status = new Status();
        try {
            response.setData(typeService.getTypeList());
            status.setSuccess();
            response.setStatus(status);
        } catch (Exception e) {
            status.setFail();
            response.setStatus(status);
        }
        return typeService.getTypeList();
    }

}
