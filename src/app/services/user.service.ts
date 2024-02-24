import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
// const fs = require('fs');


// Read the JSON file


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = 'assets/mock/users.json'; // Path to the JSON file

  constructor(private http: HttpClient) { }

  getUsers() {
    
    return this.http.get<any[]>(this.usersUrl);
  }
 
  saveUsers(users: any) {
    
     this.http.get<any[]>(this.usersUrl).subscribe(data => {
      // Modify the data (for example, add a new object)
      
    
      // Write the modified data back (not recommended for production)
      // This is for demonstration purposes only
      
      // const data2 = fs.readFileSync('assets/mock/users.json');
      // Parse JSON data
      // const jsonData = JSON.parse(data2);
      console.log('data2,',data);
      data.push(users);
      console.log('data21,',data);
      // console.log('data2,.2',jsonData,data2);
      // Modify JSON data
      // jsonData.someProperty = 'newValue';
      
      // Write the modified JSON data back to the file
      // fs.writeFileSync('assets/mock/users.json', JSON.stringify(jsonData));
    });
    return this.http.post(this.usersUrl, users);
    // return null;    // return users
  }

  private loginauth = new BehaviorSubject<any>(false);
  authval = this.loginauth.asObservable();
  setloginauth(value: boolean) {
    this.loginauth.next(value);
  }
  getloginauth() {
    return this.authval;
  }
}
