package com.beauty.board.controller;

import com.beauty.board.dao.StoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class StoryController {
    @Autowired
    private StoryRepository storyRepository;

    @GetMapping(path = "/storyList")
    private String showStory(Model model) {
        model.addAttribute("story", storyRepository.findAll());
        return "storyList";
    }
}
