package com.beauty.board.dao;

import com.beauty.board.model.Story;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface StoryRepository extends Repository<Story,Integer> {
    @Query("SELECT id,name,status FROM stories ")
    @Transactional(readOnly = true)
    List<Story> findAll();

}
