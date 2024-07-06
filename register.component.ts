import { Component } from '@angular/core';
import { RegisterModel } from '../register-model';
import { EnrollmentService } from '../enrollment.service'; 

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  constructor( private _enrollmentService:EnrollmentService, private toastr: ToastrService){ }
 registerModel=new RegisterModel("","","","");
 result:any;
 
 onRegister(){
  console.log(this.registerModel);
  this._enrollmentService.registerService(this.registerModel).subscribe(
    (data)=>{
      this.result=data;
      
      if(this.result.message=='Account Created Successfully'){
        this.toastr.success(this.result.message);
      }   
      else{
        this.toastr.warning(this.result.message); 
      }
    },
    error=>console.error(error)
  )
 
  
 }
}
