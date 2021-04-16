import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showDetails(event:any){
    // ASSUMING EACH SERVICE CARD CONTAINS AND ID; GET THE ID AND USE IT TO FIT THE SERVICE DETAILS 
  }

}
