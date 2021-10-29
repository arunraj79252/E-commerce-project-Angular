import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { SellerService } from 'src/app/services/seller.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(private fb:FormBuilder, private service:SellerService,private router:Router) { }


  ngOnInit(): void {
  }
forgetPass=this.fb.group({
  email: ["", [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]]  

})
sub(){
  this.forgetPass.markAllAsTouched()

this.service.sub(this.forgetPass.value).subscribe((data:any)=>{
  if (data) {
    alert("An otp has sent to your email address")
    this.router.navigateByUrl("otp"); 

    
  }
  


},data=>{
  console.log(data);
  
  
  
})

}
get f(){
  return this.forgetPass.controls;
}
}
