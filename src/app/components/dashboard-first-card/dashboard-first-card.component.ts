import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-first-card',
  templateUrl: './dashboard-first-card.component.html',
  styleUrls: ['./dashboard-first-card.component.scss']
})
export class DashboardFirstCardComponent implements OnInit {

  constructor() { }
  @Input() Title : string
  @Input() ImgSrc : string
  ngOnInit() {
  }

}
