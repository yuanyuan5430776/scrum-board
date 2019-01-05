import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryEditComponent } from './story-edit.component';

describe('StoryEditComponent', () => {
  let component: StoryEditComponent;
  let fixture: ComponentFixture<StoryEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
