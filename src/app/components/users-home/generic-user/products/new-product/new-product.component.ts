import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  productName: string;
  productTargetClients: string;
  productUse: string;
  productUsage: string;
  whyUseIt: string;
  detailedDocumentation: string;
  product: { name: string, use: string, targetClients: string, usage ?: string, whyUseIt ?: string, documentation ?: string};
  constructor(private service: MainService) { }

  ngOnInit(): void {
  }

  submitProduct(){
    this.product.name = this.productName;
    this.product.targetClients = this.productTargetClients;
    this.product.usage = this.productUsage;
    this.product.use = this.productUse;
    this.product.whyUseIt = this.whyUseIt;
    this.product.documentation = this.detailedDocumentation;

    this.service.createProduct(this.product).subscribe((res)=>{
      // handle product creation success
    }, errr=>{})
  }

  cancelOperation(){
    
  }
}
