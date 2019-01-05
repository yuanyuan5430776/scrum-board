import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { StoryService } from '../shared/story.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-story-edit',
  templateUrl: './story-edit.component.html',
  styleUrls: ['./story-edit.component.less']
})
export class StoryEditComponent implements OnInit, OnDestroy {

  story: any = {};
  sub: Subscription;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private storyService: StoryService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.storyService.get(id).subscribe((story: any) => {
          if (story) {
            this.story = story;
          } else {
            console.log(`Can't find story with id:${id}`);
            this.gotoList();
          }
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  gotoList() {
    this.router.navigate(['/stories']);
  }

  save(form: NgForm) {
    this.storyService.save(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }
}
