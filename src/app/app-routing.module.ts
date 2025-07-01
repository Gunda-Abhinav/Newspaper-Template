import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NewsComponent } from './news/news.component';
import { WeeklyNewsComponent } from './weekly-news/weekly-news.component';
import { WhatsNewComponent } from './whats-new/whats-new.component';

const routes: Routes = [
  {
    path : "news",
    component : NewsComponent
  },
  {
    path : "",
    component : MainComponent
  },
  {
    path : "weekly-news",
    component : WeeklyNewsComponent
  },
  {
    path : "whats-new",
    component : WhatsNewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
