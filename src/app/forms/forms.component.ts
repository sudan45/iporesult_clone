import { Component, OnInit } from '@angular/core';
import { CompanydataService } from '../service/companydata.service';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent implements OnInit {
  data_company: any;
  brand_image = './assets/brand.png';
  constructor(private companydata: CompanydataService) {
    companydata.company().subscribe((data) => {
      this.data_company = data;
    });
  }
  checkresult(data:any){
    let req_data={
      "companyShareId":data.company,
      "boid":data.boid
    }
    console.log(req_data)
    console.log(data)
    
  }

  ngOnInit(): void {
    
  }
}
