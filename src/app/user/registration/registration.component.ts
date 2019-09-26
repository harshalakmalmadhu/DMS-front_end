import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router,ActivatedRoute } from '@angular/router';
import { DatePipe } from "@angular/common";


import { SelectService } from 'src/app/shared/search.service';
import { ServiceTypes } from 'src/app/shared/service_types';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  


  
  data:any;//take values from search
  ts:any;//values timeslots
  countryName:String = '';
  SelectedDate:String='';
  SelectedTime:String='';
  
  
  

  
  constructor(public service:UserService,
    private toastr : ToastrService,
    private router:Router,
    private activated:ActivatedRoute,
    private serviceTypes:SelectService,private datePipe:DatePipe) { }
    servicetypes:ServiceTypes[];
    

  ngOnInit() {
    this.servicetypes = this.serviceTypes.getServiceTypes();
  
    

    this.activated.queryParams.subscribe((params)=>{
      console.log(params);
      this.data =JSON.parse(atob(params.data));
      this.ts =JSON.parse(atob(params.ts));
      this.countryName =this.data.service;
      this.SelectedDate=this.datePipe.transform(this.data.Date,'yyyy-MM-dd');
      this.SelectedTime=this.ts.from+"-"+this.ts.to;

  })
  
  if(this.countryName=="1"){
    this.countryName="Nissan-Union Place"}
  if(this.countryName=="2"){
    this.countryName="Rajagiriya Service Center"}
    if(this.countryName=="3"){
      this.countryName="Peliyagoda Service Center"}
      if(this.countryName=="4"){
        this.countryName="Pitstop-Negombo"}
  else
  this.countryName=this.countryName;}


  // ++++++++++++++++++++++++++++++++++++++++++++++++++++ Communicate with backend
  
  onSubmit(){
    this.countryName=this.countryName;
    this.SelectedDate=this.SelectedDate;
    this.SelectedTime=this.ts.from+"-"+this.ts.to;

    
    console.log(this.SelectedDate)
    console.log(this.SelectedTime)
    
    this.service.register(this.countryName,this.SelectedDate,this.SelectedTime).subscribe(
      (res: any) => {
        if (res.Successful) {
          this.service.formModel.reset();
          this.toastr.success('Thank you!', 'Booking successful...');
          
         
        }else {
           res.errors.forEach(element => {
           switch (element.code) {
             case 'DuplicateUserName':
                this.toastr.error('Backend','Registration failed.');

                break;

              default:
              this.toastr.error(element.description,'Registration failed.');
                break;
            }
           });
        }
      },
      err =>{
        this.toastr.error('Internal Server Error!!','Registration failed.');
        // console.log(err);
      }
    );
  }

}
