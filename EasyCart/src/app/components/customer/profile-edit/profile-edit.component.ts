import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {

  constructor(private service: CustomerService, private fb: FormBuilder) { }

  customer: any = [];
  id: any;
  public customerFile: any = File
  rImage = 'data:image/png;base64,'
  profileForm = this.fb.group({
    name: ["", [Validators.required]],
    email: ["", [Validators.required]],
    houseName: ["", [Validators.required]],
    street: ["", [Validators.required]],
    city: ["", [Validators.required]],
    state: ["", [Validators.required]],
    zip: ["", [Validators.required]]



  })
  ngOnInit(): void {
    
    this.id = localStorage.getItem("currentUser")
    this.service.getData(this.id).subscribe(data => {
      if (data) {


        localStorage.setItem("customer", JSON.stringify(data))
        console.log(this.customer);

      }
    }, data => {
      alert(data.console.error.message);

    })
    this.customer = JSON.parse(localStorage.getItem("customer") || "")
    // console.log(this.customer.name);
    // console.log(this.customer.email);

    this.profileForm.setValue({
      name: this.customer.name,
      email: this.customer.email,
      houseName: this.customer.houseName,
      street: this.customer.street,
      city: this.customer.city,
      state: this.customer.state,
      zip: this.customer.zip


    })

  }
  updateImage() {
    const formData=new FormData();
      
      formData.append('file',this.customerFile)
      console.log(this.id);
      
      this.service.updateImage(this.id,formData).subscribe(data=>{

        window.location.reload();
      },data=>{
        alert(data.error.message)
      })



  }
  updateProfile() {
    this.service.updateProfile(this.id, this.profileForm.value, this.customer).subscribe(data => {
      if (data) {

        alert("Updated Successfully")
        window.location.reload();
      }

    }, data => {
      alert(data.error.message)
    })


  }
  get f() {
    return this.profileForm.controls
  }
  onSelectFile(event: any) {
    const file = event.target.files[0];
    this.customerFile = file

  }
  cancel() {


  }

}
