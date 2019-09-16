import { Component, OnInit } from '@angular/core';


import { SelectService } from 'src/app/shared/search.service';
import { Country } from 'src/app/shared/country';
import { State } from 'src/app/shared/state';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  // constructor() { }

  // ngOnInit() {
  // }
  selectedCountry: Country = new Country(2, 'Brazil');
  countries: Country[];
  states: State[];

  constructor(private selectService: SelectService) { }

  ngOnInit() {
    this.countries = this.selectService.getCountries();
    this.onSelect(this.selectedCountry.id);
  }

  onSelect(countryid) {
    this.states = this.selectService.getStates().filter((item) => item.countryid == countryid);
  }

}
