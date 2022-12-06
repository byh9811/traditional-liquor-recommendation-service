package com.theStupids.traditionalliquorrecommendationservice;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {
    @GetMapping("/api/test")
    public String test() {
        return "Spring operational";
    }
}
