import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  filterCheck: boolean = false;
  sortCheck: boolean = false;
  filterByDate: boolean = false;
  filterByWriter: boolean = false;
  filterByCategory: boolean = false;
  sortByDate = false;
  sortByWriter = false;
  sortByCategory = false;
  
  abitraryArray = [1,1,2,3,7,5,4,5,7,1,5,7,5]

  constructor() { }

  ngOnInit(): void {
  }

  filterChecked(event: Event){
    this.filterCheck = (event.target as HTMLInputElement).checked;
  }
  filterParameterChecked(event: Event){
    switch((event.target as HTMLInputElement).name){
      case "dateFilterCheck":
        this.filterByDate = (event.target as HTMLInputElement).checked;
        break;
      case "writerFilterCheck":
        this.filterByWriter = (event.target as HTMLInputElement).checked;
        break;
      case "categoryFilterCheck":
        this.filterByCategory = (event.target as HTMLInputElement).checked;
        break;
      default: break;
    }
  }
  sortParameterChecked(event: Event){
    switch((event.target as HTMLInputElement).name){
      
    }
  }
  sortChecked(event: Event){
    this.sortCheck = (event.target as HTMLInputElement).checked;
  }
}
