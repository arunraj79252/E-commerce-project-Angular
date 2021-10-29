import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiServerUrl=environment.apiBaseUrl;
  constructor(private http:HttpClient) { }
  login(data:any):Observable <any> {
    const customer={
      email:data.email,
      password:data.password
    }
     return this.http.post<any>(`${this.apiServerUrl}/login/customer-login`,customer);
   }
   getData(customerId:any):Observable<any>{
    var token = localStorage.getItem('token')
   let tokenStr='Easycart' +" "+ token;
   const headers=new HttpHeaders().set("Content-Type","application/json").set("Authorization", tokenStr)
   return this.http.get<any>(`${this.apiServerUrl}/customer/${customerId}`,{headers});
  }
  updateProfile(customerId:any,current:any,prev:any):Observable <any> {
    var token = localStorage.getItem('token')
    let tokenStr='Easycart' +" "+ token;
    const headers=new HttpHeaders().set("Content-Type","application/json").set("Authorization", tokenStr)
    const customer={
      name:current.name,
      email:current.email,
      password:prev.password,
      houseName:current.houseName,
      street:current.street,
      city:current.city,
      state:current.state,
      zip:current.zip,
      logo:prev.logo,
      fileName:prev.fileName
    }
     return this.http.put<any>(`${this.apiServerUrl}/customer/${customerId}`,customer,{headers});
   }

   updateImage(customerId:any,formData:FormData):Observable<any>{
    var token = localStorage.getItem('token')
   let tokenStr='Easycart' +" "+ token;
   const headers=new HttpHeaders().set("Authorization", tokenStr)
   return this.http.put<any>(`${this.apiServerUrl}/customer/updatePhoto/${customerId}`,formData,{headers});
  }

}
