package com.theStupids.traditionalliquorrecommendationservice.repository;

import com.theStupids.traditionalliquorrecommendationservice.domain.Food;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface FoodRepository extends JpaRepository<Food, Integer> {
    @Query(value = "select f from food f where exists (select 1 from anju a where a.lid=:lid and f.id=a.fid)")
    List<Food> findAnju(@Param("lid") int lid);

    @Query(value = "select f from food f where exists (select 1 from sell s where s.sid=:sid and f.id=s.fid)")
    List<Menu> findSell(@Param("sid") int sid);
}
