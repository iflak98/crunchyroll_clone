import { Component, OnInit, signal } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AnimeService } from '../services/anime.service';

@Component({
  selector: 'app-search-anime',
  templateUrl: './search-anime.component.html',
  styleUrls: ['./search-anime.component.scss'],
})
export class SearchAnimeComponent implements OnInit {
  // isSearching:boolean=true;

  animelist: any;
  filteredItems: any[] = [];
  // searchValue: any;
  searchValue = new FormControl('');
  pagination: any;
  datagen: any;
  // datagen: any = signal('');
  searchbar: any = true;
  // selectedgen: any = signal('');
  constructor(private animeservice: AnimeService) {}
  ngOnInit(): void {
    console.log('data', this.animelist);

    // this.datagen = this.animeservice.datagen();
    // this.animelist = this.animeservice.genreData();

    this.setValues();
    this.getAnime();
    console.log('data', this.filteredItems);
    // window.location.reload();
  }

  setValues() {
    this.animeservice.getgenreSelected().subscribe((res) => {
      this.datagen = res;
      console.log('value rep', res);
    });
    this.animeservice.getSearchbar().subscribe((data) => {
      this.searchbar = data;
    });
    // this.searchbar = this.animeservice.getSearchbar();
    console.log('datagen12', this.datagen, this.searchbar);
  }
  getAnime() {
    // this.animeservice.getAnimeForSearch().subscribe((res: any) => {
    //   this.animelist = res.data;
    //   this.filteredItems = this.animelist.slice(0, 10);
    // });
    // let selectedgen = "";
    this.filteredItems = [];
    this.animeservice.allAnimeMock().subscribe({
      next: (res) => {
        this.animelist = res;
        console.log(res, 'rtest');
        if (this.searchbar == false || this.datagen != '') {
          // this.selectedgen = this.datagen;
          this.filteredItems = this.filterByGenre(this.animelist, this.datagen);
          console.log('datagen---', this.datagen);
        } else {
          // this.datagen = '';
          this.filteredItems = this.animelist.slice(0, 10);
        }
      },
      error: (errMsg) => {
        console.log(errMsg);
      },
    });

    // this. animeservice.getAnimeList(param).subscribe(
    //   data =>{
    //     this.animelist = data.data
    //     console.log("dataaaa=>",this.animelist,data)
    //     this.filteredItems = this.animelist.slice(0, 10);
    //   })
  }
  filterByGenre(animelist: any, genre: any) {
    console.log('genre==', genre);
    let newList = this.animelist.filter((item: any) =>
      item.genres.includes(genre)
    );
    console.log('newlist', newList, animelist);
    return newList.slice(0, 10);
  }

  updateResults() {
    this.filteredItems = this.searchByValue(this.animelist).slice(0, 10);
  }

  searchByValue(items: any) {
    let result: any[] = [];
    let res = items?.map((val: any) => {
      if (
        val.title.toLowerCase().includes(this.searchValue.value?.toLowerCase())
      ) {
        result.push(val);
      }
    });

    return result;
  }
}
