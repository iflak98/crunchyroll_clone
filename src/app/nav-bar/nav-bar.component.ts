import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Output,
  Renderer2,
  signal,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, RouterLink } from '@angular/router';
import { faSignal } from '@fortawesome/free-solid-svg-icons';
import { AnimeService } from '../services/anime.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  panelOpenState: boolean = false;
  genre: any;
  isDropdownVisible: boolean = false;
  isnewsVisible: boolean = false;
  animelist: any;
  filteredItems: any;
  downloadJsonHref: any;
  selectedGenre: any;
  // constructor(private animeService:AnimeService) {}
  constructor(private animeservice: AnimeService, private router: Router) {}
  ngOnInit(): void {}
  animelist1 = [1, 2, 3];

  toggleDropdown() {
    this.isDropdownVisible = true;
    console.log(this.isDropdownVisible);
    // this.animeservice.getgenre().subscribe({
    //   next: (res: any) => {
    //     this.genre = res;
    //     console.log('data recieved=>', this.genre);
    //   },
    //   error: (error) => {
    //     console.error('Error fetching anime data:', error);
    //   },
    //   complete: () => {
    //     // Optional: Handle completion logic if needed
    //   },
    // });
    this.genre = [
      'Action',
      'Adventure',
      'Comedy',
      'Drama',
      'Fantasy',
      'Horror',

      'Mystery',
      'Romance',
      'Sci-Fi',
      'Slice of Life',
      'Sports',
      'Thriller',
      'Hentai',
    ];
  }

  // generateDownloadJsonUri() {

  //     var theJSON = JSON.stringify(this.genre);
  //     var uri = this.sanitizer.bypassSecurityTrustUrl("data:text/json;charset=UTF-8," + encodeURIComponent(theJSON));
  //     this.downloadJsonHref = uri;
  // }

  togglenews() {
    this.isnewsVisible = !this.isnewsVisible;
    if (this.isDropdownVisible) {
    }
  }
  search() {
    // this.animeservice.datagen.set(' ');
    this.animeservice.setgenreSelected("")
    this.animeservice.setSearchBar(true);
    console.log(this.router.url);

    // if (this.router.url == '/search') window.location.reload();
  }
  // data: any = signal('');
  genreSelected(genre: any) {
    
    this.selectedGenre = genre;
    this.isDropdownVisible = !this.isDropdownVisible;
    // this.animeservice.datagen.set(this.selectedGenre);
    this.animeservice.setgenreSelected(this.selectedGenre);
    this.animeservice.setSearchBar(false);
      
    //  window.location.reload();

    console.log(
      'selected genre=>',
      this.selectedGenre,
      this.animeservice.getSearchbar()
    );
   
    // const param={
    //   page: "1",
    //   size: "26",
    //   search: "",
    //   genres: this.selectedGenre,
    //   sortBy: "",
    //   sortOrder: ""
    // }
    // this.animeservice.getAnime(param).subscribe((res: any) => {
    //   this.animelist = res.data.slice(0, 10);
    //   // this.filteredItems = this.animelist.slice(0, 10);
    //   // this.animelist = res.data.slice(0, 10);
    //   console.log("data==>>>>",this.animelist)
    // });
    // this.animeservice.genreData.set(this.animelist)
  }
  // @HostListener('document:click', ['$event'])
  // public documentClick(event: Event): void {
  //   console.log(
  //     'event=>',
  //     event,
  //     'this.isDropdownVisible=>',
  //     this.isDropdownVisible
  //   );
  //   // this.isDropdownVisible
  //   if ((this.isDropdownVisible = true)) {
  //     this.animeservice.datagen.set('');
  //     // this.isDropdownVisible = false;
  //   }

  //   //doSomething () --> Your logic when there is a document click
  // }
}
