import { Component, OnInit } from '@angular/core';
import { CompanydataService } from '../service/companydata.service';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent implements OnInit {

  companies: any = [];
  brand_image = './assets/brand.png';
  constructor(private companyData: CompanydataService) {
    companyData.company().subscribe((response: any) => {
      console.log(response['body'])
      this.companies = response['body'];
    });
  }

  iporesult = new FormGroup({
    companyShareId: new FormControl(),
    boid: new FormControl(''),
  });


  ngOnInit(): void {

  }


  ipo_result() {

    this.companyData.check_result(this.iporesult.value).subscribe((res: any) => {
      console.log(res)
      console.log('valid')
    })

    console.log(this.iporesult.value)

  }
}
