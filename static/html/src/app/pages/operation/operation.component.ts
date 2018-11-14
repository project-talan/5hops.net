import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit {

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
