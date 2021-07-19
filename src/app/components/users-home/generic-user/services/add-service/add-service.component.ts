import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit {
  serviceName: string;
  serviceTargetClients: string;
  serviceUse: string;
  serviceUsage: string;
  whyUseIt: string;
  detailedDocumentation: string;
  service: {serviceName: string, serviceTargetClients: string, serviceUse: string, serviceUsage: string, whyUseIt: string, detailedDocumentation: string};
  constructor(private mainService: MainService) { }

  ngOnInit(): void {
  }

  submitProduct(){

  }

  cancelOperation(){
    
  }
}
