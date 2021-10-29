import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SellerService } from 'src/app/services/seller.service';

@Component({
  selector: 'app-seller-logistics',
  templateUrl: './seller-logistics.component.html',
  styleUrls: ['./seller-logistics.component.css']
})
export class SellerLogisticsComponent implements OnInit {

  constructor(private fb:FormBuilder, private service:SellerService) { }
  sellerLogistics = this.fb.group({
    customer_id: ["", [Validators.required]],
    product_id: ["", [Validators.required]],
    seller_id: ["", [Validators.required]],
    order_id: ["",[Validators.required]],
    shipped_date: ["", [Validators.required]],
    logistics_status:["",[Validators.required]]
    

  })

  ngOnInit(): void {
    // this.sellerLogistics.setValue({
    //   logistics_status:""
    // })
  }
  logistics(){
    this.sellerLogistics.markAllAsTouched()
    if(this.sellerLogistics.valid){

      this.service.logistics(this.sellerLogistics.value).subscribe(data=>{
      if(data){
        alert("Form submitted")
        window.location.reload();
      }

      },data=>{
        alert(data.error.message);
      })
    }




  }
 get f() {
    return this.sellerLogistics.controls
  }
}
