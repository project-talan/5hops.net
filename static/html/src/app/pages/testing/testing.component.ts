import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {

  section = '';
  subSection = '';
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.url.subscribe(url => { this.section = url[0].path; if (url.length > 1) { this.subSection = url[1].path; }} );
  }

  getSection(): string {
    return `/${this.section}`;
  }

  getSubSection(): string {
    return `/${this.subSection}`;
  }

}
