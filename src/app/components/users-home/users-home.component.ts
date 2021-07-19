import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-users-home',
  templateUrl: './users-home.component.html',
  styleUrls: ['./users-home.component.css']
})
export class UsersHomeComponent implements OnInit, AfterViewInit {
  user; 
  userKeys=[];
  currentElement: String;
  constructor(private router: Router, private service: MainService) {    
    
   }
  ngAfterViewInit(): void {
    let navDropdownToggler = (document.querySelectorAll(".dpMenuItemsToggler")[0] as HTMLAnchorElement);
    navDropdownToggler.onclick = function(){
      document.querySelectorAll(".dropdown-menu1")[0].classList.toggle("show-dropdown");
    }
    
    let navDropdownToggler2 = (document.querySelectorAll(".dpMenuItemsToggler2")[0] as HTMLAnchorElement);
    document.querySelectorAll(".dropdown-menu").forEach((element, index, nodeList)=>{
      (element as HTMLDivElement).onclick = function(){element.classList.remove("show-dropdown");}
      document.onclick = function(){element.classList.remove("show-dropdown");}
      
    });
    navDropdownToggler2.onclick = function(){
      document.querySelectorAll(".dropdown-menu2")[0].classList.toggle("show-dropdown");
    }
  }

  ngOnInit(): void {
    if(localStorage.getItem("ngtechCurrentElement"))
      this.currentElement = localStorage.getItem("ngtechCurrentElement");
    try {
      this.user = JSON.parse(localStorage.getItem("ngtechSiteUserSessionData"));
      this.userKeys = Object.keys(this.user);
      console.log(this.user);
      
    } catch (error) {
      this.router.navigate(["./login"]);
    }
  }
  logoutUser():void {
    localStorage.removeItem("ngtechSiteUserSessionData");
    localStorage.setItem("isNgtechUserLoggedIn", "false");
    this.service.SET_SESSION_CHANGE(false)
    this.router.navigate(["login"]);
  }
  editProfile():void{}
  setElement(value: string):void{
    this.currentElement = value;
    localStorage.setItem("ngtechCurrentElement", value);
  }
  newItem(){
    switch (this.currentElement) {
      case "Products":
          this.router.navigate(["users/newProduct"]);
        break;
      case "Services":
        this.router.navigate(["users/newService"]);
        break;
      case "Blog":
        this.router.navigate(["users/newPost"]);
        break;
      case "Contact":
        this.router.navigate(["users/newContact"]);
        break;
      case "About":
        this.router.navigate(["users/newAbout"]);
        break;
      case "User":
        this.router.navigate(["users/newUser"]);
    
      default:
        break;
    }
  }
  previewItem(){}
}
