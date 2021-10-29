import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  result:any;
  searchEnabled=false;
  
  

  apiServerUrl=environment.apiBaseUrl;
 
  constructor(private http:HttpClient) { }
  login(data:any):Observable <any> {
    const admin={
      email:data.email,
      password:data.pass
    }
     return this.http.post<any>(`${this.apiServerUrl}/login`,admin);
   }
   inbox():Observable<any>{
     var token = localStorage.getItem('token')
    let tokenStr='Easycart' +" "+ token;
    const headers=new HttpHeaders().set("Authorization", tokenStr)
    return this.http.get<any>(`${this.apiServerUrl}/admin/inbox`,{headers});
   }
   search(keyword:string):Observable<any>{
    var token = localStorage.getItem('token')
    let tokenStr='Easycart' +" "+ token;
    const headers=new HttpHeaders().set("Authorization", tokenStr)
    return this.http.get<any>(`${this.apiServerUrl}/admin/search/`+keyword,{headers});

   }
   
   
   getData():Observable<any>{
    var token = localStorage.getItem('token')
   let tokenStr='Easycart' +" "+ token;
   const headers=new HttpHeaders().set("Content-Type","application/json").set("Authorization", tokenStr)
   return this.http.get<any>(`${this.apiServerUrl}/admin/logistics`,{headers});
  }
  updateLogistics(id:any,status:string):Observable<any>{
    var token = localStorage.getItem('token')
   let tokenStr='Easycart' +" "+ token;
   const headers=new HttpHeaders().set("Content-Type","application/json").set("Authorization", tokenStr)
   return this.http.put<any>(`${this.apiServerUrl}/admin/logistics/update?id=${id}&status=${status}`,{},{headers});
  }
     
  notificationPost(sellerId:any,message:string):Observable<any>{
    var token = localStorage.getItem('token')
   let tokenStr='Easycart' +" "+ token;
   const headers=new HttpHeaders().set("Content-Type","application/json").set("Authorization", tokenStr)
   return this.http.post<any>(`${this.apiServerUrl}/notification?sellerId=${sellerId}&message=${message}`,{},{headers});
  }

  getNotification():Observable<any>{
    var token = localStorage.getItem('token')
   let tokenStr='Easycart' +" "+ token;
   const headers=new HttpHeaders().set("Content-Type","application/json").set("Authorization", tokenStr)
   return this.http.get<any>(`${this.apiServerUrl}/notification`,{headers});
  }
  
  
}
