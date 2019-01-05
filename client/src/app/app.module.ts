import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { StoryService } from './shared/story.service';
import { StoryListComponent } from './story-list/story-list.component';
import { StoryEditComponent } from './story-edit/story-edit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/stories', pathMatch: 'full' },
  { path: 'stories', component: StoryListComponent },
  { path: 'stories/:id', component: StoryEditComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    StoryListComponent,
    StoryEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [StoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
