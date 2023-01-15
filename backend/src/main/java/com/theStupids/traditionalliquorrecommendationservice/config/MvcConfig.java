package com.theStupids.traditionalliquorrecommendationservice.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class MvcConfig implements WebMvcConfigurer {
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/static/js/*").addResourceLocations("classpath:/static/static/js/");
        registry.addResourceHandler("/static/css/*").addResourceLocations("classpath:/static/static/css/");
        registry.addResourceHandler("/img/*").addResourceLocations("classpath:/static/img/");
        registry.addResourceHandler("/*.*").addResourceLocations("classpath:/static/");
    }
}
