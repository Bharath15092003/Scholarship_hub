import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EnrollmentService } from '../enrollment.service';
import { ScholarModel } from '../scholar-model';


@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent {
  selectedOption: any;
  constructor( private _enrollmentService:EnrollmentService ,private toastr: ToastrService,private router:Router){}
  scholarModel=new ScholarModel("","","","",);

 onSelectionChange(){
  // console.log("Selected option value"+this.selectedOption);
  if((this.getSelectedOptionText()=='TELANGANA')&&(this.getSelectedOptionText1()=='Less than 5,00,000')&&(this.getSelectedOptionText2()=='BC')){
    this.toastr.success("YOU ARE ELIGIBLE");
    this.router.navigateByUrl('apply');
  }
  else{
    this.toastr.warning("YOU ARE NOT ELIGIBLE");
  }

  console.log("Selected option value"+this.getSelectedOptionText());
  console.log("Selected option value"+this.getSelectedOptionText1());
  console.log("Selected option value"+this.getSelectedOptionText2());
 }
 getSelectedOptionText(){
  const selectElement=document.getElementById('Residentof') as HTMLSelectElement;
  return selectElement.options[selectElement.selectedIndex].textContent;

 }
 getSelectedOptionText1(){
  const selectElement=document.getElementById('Income') as HTMLSelectElement;
  return selectElement.options[selectElement.selectedIndex].textContent;

 }
 getSelectedOptionText2(){
  const selectElement=document.getElementById('Caste') as HTMLSelectElement;
  return selectElement.options[selectElement.selectedIndex].textContent;

 }
 
 }


