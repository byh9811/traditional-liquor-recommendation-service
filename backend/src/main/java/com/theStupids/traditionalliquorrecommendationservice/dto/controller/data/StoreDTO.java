package com.theStupids.traditionalliquorrecommendationservice.dto.controller.data;

import com.theStupids.traditionalliquorrecommendationservice.domain.store.Store;
import lombok.Data;

import java.util.List;

@Data
public class StoreDTO {
    private int id;
    private String name;
    private String address;
    private String tel;
    private List<String> menu;
    private String link;

    public StoreDTO(Store store, List<String> menu) {
        this.id = store.getId();
        this.name = store.getName();
        this.address = store.getAddress();
        this.tel = store.getTel();
        this.link = store.getLink();
        this.menu = menu;
    }
}
