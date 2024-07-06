import { Component } from '@angular/core';
import { LoginModel } from '../login-model';
import { EnrollmentService } from '../enrollment.service';

import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginModel=new LoginModel("","");
  result:any;
  
constructor(private _enrollmentService:EnrollmentService,
            private toastr: ToastrService,
            private router:Router
            ){}
  ngOnInit(): void {
  }

  onLogin(){
    console.log(this.loginModel);
    this._enrollmentService.loginService(this.loginModel).subscribe(
      (data)=>{
        this.result=data;
        if(this.result.message=='valid login'){
          this.toastr.success(this.result.message); 
          this.router.navigateByUrl('scholar');
        }
        else{
          this.toastr.warning(this.result.message); 
        }
      },
      error=>console.error(error)
    );
  }
  
}

