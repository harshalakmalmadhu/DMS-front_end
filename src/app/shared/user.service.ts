import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fb:FormBuilder,private http:HttpClient) { }

  data:any;//take values from search
  countryName:any;
  SelectedDate:any;

  readonly BaseURI = 'http://localhost:3032';

  formModel = this.fb.group({
    UserName: ['',Validators.required],
    Email: ['',[Validators.required,Validators.email]],
    servicetype:[''],
    MobileNo:[''],
    VehicleNo:[''],
    SelectedDate:[''],
    SelectedSC:[''],
    SelectedTime:['']

  });

  
  register(countryName,SelectedDate){
    this.countryName=countryName;
    this.SelectedDate=SelectedDate;
    var body = {
      UserName:this.formModel.value.UserName,
      Email:this.formModel.value.Email,
      servicetype:this.formModel.value.servicetype,
      MobileNo:this.formModel.value.MobileNo,
      VehicleNo:this.formModel.value.VehicleNo,

      SelectedDate:this.SelectedDate,
      SelectedSC:this.countryName,
      SelectedTime:this.formModel.value.SelectedTime
      
    };
    return this.http.post(this.BaseURI+'/insertBody',body);

  }

}
