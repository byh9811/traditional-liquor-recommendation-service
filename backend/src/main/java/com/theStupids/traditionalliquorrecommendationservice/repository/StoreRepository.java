package com.theStupids.traditionalliquorrecommendationservice.repository;

import com.theStupids.traditionalliquorrecommendationservice.domain.LiquorList;
import com.theStupids.traditionalliquorrecommendationservice.domain.Store;
import com.theStupids.traditionalliquorrecommendationservice.domain.StoreList;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface StoreRepository extends JpaRepository<Store, Integer> {

    @Query(value = "select * from store where regexp_like(address, :exp)", nativeQuery = true)
    Page<StoreList> findByAddress(Pageable pageable, @Param("exp") String exp);
}
