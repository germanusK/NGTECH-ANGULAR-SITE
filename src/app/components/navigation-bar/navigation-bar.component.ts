import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  yes = false;
  isNgtechUserLoggedIn = localStorage.getItem("ngtechSiteUserIsLoggedIn");
  constructor(private router: Router, private service: MainService) { }

  ngOnInit(): void {
    // !(document.getElementById("navigationMenu")).
    this.service.GET_SESSION_CHANGE().subscribe(sessionState=>{
      if (sessionState) {
        this.isNgtechUserLoggedIn = "true";
      }else{
        this.isNgtechUserLoggedIn = "false";
      }
      this.ngOnInit();
    })
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
  logoutUser():void {
    localStorage.removeItem("ngtechSiteUserSessionData");
    localStorage.setItem("isNgtechUserLoggedIn", "false");
    this.service.SET_SESSION_CHANGE(false);
    this.router.navigate(["login"]);
  }

}
