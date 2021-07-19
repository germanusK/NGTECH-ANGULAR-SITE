import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import jsonData from 'src/app/services/variables.json';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  
  apiRoot = "http://localhost:"+jsonData.PORT_NUMBER;
  sessionSubject = new Subject<any>();

  constructor(private client: HttpClient) {
    if (localStorage.getItem("isNgtechUserLoggedIn")=="true") {
      this.sessionSubject.next(true);
    }
    else{
      this.sessionSubject.next(false);
    }
  }
  
  // SESSION CHANGE SUBJECT
  SET_SESSION_CHANGE = (isLoggedIn: Boolean)=>{
    this.sessionSubject.next(isLoggedIn);
  }
  GET_SESSION_CHANGE = ()=>{
    return this.sessionSubject.asObservable();
  }
  
  // USER SIGN-UP REQUEST
  signupUser = (user)=>{
    return this.client.post(this.apiRoot+jsonData.END_POINTS.USER, user, {observe: 'response'});
  }
  
  // USER LOGIN
  loginUser = (user)=>{
    return this.client.post(this.apiRoot+jsonData.END_POINTS.USER_LOGIN, user);
  }

  // GET SPECIFIC USER INFO
  getUserWidth = (id: string)=>{
    return this.client.get(this.apiRoot+jsonData.END_POINTS.USER_BY_ID,{params: {_id: id}});
  }

  // GET USER SELECTION
  getUserSelection = (selector)=>{
    return this.client.get(this.apiRoot+jsonData.END_POINTS.USER, {params: selector});
  }
  
  // RESET PASSWORD; For forgotten password
  resetPassword = (user)=>{//user is object carrying the user's email
    return this.client.get(this.apiRoot+jsonData.END_POINTS.USER_FORGET_PASSWORD, {params: user});
  }

  // CHANGE/UPDATE PASSWORD


  // CREATE PRODUCT
  createProduct = (product: { name: string; use: string; targetClients: string; usage?: string; whyUseIt?: string; documentation?: string; })=> {
    return this.client.post(this.apiRoot+jsonData.END_POINTS.PROJECTS, product, {observe : "response"});
  }


  // CREATE SERVICE
  createService = (service)=>{
    return this.client.post(this.apiRoot+jsonData.END_POINTS.SERVICES, service, {observe: "response"});
  }


  // CREATE POST
  createPost = (post)=>{
    return this.client.post(this.apiRoot+jsonData.END_POINTS.BLOGS, post, {observe: "response"});
  }

}
