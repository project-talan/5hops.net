import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() currentSection: string;

  sections = [
    { title: 'Integration', ref: '/continuous-integration' },
    { title: 'Testing', ref: '/continuous-testing' },
    { title: 'Delivery', ref: '/continuous-delivery' },
    { title: 'Deployment', ref: '/continuous-deployment' },
    { title: 'Operation', ref: '/continuous-operation' }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
