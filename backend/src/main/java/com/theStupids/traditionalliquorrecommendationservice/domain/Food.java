package com.theStupids.traditionalliquorrecommendationservice.domain;

import jakarta.persistence.*;

@Entity
public class Food {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false)
    private String name;
}
