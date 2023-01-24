package com.theStupids.traditionalliquorrecommendationservice.domain.Liquor;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;

@Entity(name = "liquor")
@Getter
public class Liquor {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private int price;

    @Column(nullable = false)
    private int volume;

    @Column(nullable = false)
    private String type;

    @Column(nullable = false)
    private double alcohol;

    @Column(nullable = false)
    private int sweet;

    @Column(nullable = false)
    private int sour;

    @Column(nullable = false)
    private int body;

    @Column(nullable = false)
    private int cool;

    @Column(nullable = false)
    private String material;

    @Column(nullable = false)
    private String company;

    @Column(nullable = false)
    private int flavor_type;
}