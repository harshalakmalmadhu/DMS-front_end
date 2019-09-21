import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router,ActivatedRoute } from '@angular/router';


import { SelectService } from 'src/app/shared/search.service';
import { ServiceTypes } from 'src/app/shared/service_types';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  


  
  data:any;//take values from search
  countryName:String = '';
  SelectedDate:String='';
  

  
  constructor(public service:UserService,
    private toastr : ToastrService,
    private router:Router,
    private activated:ActivatedRoute,
    private serviceTypes:SelectService) { }
    servicetypes:ServiceTypes[];
    

  ngOnInit() {
    this.servicetypes = this.serviceTypes.getServiceTypes();
  
    

    this.activated.queryParams.subscribe((params)=>{
      console.log(params);
      this.data =JSON.parse(atob(params.data));
      this.countryName =this.data.service;
      this.SelectedDate=this.data.Date;

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
    this.SelectedDate=this.data.Date;
    
    this.service.register(this.countryName,this.SelectedDate).subscribe(
      (res: any) => {
        if (res.Successful) {
          this.service.formModel.reset();
          this.toastr.success('Thank you!', 'Booking successful...');
          
         
        }else {
          // res.errors.forEach(element => {
          //   switch (element.code) {
          //     case 'DuplicateUserName':
                this.toastr.error('Username is already taken','Registration failed.');

          //       break;

          //     default:
          //     this.toastr.error(element.description,'Registration failed.');
          //       break;
          //   }
          // });
        }
      },
      err =>{
        console.log(err);
      }
    );
  }

}
