package com.theStupids.traditionalliquorrecommendationservice.domain.Anju;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import lombok.Getter;

@Getter
@Entity(name = "anju")
@IdClass(AnjuId.class)
public class Anju {
    @Id
    private int lid;

    @Id
    private int fid;
}
