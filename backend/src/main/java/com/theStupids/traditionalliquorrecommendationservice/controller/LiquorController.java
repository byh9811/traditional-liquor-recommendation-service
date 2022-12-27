package com.theStupids.traditionalliquorrecommendationservice.controller;

import com.theStupids.traditionalliquorrecommendationservice.dto.controller.data.LiquorListDTO;
import com.theStupids.traditionalliquorrecommendationservice.dto.controller.response.BaseResponse;
import com.theStupids.traditionalliquorrecommendationservice.dto.controller.response.PageData;
import com.theStupids.traditionalliquorrecommendationservice.dto.controller.response.PagingResponse;
import com.theStupids.traditionalliquorrecommendationservice.dto.service.LiquorSearchServiceDTO;
import com.theStupids.traditionalliquorrecommendationservice.service.LiquorService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;

@RestController
@RequiredArgsConstructor
public class LiquorController {
    final LiquorService liquorService;

    @GetMapping("/drinks/{id}")
    public BaseResponse getLiquor(@PathVariable("id") int id) {
        return new BaseResponse(liquorService.getLiquor(id));
    }

    @GetMapping("/drinks/main-carousel")
    public BaseResponse getCarouselLiquor() {
        return new BaseResponse(liquorService.getCarouselLiquor());
    }

    @GetMapping("/drinks")
    public PagingResponse getLiquorList(@RequestParam("search") String keyword, @RequestParam("limit") int limit, @RequestParam("page") int page) {
        Page<LiquorListDTO> liquorPage = liquorService.getLiquorList(new LiquorSearchServiceDTO(keyword, page-1, limit));
        return new PagingResponse(liquorPage.get(), new PageData(liquorPage.getTotalPages(), liquorPage.getNumber(), liquorPage.getTotalElements()));
    }

    @GetMapping("/drinks/recommendation")
    public BaseResponse getRecommendationLiquor(@RequestParam("answer") String answer) {
        return new BaseResponse(liquorService.getRecommendLiquor(Arrays.stream(answer.split(",")).mapToInt(Integer::parseInt).toArray()));
    }
}
