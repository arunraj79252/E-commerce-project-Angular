import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  mail:any=[];

  constructor(private service:AdminService) { }

  ngOnInit(): void {
    this.service.inbox().subscribe((data:any)=>{
     if(data){
      this.mail=data;
      console.log(data);
      
            
     }

    },data=>{
      alert(data.error.message);
      
    })
    }
  
}
