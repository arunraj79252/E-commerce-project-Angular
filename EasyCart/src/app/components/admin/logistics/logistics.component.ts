import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-logistics',
  templateUrl: './logistics.component.html',
  styleUrls: ['./logistics.component.css']
})
export class LogisticsComponent implements OnInit {
  selectedStatus:string=""

  constructor(private service: AdminService) { }
  logisticsData:any=[]

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.service.getData().subscribe(data => {
      if (data) {
        this.logisticsData=data;
        console.log(this.logisticsData);
        


      }

    },data=>{
      alert(data.error.message)
      
    })



  }
  selectChangeHandler(event:any){
    this.selectedStatus=event.target.value;
  }
  updateStatus(id:any){
    
    alert(this.selectedStatus)

    this.service.updateLogistics(id,this.selectedStatus).subscribe(data=>{


  window.location.reload();


    },data=>{
      alert(data.error.message)
    })
  }

}
