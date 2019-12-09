import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  countryList = ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola'	, 'Antigua', 'Argentina'];
  constructor() { }

  ngOnInit() {
  }


}
