package com.theStupids.traditionalliquorrecommendationservice.domain.type;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity(name = "type")
@Getter
public class Type {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false)
    private String question;

}