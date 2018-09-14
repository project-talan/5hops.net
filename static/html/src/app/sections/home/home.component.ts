import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  sections = [
    {
      title: 'Continuous Integration',
      image: 'integration.png',
      description: '...'
    },
    {
      title: 'Continuous Testing',
      image: 'testing.png',
      description: '...'
    },
    {
      title: 'Continuous Delivery',
      image: 'delivery.png',
      description: '...'
    },
    {
      title: 'Continuous Deployment',
      image: 'deployment.png',
      description: '...'
    },
    {
      title: 'Continuous Operation',
      image: 'operation.png',
      description: '...'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
