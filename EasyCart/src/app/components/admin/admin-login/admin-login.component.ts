import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  adminLogin = this.fb.group({
    email: ["", [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
    pass: ["", [Validators.required]]

  })

  constructor(private fb:FormBuilder, private service:AdminService, private router:Router) { }

  ngOnInit(): void {
  }
  login(){
    if(this.adminLogin.valid)
    {
     this.service.login(this.adminLogin.value).subscribe(
       (data)=>{

    if(data){
      alert("Login  Successfully!")
      localStorage.setItem('token',data.accessToken.value)
      localStorage.setItem('currentUser',data.name)
      this.router.navigateByUrl('admin-home');
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
  get f(){
    return this.adminLogin.controls;
  }

}
