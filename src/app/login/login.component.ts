import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent   implements OnInit{
  constructor() { }
  ngOnInit(): void {
    this.getRandomQuote();
  }
  quotes: string[] = [
    "Under construction... because even websites need their makeover moments!",
    "This page is like a messy room - in the process of getting tidied up!",
    "Patience, dear visitor! Rome wasn't built in a day, and neither is this page.",
    "Excuse the digital dust! We're remodeling this space for your viewing pleasure.",
    "This page is currently in its awkward teenage phase - growing pains and all!",
    "Just like a delicious stew, this page needs some time to simmer before it's ready.",
    "Warning: Page under construction. Watch out for metaphorical falling debris!",
    "Please pardon the pixels! We're giving this page a facelift.",
    "This page is like a fine wine - it needs time to mature. Check back soon!",
    "Like a caterpillar in a cocoon, this page is undergoing a metamorphosis. Stay tuned for its glorious transformation!"
  ];
  randomQuote: string='';
getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * this.quotes.length);
  this.randomQuote = this.quotes[randomIndex];
}
}