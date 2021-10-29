import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-nav-admin',
  templateUrl: './nav-admin.component.html',
  styleUrls: ['./nav-admin.component.css']
})
export class NavAdminComponent implements OnInit {

  constructor(private service:AdminService, private fb:FormBuilder) { }
 
   searchForm=this.fb.group({

  search:[""]
   })
   count:any;
  ngOnInit(): void {
 this.count=localStorage.getItem("notification") 
 console.log(this.count);
   
  }

search(keyword:any){
  this.service.searchEnabled=true;
  this.service.search(keyword).subscribe((data:any)=>{
    this.service.result=data;
    console.log(data);
    

  },data=>{
    alert(data.error.message);
  })
}

}
