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
  SelectedTime:any;

  readonly BaseURI = 'http://localhost:3050';

  formModel = this.fb.group({
    UserName: ['',Validators.required],
    Email: ['',[Validators.required,Validators.email]],
    servicetype:['',Validators.required],
    MobileNo:['',Validators.required],
    VehicleNo:['',Validators.required],
    SelectedDate:[''],
    SelectedSC:[''],
    SelectedTime:['']

  });

  
  register(countryName,SelectedDate,SelectedTime,){
    this.countryName=countryName;
    this.SelectedDate=SelectedDate;
    this.SelectedTime=SelectedTime;

    var body = {
      userName:this.formModel.value.UserName,
      email:this.formModel.value.Email,
      serviceType:this.formModel.value.servicetype,
      mobileNo:this.formModel.value.MobileNo,
      vehicleNo:this.formModel.value.VehicleNo,

      selectedDate:this.SelectedDate,
      serviceCenter:this.countryName,
      timeSlot:this.SelectedTime
      
    };
    return this.http.post(this.BaseURI+'/booking/addBooking',body);

  }

}
