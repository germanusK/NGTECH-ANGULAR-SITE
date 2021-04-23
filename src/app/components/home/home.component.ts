import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  backgroundInfo = `A software company founded by a team of six engineering students 
                            of the university of Buea by late 2018 but remained underground till early 2020 when it 
                            became fully operational. Aimed at building high standards products while providing job 
                            oppotunities to developers.`;
  
  ourVision = [  `Becoming the customer's choice of a company to work with`,
  `Standing out among the top 15 software companies in Cameroon in the next five years`,
  `Ensuring our services are accessible/usable within most population groups, even the less priveledged.`
]
ourValues = [`High standard delivery at affordable rates is our fashion. The best is what we give you`,
`Quality working standards to maximize productivity`, `Our integrity being maintained is a must-do`];

  projects = [1,1,1,1,1,1,1,1];
  constructor() { }

  ngOnInit(): void {
  }

}
