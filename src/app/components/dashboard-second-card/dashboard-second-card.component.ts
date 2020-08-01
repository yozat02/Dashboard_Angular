import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-second-card',
  templateUrl: './dashboard-second-card.component.html',
  styleUrls: ['./dashboard-second-card.component.scss']
})
export class DashboardSecondCardComponent implements OnInit {

  constructor() { }
  
  @Input() Title : string
  @Input() ImgSrc : string
  ngOnInit() {
  }

}
