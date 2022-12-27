package com.theStupids.traditionalliquorrecommendationservice.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SellId implements Serializable {
    private int sid;
    private int fid;
}
