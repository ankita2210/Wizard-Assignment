import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

constructor() { }
getCountryList() {
  const countryList = ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola'	, 'Antigua', 'Argentina'];
  return countryList;
}

}
