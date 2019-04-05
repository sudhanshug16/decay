import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss']
})
export class DashboardHeaderComponent implements OnInit {

  @Input() activePage: string;

  constructor() { }

  ngOnInit() {
  }

}
