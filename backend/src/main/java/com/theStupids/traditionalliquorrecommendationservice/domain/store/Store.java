package com.theStupids.traditionalliquorrecommendationservice.domain.store;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity(name = "store")
@Getter
public class Store {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, unique = true)
    private String address;

    @Column(unique = true)
    private String tel;

    @Column(unique = true)
    private String link;
}
