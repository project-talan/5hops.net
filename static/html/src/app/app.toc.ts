import { Link, SubSection, Section, Toc } from './models/toc';

export const Sections: Section[] = [
  {
    id: 'integration',
    name: 'Integration',
    title: 'Continuous Integration',
    description: 'This is very first step of fully automated development process',
    synopsis: '',
    sup: 'st',
    image: 'integration.png',
    subSections: [
      {
        id: 'branchig-model',
        name: 'Branching model',
        article: null
      },
      {
        id: 'release-model',
        name: 'Release model',
        article: null
      },
      {
        id: 'monolith-soa-microservices',
        name: 'Uniform project structure: Monolith / SOA / Microservices',
        article: null
      },
      {
        id: 'waterfall-vs-agile',
        name: '"Waterfall" vs "Agile"',
        article: null
      }
    ],
    links: [
      { name: '12 factors app', id: 'https://12factor.net/' },
      { name: 'microservices.io', id: 'https://microservices.io/' },
      { name: 'A successful Git branching model', id: 'https://nvie.com/posts/a-successful-git-branching-model/' },
      { name: 'Polyglot Persistence / Polyglot Programming', id: 'https://martinfowler.com/bliki/PolyglotPersistence.html' },
//      { name: 'Data Transfer Project', id: 'https://datatransferproject.dev/' },
//      { name: 'Solid', id: 'https://solid.inrupt.com/' }
    ]
  },
  {
    id: 'testing',
    name: 'Testing',
    title: 'Continuous Testing',
    description : '',
    synopsis: '',
    sup: 'nd',
    image : 'testing.png',
    subSections: [
      {
        id: 'unit-tests-and-coverage',
        name: 'Unit tests & coverage',
        article: null
      },
      {
        id: 'static-code-analysis',
        name: 'Static code analysis',
        article: null
      },
      {
        id: 'e2e-and-coverage',
        name: 'e2e tests & coverage',
        article: null
      }
    ],
    links: [
      { name: 'Software Testing Anti-patterns', id: 'http://blog.codepipes.com/testing/software-testing-antipatterns.html' }
    ]
  },
  {
    id: 'delivery',
    name: 'Delivery',
    title: 'Continuous Delivery',
    description : '',
    synopsis: '',
    sup: 'rd',
    image : 'delivery.png',
    subSections : [],
    links : []
  },
  {
    id: 'deployment',
    name: 'Deployment',
    title: 'Continuous Deployment',
    description : '',
    synopsis: '',
    sup: 'th',
    image : 'deployment.png',
    subSections : [],
    links : []
  },
  {
    id: 'operation',
    name: 'Operation',
    title: 'Continuous Operation',
    description : '',
    synopsis: '',
    sup: 'th',
    image : 'operation.png',
    subSections : [],
    links : []
  }
];
