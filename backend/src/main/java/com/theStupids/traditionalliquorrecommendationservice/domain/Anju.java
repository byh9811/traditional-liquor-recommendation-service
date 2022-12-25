package com.theStupids.traditionalliquorrecommendationservice.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import lombok.Data;

@Data
@Entity(name = "anju")
@IdClass(AnjuId.class)
public class Anju {
    @Id
    private int lid;

    @Id
    private int fid;
}
