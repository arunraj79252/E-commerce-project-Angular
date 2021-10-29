import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {
 @Input() mailItem:any;
  constructor() { }

  ngOnInit(): void {
  }
  expand(id:any){}

}
