import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  yes = false;
  constructor() { }

  ngOnInit(): void {
    // !(document.getElementById("navigationMenu")).
  }

  toggleNavbar(){
    this.yes = !this.yes;
    if(this.yes){
      document.getElementById("navigationMenu").classList.remove("collapse");
    }
    else{
      document.getElementById("navigationMenu").classList.add("collapse");
    }
  }

}
