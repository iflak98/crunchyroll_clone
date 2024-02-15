import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../services/anime.service';

@Component({
  selector: 'app-popularanime',
  templateUrl: './popularanime.component.html',
  styleUrls: ['./popularanime.component.scss']
})
export class PopularanimeComponent implements OnInit{
animelist:any[]=[];
filteredItems:any[]=[];
  topRankedAnime: any[]=[];
  popularAnime: any[]=[];
constructor(private animeservice : AnimeService){}
ngOnInit(): void {
  console.log("data",this.animelist)
   const param={
  // page:4,
  // type:"tv",
  // sort:"",
  // genres:1,
  // status:"", airing
  //  letter:"o", 
  // for search return all animes with "H" in their name
  // limit:"20" 
 }
  if(this.animelist==undefined || this.animelist.length==0)
 { this. animeservice.getAnimeList(param).subscribe(
    data =>{
      this.animelist = data.data
   
    this.topRankedAnime=this.animelist;
    this.popularAnime=this.animelist;
    this.topRankedAnime=this.topRankedAnime.sort((a:any,b:any)=> a.rank - b.rank ).slice(0,20);
    this.popularAnime=this.popularAnime.sort((a:any,b:any)=> a.popularity - b.popularity ).slice(0,20);
      // this.filteredItems=this.animelist;
      this.filteredItems=this.animelist.slice(0,5)
    console.log("Data received=>",this.animelist,"topRankedAnime",this.topRankedAnime,"popularAnime",this.popularAnime,"filtered",this.filteredItems);}
  )}
  // this.filteredItems=this.TopRanking()
 
}
currentIndex=0;
TopRanking(){
 

}
}
