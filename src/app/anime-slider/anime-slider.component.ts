import { Component, OnDestroy, OnInit } from '@angular/core';
import { AnimeService } from '../services/anime.service';
import { interval, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-anime-slider',
  templateUrl: './anime-slider.component.html',
  styleUrls: ['./anime-slider.component.scss'],
})
export class AnimeSliderComponent implements OnInit,OnDestroy{
  animelist: any;
 subscription: Subscription;

  constructor(private animeservice: AnimeService) {
    this.subscription = interval(4000).pipe(
      take(Infinity)
    ).subscribe(() => {
      this.plusSlides(1);
    });
  }

  slideIndex = 1;

  ngOnInit(): void {
    this.showSlides(this.slideIndex);
    
  }
  ngOnDestroy() {
    // Unsubscribe from the interval when the component is destroyed
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  plusSlides(n: number) {
    this.showSlides((this.slideIndex += n));
  }

  currentSlide(n: number) {
    this.showSlides((this.slideIndex = n));
  }

  showSlides(n: number) {
    let i;

    let slides = document.getElementsByClassName(
      'mySlides'
    ) as HTMLCollectionOf<HTMLElement>;
    // let slides=this.animelist;

    if (n > slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

    slides[this.slideIndex - 1].style.display = 'block';
  }
}
