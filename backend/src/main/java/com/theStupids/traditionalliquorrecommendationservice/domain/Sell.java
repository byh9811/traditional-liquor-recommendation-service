package com.theStupids.traditionalliquorrecommendationservice.domain;

import lombok.Data;

import javax.persistence.*;

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
