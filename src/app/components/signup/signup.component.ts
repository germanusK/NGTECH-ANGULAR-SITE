import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  email: String;
  password: String;
  confirmPassword: String;
  operationState: Number;

  constructor(private service: MainService) { }

  ngOnInit(): void {
    this.operationState = 0;
  }
  signup(){
    this.operationState = undefined;
    if ((this.email !==null || this.email !==undefined) && this.password == this.confirmPassword) {
      let user = {email: this.email, password: this.password};
      this.service.signupUser(user).subscribe((response)=>{
        // modify template for a more user-friendly response; both for success and error
        this.operationState = 1;
      }, err=>{
        this.operationState = 2;
      })
      
    }
  }
  passwordChanged(){
    if (this.password != this.confirmPassword) {
      document.getElementsByName('confirmPassword')[0].style.backgroundColor = '#f91';
    }
    else{
      document.getElementsByName('confirmPassword')[0].style.backgroundColor = 'transparent';
    }
  }

}
