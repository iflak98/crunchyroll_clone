import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeSliderComponent } from './anime-slider/anime-slider.component';
import { LoginComponent } from './login/login.component';
import { SearchAnimeComponent } from './search-anime/search-anime.component';
import { SignupComponent } from './signup/signup.component';
import { TempdevelopingComponent } from './tempdeveloping/tempdeveloping.component';
import { WatchlistComponent } from './watchlist/watchlist.component';

const routes: Routes = [
 { path: '',component:AnimeSliderComponent,},
 { path: 'search',component:SearchAnimeComponent },
 { path: 'login',component:LoginComponent },
 {path:'signup',component:SignupComponent},
 { path: 'work-in-progress',component:TempdevelopingComponent },
 { path: 'watchlist',component:WatchlistComponent},
 { path: '**',component:AnimeSliderComponent, redirectTo:''},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  

 }
