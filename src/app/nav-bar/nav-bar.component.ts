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
    this.animeservice.allAnimeMock().subscribe((res: any) => {
      this.animelist = res;
      this.genre = new Set(); // Using a Set to store unique genres

      // Iterate over each anime object
      this.animelist.forEach((anime: { genres: any[] }) => {
        // Iterate over genres of each anime and add them to the set
        anime.genres.forEach((genre: any) => {
          this.genre.add(genre);
        });
      });
      console.log('genres', this.genre);
    });
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
    this.animeservice.setgenreSelected('');
    this.animeservice.setSearchBar(true);
    console.log(this.router.url);
    this.reloadpage();
  }
  // data: any = signal('');
  genreSelected(genre: any) {
    this.selectedGenre = genre;
    this.isDropdownVisible = !this.isDropdownVisible;
    // this.animeservice.datagen.set(this.selectedGenre);
    this.animeservice.setgenreSelected(this.selectedGenre);
    this.animeservice.setSearchBar(false);
    this.reloadpage();
    //  window.location.reload();

    console.log(
      'selected genre=>',
      this.selectedGenre,
      this.animeservice.getSearchbar()
    );
  }
  reloadpage() {
    if (this.router.url == '/search') {
      // Force page reload
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/search']);
      });
    }
  }
}
