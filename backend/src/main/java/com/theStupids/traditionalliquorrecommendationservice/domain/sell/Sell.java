package com.theStupids.traditionalliquorrecommendationservice.domain.sell;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import lombok.Getter;

@Getter
@Entity(name = "sell")
@IdClass(SellId.class)
public class Sell {

    @Id
    private int fid;

    @Id
    private int sid;
}
