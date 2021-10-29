import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(private service:AdminService) { }
  result:any=[];
  enabled=this.service.searchEnabled;

  ngOnInit(): void {
    this.service.searchEnabled=false;
  }
  
 
}
