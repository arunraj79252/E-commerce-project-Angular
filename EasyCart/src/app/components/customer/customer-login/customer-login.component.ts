import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {

  constructor(private fb:FormBuilder, private service:CustomerService,private router:Router) { }
  loginForm = this.fb.group({
    email: ["", [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
    password: ["", [Validators.required]]

  })

  ngOnInit(): void {
  }
  login(){
    if(this.loginForm.valid)
    {
     this.service.login(this.loginForm.value).subscribe(
       (data)=>{

    if(data){
      alert("Login  Successfully!")
      localStorage.setItem('token',data.accessToken.value)
      localStorage.setItem('currentUser',data.customerId)
      this.router.navigateByUrl('customer-profile-edit');
    } 
     }, (data) => {
      alert(data.error.message)
    }
    // map=>this.router.navigateByUrl('login'),
    // data=>alert("registration success!")
    )

    }
    else{
      alert("Invalid details")
    }

  }

}
