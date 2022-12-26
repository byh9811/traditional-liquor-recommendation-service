package com.theStupids.traditionalliquorrecommendationservice.repository;

import com.theStupids.traditionalliquorrecommendationservice.domain.Liquor;
import com.theStupids.traditionalliquorrecommendationservice.domain.LiquorCarousel;
import com.theStupids.traditionalliquorrecommendationservice.domain.LiquorList;
import com.theStupids.traditionalliquorrecommendationservice.domain.LiquorRecommend;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LiquorRepository extends JpaRepository<Liquor, Integer> {
    Liquor findById(int id);

    List<LiquorCarousel> findTop3ByOrderByIdAsc();

    Page<LiquorList> findByTitleContains(String keyword, Pageable pageable);

    @Query(value = "select l.id, l.img, l.title from liquor l order by pow(l.sweet-:sweet)+pow(l.sour-:sour)+pow(l.body-:body)+pow(l.cool-:cool) limit 3", nativeQuery = true)
    List<LiquorRecommend> findClosest(int sweet, int sour, int body, int cool);
}
