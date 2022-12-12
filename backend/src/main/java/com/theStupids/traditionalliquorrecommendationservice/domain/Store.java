package com.theStupids.traditionalliquorrecommendationservice.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity(name = "stores")
@Getter
@Setter
public class Store {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, unique = true)
    private String address;

    @Column
    private String time;

    @Column(unique = true)
    private String tel;

    @Column
    private String link;
}
