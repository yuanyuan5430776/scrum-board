package com.beauty.board.dao;

import com.beauty.board.model.Story;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StoryRepository extends JpaRepository<Story,Integer> {
}
