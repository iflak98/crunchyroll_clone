import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeSliderComponent } from './anime-slider/anime-slider.component';
import { SearchAnimeComponent } from './search-anime/search-anime.component';

const routes: Routes = [
 { path: '',component:AnimeSliderComponent,},
 { path: 'search',component:SearchAnimeComponent },
 { path: '**',component:AnimeSliderComponent, redirectTo:''},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  

 }
