import { Link, SubSection, Section, Toc } from './models/toc';

export const Sections: Section[] = [
  {
    name: 'Integration',
    ref: '/continuous-integration',
    title: 'Continuous Integration',
    description: 'This is very first step of fully automated development process',
    sup: 'st',
    image: 'integration.png',
    subSections: [
      {
        name: 'Branching model',
        ref: 'branchig-model'
      },
      {
        name: 'Release model',
        ref: 'release-model'
      },
      {
        name: 'Project structure: Monoliths vs SOA vs Microservices',
        ref: 'monolith-soa-microservices'
      },
      {
        name: '"Waterfall" vs "Agile"',
        ref: 'waterfall-vs-agile'
      }
    ],
    links: [
      { name: '12 factors app', ref: 'https://12factor.net/' },
      { name: 'microservices.io', ref: 'https://microservices.io/' },
      { name: 'A successful Git branching model', ref: 'https://nvie.com/posts/a-successful-git-branching-model/' },
      { name: 'Polyglot Persistence / Polyglot Programming', ref: 'https://martinfowler.com/bliki/PolyglotPersistence.html' },



//      { name: 'Data Transfer Project', ref: 'https://datatransferproject.dev/' },
//      { name: 'Solid', ref: 'https://solid.inrupt.com/' }
    ]
  },
  {
    name: 'Testing',
    ref: '/continuous-testing',
    title: 'Continuous Testing',
    description : '',
    sup: 'nd',
    image : 'testing.png',
    subSections: [
      {
        name: 'Unit tests & coverage',
        ref: ''
      },
      {
        name: 'Static code analysis',
        ref: ''
      },
      {
        name: 'e2e, functional, integration tests & coverage',
        ref: ''
      }
    ],
    links: [
      { name: 'Software Testing Anti-patterns', ref: 'http://blog.codepipes.com/testing/software-testing-antipatterns.html' }
    ]
  },
  {
    name: 'Delivery',
    ref: '/continuous-delivery',
    title: 'Continuous Delivery',
    description : '',
    sup: 'rd',
    image : 'delivery.png',
    subSections : [],
    links : []
  },
  {
    name: 'Deployment',
    ref: '/continuous-deployment',
    title: 'Continuous Deployment',
    description : '',
    sup: 'th',
    image : 'deployment.png',
    subSections : [],
    links : []
  },
  {
    name: 'Operation',
    ref: '/continuous-operation',
    title: 'Continuous Operation',
    description : '',
    sup: 'th',
    image : 'operation.png',
    subSections : [],
    links : []
  }
];
