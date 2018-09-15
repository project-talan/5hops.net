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
      description: '...',
      subSections: [
        {
          title: 'Branching model'
        },
        {
          title: 'Release model model'
        },
        {
          title: 'Monoliths vs Service-Oriented Architectures vs Microservices'
        }
      ]
    },
    {
      title: 'Continuous Testing',
      image: 'testing.png',
      description: '...',
      subSections: [
        {
          title: 'Unit tests & coverage'
        },
        {
          title: 'Static code analysis'
        },
        {
          title: 'E2e, functional, integration tests & coverage'
        }
      ]
    },
    {
      title: 'Continuous Delivery',
      image: 'delivery.png',
      description: '...',
      subSections: [
      ]
    },
    {
      title: 'Continuous Deployment',
      image: 'deployment.png',
      description: '...',
      subSections: [
      ]
    },
    {
      title: 'Continuous Operation',
      image: 'operation.png',
      description: '...',
      subSections: [
      ]
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
