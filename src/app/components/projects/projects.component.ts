import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects = [1, 2, 3, 4, 5, 6, 7];
  constructor() { }

  ngOnInit(): void {
  }

}
