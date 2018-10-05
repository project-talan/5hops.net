import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  sections = [
    {
      sup: 'st',
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
          title: 'Project structure: Monoliths vs SOA vs Microservices'
        },
        {
          title: '"Waterfall" vs "Agile"'
        }
      ],
      links: [
        { title: '12 factors app', ref: 'https://12factor.net/' },
        { title: 'microservices.io', ref: 'https://microservices.io/' }
      ]
    },
    {
      sup: 'nd',
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
      sup: 'rd',
      title: 'Continuous Delivery',
      image: 'delivery.png',
      description: '...',
      subSections: [
      ]
    },
    {
      sup: 'th',
      title: 'Continuous Deployment',
      image: 'deployment.png',
      description: '...',
      subSections: [
      ]
    },
    {
      sup: 'th',
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
