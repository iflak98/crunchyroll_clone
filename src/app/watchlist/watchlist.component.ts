import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss']
})
export class WatchlistComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    this.getRandomQuote();
  }
  quotes: string[] = [
    "This page is currently experiencing technical hiccups. Please bear with us while we provide it with some virtual chicken soup.",

    "Oops! Looks like this page took a wrong turn at cyberspace. We're guiding it back on track as we speak!",
    
    "Warning: Page under construction. Expect to encounter some virtual traffic cones and caution tape.",
    
    "This page is on its way to stardom, but right now it's still in the 'awkward audition phase.' Fingers crossed for a callback!",
    
    "This page is like a potato trying to become fries - it needs a little more time in the digital fryer!",
    
    
    "The watch list on this site is not for watching your stocks",
    
    "Currently undergoing a digital makeover. We promise it'll come out looking like a cyber-Brad Pitt... eventually.",
    
    "This page is experiencing some pixelated existential crisis. We're offering it virtual therapy sessions.",
    
    "Just like a GPS recalculating its route, this page is rethinking its digital journey. Hang tight!",
    
    "Attention: Page experiencing a midlife crisis. It's currently shopping for a new theme song and a virtual sports car.",
    
    "We're treating this page like a delicate soufflé - it needs time to rise to its full potential. Bon appétit!",
  ];
  randomQuote: string='';
getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * this.quotes.length);
  this.randomQuote = this.quotes[randomIndex];
}
}
