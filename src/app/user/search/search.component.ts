import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from "@angular/router";
import { FormControl,FormGroup,Validators } from "@angular/forms";


import { SelectService } from 'src/app/shared/search.service';
import { Country } from 'src/app/shared/country';
import { State } from 'src/app/shared/state';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  minDate = new Date();
  ngOnInit() {
    
    this.countries = this.selectService.getCountries();
    
    this.onSelect(this.selectedCountry.id);

  }
  constructor(private selectService: SelectService,private router :Router,private activated:ActivatedRoute ) {
    this.form = new FormGroup({
      // name:new FormControl("",Validators.required),
      // email:new FormControl("",Validators.required),
      Date:new FormControl("",Validators.required),
      service:new FormControl("",Validators.required),
      brand:new FormControl("",Validators.required)
   })
  }
  selectedCountry: Country = new Country(0, '');
  countries: Country[];
  states: State[];
  form:any;

 

  // ======================================================= Data parsing to other component
  onSave(){
    let data:any = this.form.value;
    this.router.navigate(['user/registration'],
    {
      queryParams:{data:btoa(JSON.stringify(data))}
    })
  }
  // =======================================================

  

  onSelect(countryid) {
    this.states = this.selectService.getStates().filter((item) => item.countryid == countryid);
  }

}
