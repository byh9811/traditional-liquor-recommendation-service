package com.theStupids.traditionalliquorrecommendationservice.domain.sell;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import lombok.Data;

@Data
@Entity(name = "sell")
@IdClass(SellId.class)
//@ToString(exclude = {"sid", "fid"})
public class Sell {

    @Id
    //@ManyToOne(fetch = FetchType.LAZY)
    private int fid;

    @Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    //@ManyToOne(fetch = FetchType.LAZY)
    private int sid;
}
