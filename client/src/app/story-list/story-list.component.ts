import { Component, OnInit } from '@angular/core';
import { StoryService } from '../shared/story.service';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.less']
})
export class StoryListComponent implements OnInit {
  stories: Array<any>;

  constructor(private storyService: StoryService) { }

  ngOnInit() {
    this.storyService.getAll().subscribe(data => {
      this.stories = data;
    });
  }

}
