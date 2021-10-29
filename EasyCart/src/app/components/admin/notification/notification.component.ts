import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  constructor(private service:AdminService) { }
  notification:any=[]
  rImage = 'data:image/png;base64,'

  ngOnInit(): void {
    localStorage.setItem("notification","0")
    this.service.getNotification().subscribe(data=>{
    if(data){

      this.notification=data
    }

    },data=>{
      alert(data.error.message)
    })
  }

}
