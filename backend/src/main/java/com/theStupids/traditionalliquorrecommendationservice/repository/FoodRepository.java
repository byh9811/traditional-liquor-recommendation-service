package com.theStupids.traditionalliquorrecommendationservice.repository;

import com.theStupids.traditionalliquorrecommendationservice.domain.Guide;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface FoodRepository extends JpaRepository<Guide, Integer> {
    @Query(value = "select name from food where id IN(select fid from anju where lid=:lid)", nativeQuery = true)
    List<String> findAnju(int lid);
}
