import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../Countries.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  countryList;
  constructor(private myService: CountriesService) { }

  ngOnInit() {
    this.countryList = this.myService.getCountryList();
  }


}
