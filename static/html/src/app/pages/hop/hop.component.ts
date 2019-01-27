import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Link, SubSection, Section, Toc } from './../../models/toc';
import { Content } from './../../app.toc';

@Component({
  selector: 'app-hop',
  templateUrl: './hop.component.html',
  styleUrls: ['./hop.component.css']
})
export class HopComponent implements OnInit {

  hop = '';
  section: Section = null;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.url.subscribe(url => {
      this.hop = url[1].path;
      this.section = Content.sections.find(e => e.id === this.hop );
    });
  }

  getHop(): string {
    return this.hop;
  }

}
