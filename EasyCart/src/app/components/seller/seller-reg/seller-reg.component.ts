import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { SellerService } from 'src/app/services/seller.service';

@Component({
  selector: 'app-seller-reg',
  templateUrl: './seller-reg.component.html',
  styleUrls: ['./seller-reg.component.css']
})
export class SellerRegComponent implements OnInit {

  sellerReg = this.fb.group({
    name: ["", [Validators.required, Validators.pattern("^[a-zA-Z ]{3,15}$")]],
    cName: ["", [Validators.required, Validators.pattern("^[a-zA-Z]{3,15}$")]],
    address: ["", [Validators.required, Validators.pattern("^[a-zA-Z ]{3,25}$")]],
    city: ["", [Validators.required, Validators.pattern("^[a-zA-Z]{3,15}$")]],
    state: ["", [Validators.required, Validators.pattern("^[a-zA-Z]{3,15}$")]],
    country: ["", [Validators.required, Validators.pattern("^[a-zA-Z]{3,15}$")]],
    zipCode: ["", [Validators.required]],
    ph: ["", [Validators.required, Validators.pattern("^[0-9]{10}$")]],
    email: ["", [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
    password: ["", [Validators.required]]
    

  })
  email:any;
   
  public sellerFile:any=File
  public seller:any
  count=0;
  constructor(private service:SellerService, private fb: FormBuilder,private router:Router, private adminService:AdminService) { }

  ngOnInit(): void {
  }
  register() {
    this.sellerReg.markAllAsTouched();
    console.log(this.sellerReg.value);

    if (this.sellerReg.valid) {
      this.email=this.sellerReg.value.email;
      this.seller=this.sellerReg.value
      const formData=new FormData();
      formData.append('seller',JSON.stringify(this.seller))
      formData.append('file',this.sellerFile)
      this.service.register(formData
        ).subscribe(
          (data) => {

            if (data) {
              alert("Registered Successfully!. An Email has sent to your email address verify before login")
              console.log(data);
              
              this.adminService.notificationPost(data.sellerId,"registered").subscribe(data=>{
                this.count++;
                localStorage.setItem("notification",this.count.toString())

              },data=>{
                alert(data.error.message)
              })
              this.router.navigateByUrl("seller-login")

            }
          }, (data) => {
            alert(data.error.message)
          }
        )

    }
    else {
      alert("Invalid Form")
    }

  }
  get f() {
    return this.sellerReg.controls
  }
  onSelectFile(event:any){
    const file= event.target.files[0];
    this.sellerFile=file

  }

}
