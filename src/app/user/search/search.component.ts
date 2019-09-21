import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from "@angular/router";
import { FormControl,FormGroup,Validators } from "@angular/forms";


import { SelectService } from 'src/app/shared/search.service';
import { Country } from 'src/app/shared/country';
import { State } from 'src/app/shared/state';
import { characters } from 'src/app/shared/characters';
import {timeslots} from 'src/app/shared/timeslots';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  public showTimeslots : boolean = false;

  timeslots:timeslots[] = [
    {ts_id:'1',from:'7.45 AM',to : '8.00 AM'},
    {ts_id:'2',from:'8.00 AM',to : '8.30 AM'},
    {ts_id:'3',from:'8.30 AM',to : '9.00 AM'},
    {ts_id:'4',from:'9.00 AM',to : '9.30 AM'},
    {ts_id:'5',from:'9.30 AM',to : '10.00 AM'},
    {ts_id:'6',from:'10.00 AM',to : '10.30 AM'},
    {ts_id:'7',from:'10.30 AM',to : '11.00 AM'},
    {ts_id:'8',from:'11.00 AM',to : '11.30 AM'},
    {ts_id:'9',from:'11.30 AM',to : '12.00 PM'},
    {ts_id:'10',from:'12.00 PM',to : '12.30 PM'},

  ];
  
  
  ngOnInit() {
     
    this.countries = this.selectService.getCountries();//load all the service centers 
    
    this.onSelect(this.selectedCountry.id);

  }
  onDateChange(newDate: Date) {
    console.log(newDate);
  }
  constructor(private selectService: SelectService,private router :Router,private activated:ActivatedRoute ) {
    this.form = new FormGroup({
      Date:new FormControl('',Validators.required),
      service:new FormControl('',Validators.required),
      brand:new FormControl('',Validators.required),
      timeSlot:new FormControl('')
   })
  }
  selectedCountry: Country = new Country(0, '');
  countries: Country[];
  states: State[];
  form:any;
  isShow:false ;

 

  // ======================================================= Data parsing to other component
 

  onSave(){
    this.showTimeslots = !this.showTimeslots;


    let data:any = this.form.value;
    
    // this.router.navigate(['user/registration'],
    // {
    //   queryParams:{data:btoa(JSON.stringify(data))}
    // })
  }
  onBook(selectedItem: any){
    console.log(selectedItem.to);
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
