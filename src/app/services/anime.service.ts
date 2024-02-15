import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class AnimeService {
  apiUrl = 'https://api.jikan.moe/v4/anime';
  rapidApiUrl = 'https://anime-db.p.rapidapi.com';
  key = '40f53392ccmsheb6aa412485c745p1f7c6djsne4df96978ea9';
  // key = '0e1de0ea58msh60d5e9112d7d671p1365e1jsn7d6e8c83e1e7';
  constructor(private http: HttpClient) {}
  datagen: any = signal('');
  // searchbar:any;
  // searchbar:any= signal(false);
  genreData:any=signal([])
  //  getAnime(param:any){}
  getAnime(param: any) {
    const params = {
      page: param.page,
      size: param.size,
      search: param.search,
      genres: param.genres,
      sortBy: param.sortBy,
      sortOrder: param.sortOrder,
    };

    // Create the query string
    const queryString = Object.keys(params)
      .map((key) => `${key}=${encodeURIComponent((params as any)[key])}`)
      .join('&');

    const headers = new HttpHeaders({
      // 'X-RapidAPI-Key': '0e1de0ea58msh60d5e9112d7d671p1365e1jsn7d6e8c83e1e7',
      'X-RapidAPI-Key': this.key,
      'X-RapidAPI-Host': 'anime-db.p.rapidapi.com',
    });

    // Make the GET request
    return this.http.get(`${this.rapidApiUrl}/anime?${queryString}`, {
      headers: headers,
    });

    //     // return this.http.get(this.apiUrl+'top/airing', { headers });
  }
private searchbar=new BehaviorSubject<boolean>(false);
search=this.searchbar.asObservable()
 setSearchBar(value: boolean) {
  this.searchbar.next(value);
}
getSearchbar(){
  return this.search;
}






  getgenre(): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        // 'X-RapidAPI-Key': '0e1de0ea58msh60d5e9112d7d671p1365e1jsn7d6e8c83e1e7',
        'X-RapidAPI-Key': this.key,
        'X-RapidAPI-Host': 'anime-db.p.rapidapi.com',
      }),
    };
    // const url = `${this.rapidApiUrl}`;
    //  const url=''
    return this.http.get(this.rapidApiUrl + '/genre', options);
  }

  getAnimeList(param: any): Observable<any> {
    // const apiUrl = 'http://localhost:1000/data';
    // const apiUrl="https://api.jikan.moe/v4/anime";// for search
    // const apiUrl="https://api.jikan.moe/v4/genres/anime"
    //  const param={
    // page:4,
    // type:"tv",
    // sort:"",
    // genres:1,
    // status:"", airing
    //  letter:"o",
    // for search return all animes with "H" in their name
    // limit:"26"
    //  }

    return this.http.get(this.apiUrl, { params: param });
  }
  // getAnimePicturesbyId(id: number): Observable<any> {
  //   // https://api.jikan.moe/v4/anime/{id}/pictures
  //   return this.http.get(this.apiUrl + '/' + id + '/pictures');
  // }
  getAnimeForSearch(): Observable<any> {
    const options = {
      params: {
        page: '1',
        size: '6000',
      },
      headers: new HttpHeaders({
        // 'X-RapidAPI-Key': '0e1de0ea58msh60d5e9112d7d671p1365e1jsn7d6e8c83e1e7',
        'X-RapidAPI-Key': this.key,
        'X-RapidAPI-Host': 'anime-db.p.rapidapi.com',
      }),
    };

    return this.http.get<any>(this.rapidApiUrl + '/anime', options);
  }
  
}
