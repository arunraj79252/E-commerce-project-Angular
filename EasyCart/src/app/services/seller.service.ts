import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Email } from '../model/email';
import { Otp } from '../model/otp';
import { ResetPass } from '../model/reset-pass';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
   
  apiServerUrl=environment.apiBaseUrl;
  constructor(private http:HttpClient) { }

  register(formData:FormData):Observable<any>{
    // var token = localStorage.getItem('token')
    // let tokenStr='Easycart' +" "+ token;
    // const headers=new HttpHeaders().set("Authorization", tokenStr)
    return this.http.post <any> (`${this.apiServerUrl}/seller`,formData)


  }
  login(data:any):Observable <any> {
    const seller={
      email:data.email,
      password:data.pass
    }
     return this.http.post<any>(`${this.apiServerUrl}/login/seller-login`,seller);
   }
   sub(data:Email):Observable<any>{
     
    // var token = localStorage.getItem('token')
    // let tokenStr='Easycart' +" "+ token;
    const headers=new HttpHeaders().set("Content-Type","application/json")
    return this.http.post<any>(`${this.apiServerUrl}/forgetPassword`,JSON.stringify(data),{headers});

   }
   otpSub(data:any):Observable<any>{
    
    // var token = localStorage.getItem('token')
    // let tokenStr='Easycart' +" "+ token;
    //  const headers=new HttpHeaders().set("Content-Type","application/json")
 
    
    console.log(data);
    
    return this.http.post<any>(`${this.apiServerUrl}/forgetPassword/verifyOtp`,data);

   }

   reset(data:ResetPass):Observable<any>{
     
    var token = localStorage.getItem('token')
    let tokenStr='Easycart' +" "+ token;
    const headers=new HttpHeaders().set("Authorization", tokenStr)
    return this.http.post<any>(`${this.apiServerUrl}/forgetPassword/changePassword`,data,{headers});

   }
   logistics(data:any):Observable<any>{
     const dat={
     customerId:data.customer_id,
     productId:data.product_id,
     sellerId:data.seller_id,
     orderId:data.order_id,
     shippedDate:data.shipped_date,
     logisticsStatus:data.logistics_status


     }
     
    var token = localStorage.getItem('token')
    let tokenStr='Easycart' +" "+ token;
    const headers=new HttpHeaders().set("Content_Type","application/json").set("Authorization", tokenStr)
    return this.http.post<any>(`${this.apiServerUrl}/seller/logistics`,dat,{headers});

   }
}
