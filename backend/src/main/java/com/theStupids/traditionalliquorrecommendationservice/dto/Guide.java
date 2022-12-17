package com.example.drink.domain;

import lombok.Getter;
import lombok.Setter;

import jakarta.persistence.*;

@Entity(name = "guides")
@Getter
@Setter
public class Guide {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false, unique = true)
    private String keyword;

    @Column
    private String meaning;
}
