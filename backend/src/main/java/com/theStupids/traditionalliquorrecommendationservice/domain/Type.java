package com.example.drink.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity(name = "types")
@Getter
@Setter
public class Type {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false, unique = true)
    private String questions;

}
