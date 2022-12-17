package com.theStupids.traditionalliquorrecommendationservice.controller;

import com.theStupids.traditionalliquorrecommendationservice.dto.LiquorDetailDTO;
import com.theStupids.traditionalliquorrecommendationservice.dto.LiquorResponse;
import com.theStupids.traditionalliquorrecommendationservice.dto.Status;
import com.theStupids.traditionalliquorrecommendationservice.service.LiquorService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
@RequiredArgsConstructor
public class LiquorController {
    final LiquorService liquorService;

    @GetMapping("/drinks/{id}")
    public LiquorResponse getLiquor(@PathVariable("id") int id) {
        LiquorResponse response = new LiquorResponse();
        Status status = new Status();
        status.setSuccess();
        response.setStatus(status);

        response.setData(new LiquorDetailDTO(liquorService.getLiquor(id), new ArrayList<>()));

        return response;
    }
}
