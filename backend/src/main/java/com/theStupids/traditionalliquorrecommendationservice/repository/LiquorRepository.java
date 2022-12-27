package com.theStupids.traditionalliquorrecommendationservice.repository;

import com.theStupids.traditionalliquorrecommendationservice.domain.Liquor;
import com.theStupids.traditionalliquorrecommendationservice.domain.LiquorCarousel;
import com.theStupids.traditionalliquorrecommendationservice.domain.LiquorList;
import com.theStupids.traditionalliquorrecommendationservice.domain.LiquorRecommend;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LiquorRepository extends JpaRepository<Liquor, Integer> {
    Liquor findById(int id);

    List<LiquorCarousel> findTop3ByOrderByIdAsc();

    Page<LiquorList> findByTitleContains(String keyword, Pageable pageable);

    @Query(value = "select l.id, l.img, l.title from liquor l order by pow(l.sweet-:sweet, 2)+pow(l.sour-:sour, 2)+pow(l.body-:body, 2)+pow(l.cool-:cool, 2) limit 3", nativeQuery = true)
    List<LiquorRecommend> findClosest(@Param("sweet") int sweet, @Param("sour") int sour, @Param("body") int body, @Param("cool") int cool);
}
