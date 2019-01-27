import { Link, SubSection, Section, Toc } from './models/toc';

export const Content: Toc = {
  sections: [
    {
      id: 'integration',
      title: 'Continuous Integration',
      description: 'This is very first step of fully automated development process',
      sup: 'st',
      icon: 'integration.png',
      subSections: [
        {
          id: 'branchig-model',
          title: 'Branching model',
          description: '...',
          article: null
        },
        {
          id: 'release-model',
          title: 'Release model',
          description: '...',
          article: null
        },
        {
          id: 'monolith-soa-microservices',
          title: 'Monolith / SOA / Microservices',
          description: 'Uniform project structure',
          article: null
        },
        {
          id: 'waterfall-vs-agile',
          title: '"Waterfall" vs "Agile"',
          description: '...',
          article: null
        }
      ],
      links: [
        { title: '12 factors app', id: 'https://12factor.net/' },
        { title: 'microservices.io', id: 'https://microservices.io/' },
        { title: 'A successful Git branching model', id: 'https://nvie.com/posts/a-successful-git-branching-model/' },
        { title: 'Polyglot Persistence / Polyglot Programming', id: 'https://martinfowler.com/bliki/PolyglotPersistence.html' },
//       { title: 'Data Transfer Project', id: 'https://datatransferproject.dev/' },
//        { title: 'Solid', id: 'https://solid.inrupt.com/' }
      ]
    },
    {
      id: 'testing',
      title: 'Continuous Testing',
      description : '',
      sup: 'nd',
      icon : 'testing.png',
      subSections: [
        {
          id: 'unit-tests-and-coverage',
          title: 'Unit tests & coverage',
          description: '...',
          article: null
        },
        {
          id: 'static-code-analysis',
          title: 'Static code analysis',
          description: '...',
          article: null
        },
        {
          id: 'e2e-and-coverage',
          title: 'e2e tests & coverage',
          description: '...',
          article: null
        }
      ],
      links: [
        { title: 'Software Testing Anti-patterns', id: 'http://blog.codepipes.com/testing/software-testing-antipatterns.html' }
      ]
    },
    {
      id: 'delivery',
      title: 'Continuous Delivery',
      description : '',
      sup: 'rd',
      icon : 'delivery.png',
      subSections : [],
      links : []
    },
    {
      id: 'deployment',
      title: 'Continuous Deployment',
      description : '',
      sup: 'th',
      icon : 'deployment.png',
      subSections : [],
      links : []
    },
    {
      id: 'operation',
      title: 'Continuous Operation',
      description : '',
      sup: 'th',
      icon : 'operation.png',
      subSections : [],
      links : []
    }
  ]
};
