package com.theStupids.traditionalliquorrecommendationservice.domain;

import lombok.Getter;
import lombok.Setter;

import jakarta.persistence.*;

@Entity(name = "guide")
@Getter
public class Guide {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false)
    private String keyword;

    @Column(nullable = false)
    private String meaning;
}
