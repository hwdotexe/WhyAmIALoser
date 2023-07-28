import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ContentComponent } from './components/content/content.component';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, ContentComponent, NotFoundComponent, AboutComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
