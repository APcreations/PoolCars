import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  Clicked() {
    console.log("Clicked");
    let x = document.forms["form"]["fname"].value;
        let y = document.forms["form"]["pname"].value;
    console.log(x);
    console.log(y);
    if (x == 'Aniket'  && y == 'Aniket')
    {
    alert('Logged in')
    }
    else {
      alert("Invalid credentials")
    }
   // let y= document.forms["myForm"]["fname"].value;
    //if (name.value == 'admin')
  }
  
}