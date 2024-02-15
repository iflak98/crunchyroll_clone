import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatButtonModule} from '@angular/material/button';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AnimeSliderComponent } from './anime-slider/anime-slider.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PopularanimeComponent } from './popularanime/popularanime.component';
import { SearchAnimeComponent } from './search-anime/search-anime.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { DescriptionLimitPipe } from './description-limit.pipe';

@NgModule({
  declarations: [
    AppComponent,
  
    NavBarComponent,
    AnimeSliderComponent,
    PopularanimeComponent,
    SearchAnimeComponent,DescriptionLimitPipe
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatInputModule,
     BrowserAnimationsModule,
     FormsModule,ReactiveFormsModule ,
     MatSelectModule,
     
     MatExpansionModule,MatGridListModule,MatListModule,MatIconModule, FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }