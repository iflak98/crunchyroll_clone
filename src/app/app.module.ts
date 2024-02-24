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
import { LoginComponent } from './login/login.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { TempdevelopingComponent } from './tempdeveloping/tempdeveloping.component';
import {MatStepperModule} from '@angular/material/stepper';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import {MatTooltipModule} from '@angular/material/tooltip';
// import { SidenavComponent } from './sidenav/sidenav.component';
// import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  declarations: [
    AppComponent,
  
    NavBarComponent,
    AnimeSliderComponent,
    PopularanimeComponent,
    SearchAnimeComponent,DescriptionLimitPipe, LoginComponent, WatchlistComponent, TempdevelopingComponent, FooterComponent, SignupComponent, 
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
     MatSelectModule,MatStepperModule,
MatTooltipModule,
    //  MatSidenavModule,
     MatExpansionModule,MatGridListModule,MatListModule,MatIconModule, FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
