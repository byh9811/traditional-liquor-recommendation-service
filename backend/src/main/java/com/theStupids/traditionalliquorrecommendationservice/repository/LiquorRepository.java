package com.theStupids.traditionalliquorrecommendationservice.repository;

import com.theStupids.traditionalliquorrecommendationservice.domain.Liquor;
import com.theStupids.traditionalliquorrecommendationservice.domain.LiquorCarousel;
import com.theStupids.traditionalliquorrecommendationservice.domain.LiquorList;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LiquorRepository extends JpaRepository<Liquor, Integer> {
    Liquor findById(int id);

    List<LiquorCarousel> findTop3ByOrderByIdAsc();
    Page<LiquorList> findByTitleContaining(String keyword, Pageable pageable);
}
