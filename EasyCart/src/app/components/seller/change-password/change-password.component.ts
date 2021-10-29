import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SellerService } from 'src/app/services/seller.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private fb:FormBuilder,private service:SellerService) { }
  resetForm=this.fb.group({
  password1:["",Validators.required],
  password2:["",Validators.required]

  },
  {
    validator: this.MustMatch('password1', 'password2')
  })


  ngOnInit(): void {
  }

reset(){

  if(this.resetForm.valid)
  {
    this.service.reset(this.resetForm.value.password1).subscribe(data=>{
      if(data){

      }
    },data=>{alert(data.error.message)})
  }
}

  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}
  get f(){
    return this.resetForm.controls
  }

}
