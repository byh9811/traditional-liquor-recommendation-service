package com.theStupids.traditionalliquorrecommendationservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class TraditionalLiquorRecommendationServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(TraditionalLiquorRecommendationServiceApplication.class, args);
	}

}
