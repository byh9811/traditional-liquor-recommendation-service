package com.theStupids.traditionalliquorrecommendationservice.controller;

import com.theStupids.traditionalliquorrecommendationservice.dto.controller.data.LiquorListDTO;
import com.theStupids.traditionalliquorrecommendationservice.dto.controller.response.BaseResponse;
import com.theStupids.traditionalliquorrecommendationservice.dto.controller.response.PageData;
import com.theStupids.traditionalliquorrecommendationservice.dto.controller.response.PagingResponse;
import com.theStupids.traditionalliquorrecommendationservice.dto.service.LiquorSearchServiceDTO;
import com.theStupids.traditionalliquorrecommendationservice.service.LiquorService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;

@RestController
@RequiredArgsConstructor
@RequestMapping("/drinks")
public class LiquorController {
    final LiquorService liquorService;

    @GetMapping("/{id}")
    public BaseResponse getLiquor(@PathVariable("id") int id) {
        return new BaseResponse(liquorService.getLiquor(id));
    }

    @GetMapping("/main-carousel")
    public BaseResponse getCarouselLiquor() {
        return new BaseResponse(liquorService.getCarouselLiquor());
    }

    @GetMapping()
    public PagingResponse getLiquorList(@RequestParam("search") String keyword, @RequestParam("limit") int limit, @RequestParam("page") int page) {
        Page<LiquorListDTO> liquorPage = liquorService.getLiquorList(new LiquorSearchServiceDTO(keyword, page-1, limit));
        return new PagingResponse(liquorPage.get(), new PageData(liquorPage));
    }

    @GetMapping("/recommendation")
    public BaseResponse getRecommendationLiquor(@RequestParam("answer") String answer) {
        return new BaseResponse(liquorService.getRecommendLiquor(Arrays.stream(answer.split(",")).mapToInt(Integer::parseInt).toArray()));
    }
}
