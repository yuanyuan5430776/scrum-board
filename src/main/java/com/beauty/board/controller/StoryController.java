package com.beauty.board.controller;

import com.beauty.board.dao.StoryRepository;
import com.beauty.board.model.Story;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
public class StoryController {
    private StoryRepository storyRepository;

    public StoryController(StoryRepository storyRepository) {
        this.storyRepository = storyRepository;
    }

    @GetMapping("stories")
    private Collection<Story> getStories() {
        return storyRepository.findAll();
    }
}
