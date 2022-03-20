import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  brand_image = "./assets/brand.png"
  constructor() { }

  ngOnInit(): void {
  }

}
