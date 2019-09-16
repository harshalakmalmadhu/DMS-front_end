import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fb:FormBuilder,private http:HttpClient) { }

  //readonly BaseURI = 'http://localhost:3032/insertDocPar?id=500&document_id=abdabsdd&patient_id=20493&tenant=QATAR';
  readonly BaseURI = 'http://localhost:3032';




  formModel = this.fb.group({
    UserName: ['',Validators.required],
    Email: ['',[Validators.required,Validators.email]],
    FullName: [''],
    MobileNo:[''],
    VehicleNo:[''],
    Passwords: this.fb.group({
      Password: ['',[Validators.required,Validators.minLength(4)]],
      ConfirmPassword: ['',Validators.required]

    },{validator : this.comparePasswords})



  });
  comparePasswords(fb:FormGroup){
    let ConfirmPasswordCtrl = fb.get('ConfirmPassword');
    if(ConfirmPasswordCtrl.errors == null || 'passwordMissmatch' in ConfirmPasswordCtrl.errors ){
      if(fb.get('Password').value!=ConfirmPasswordCtrl.value)
      ConfirmPasswordCtrl.setErrors({passwordMissmatch:true});
      else
      ConfirmPasswordCtrl.setErrors(null);
    }
  }
  register(){
    var body = {
      UserName:this.formModel.value.UserName,
      Email:this.formModel.value.Email,
      FullName:this.formModel.value.FullName,
      VehicleNo:this.formModel.value.VehicleNo,
      MobileNo:this.formModel.value.MobileNo,
      Password:this.formModel.value.Passwords.Password,
    };
    return this.http.post(this.BaseURI+'/insertBody',body);

  }

}
