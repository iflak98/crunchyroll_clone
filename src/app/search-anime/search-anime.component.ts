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

  animelist: any[] = [];
  filteredItems: any;
  // searchValue: any;
  searchValue = new FormControl('');
  pagination: any;
  datagen: any = signal('');
  searchbar: any = true;
  selectedgen: any = signal('');
  constructor(private animeservice: AnimeService) {}
  ngOnInit(): void {
    console.log('data', this.animelist);
    this.datagen = this.animeservice.datagen();
    // this.animelist = this.animeservice.genreData();
    console.log(
      'this.animeservice.searchbar()',
      this.animelist,
      this.animeservice.getSearchbar()
    );
    this.animeservice.getSearchbar().subscribe((data) => {
      this.searchbar = data;
    });
    // this.searchbar = this.animeservice.getSearchbar();
    console.log('datagen', this.datagen, this.searchbar);
    this.getAnime();
    console.log('data', this.filteredItems);
  }
  getAnime() {
    // this.animeservice.getAnimeForSearch().subscribe((res: any) => {
    //   this.animelist = res.data;
    //   this.filteredItems = this.animelist.slice(0, 10);
    // });
    // let selectedgen = "";
    if (this.searchbar == false) {
      // this.selectedgen = this.datagen;

      console.log('datagen---', this.datagen);
    } else {
      this.datagen = '';
      // window.location.reload();
    }

    const param = {
      page: '1',
      size: '26000',
      search: '',
      genres: this.datagen,
      sortBy: '',
      sortOrder: '',
    };
    this.animeservice.getAnime(param).subscribe((res: any) => {
      this.animelist = res.data;
      this.filteredItems = this.animelist.slice(0, 10);
    });
    // this. animeservice.getAnimeList(param).subscribe(
    //   data =>{
    //     this.animelist = data.data
    //     console.log("dataaaa=>",this.animelist,data)
    //     this.filteredItems = this.animelist.slice(0, 10);
    //   })
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
