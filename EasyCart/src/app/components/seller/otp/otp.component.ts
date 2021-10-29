import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { SellerService } from 'src/app/services/seller.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {
   

 
  constructor(private service:SellerService,private router:Router,private fb:FormBuilder) { }
  otpForm=this.fb.group({
    otp:["", [Validators.required, Validators.pattern('^[0-9]{6}$')]]
  })

  ngOnInit(): void {
  }
  get f(){
    return this.otpForm.controls;
  }
  otpSub(){
    this.otpForm.markAllAsTouched();

    if(this.otpForm.valid){
      console.log(this.otpForm.value);
      

this.service.otpSub(this.otpForm.value).subscribe(data=>{
  if(data==1){
this.router.navigateByUrl("change-password")
  }
  else if(data==0)
  {
    alert("Seller Not Found!");
    // this.error=true;
    
  }
  else{

    alert("Incorrect OTP");
  }
},data=>{alert(data.error.message)})

    }
  }

}
