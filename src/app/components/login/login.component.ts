import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  operationState: Number;

  constructor(private service: MainService, private router: Router) { }

  ngOnInit(): void {
    this.operationState = undefined;
  }

  login(){
    if (this.username.length >= 3 && this.password.length >= 8) {
      this.service.loginUser({email: this.username, password: this.password}).subscribe((response)=>{
        this.operationState = 1;
        localStorage.setItem("ngtechSiteUserIsLoggedIn", "true");
        this.service.SET_SESSION_CHANGE(true);
        localStorage.setItem("ngtechSiteUserSessionData", JSON.stringify(response));
        this.router.navigateByUrl("users");
      }),
      err=>{
        this.operationState = 2;
      }
    }
  }

  forgotPassword(){
    if (this.username.length>=3) {
      let user = {email: this.username};
      this.service.resetPassword(user).subscribe((resp)=>{
        alert(resp);
      }, err=>{alert(err)});
    }
  }
}
