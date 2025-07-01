import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NewsComponent } from './news/news.component';
import { WeeklyNewsComponent } from './weekly-news/weekly-news.component';
import { WhatsNewComponent } from './whats-new/whats-new.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NewsComponent,
    WeeklyNewsComponent,
    WhatsNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
