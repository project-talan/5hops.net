import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Link, SubSection, Section, Toc } from './../../models/toc';
import { Sections } from './../../app.toc';

@Component({
  selector: 'app-hop',
  templateUrl: './hop.component.html',
  styleUrls: ['./hop.component.css']
})
export class HopComponent implements OnInit {

  hop = '';
  // subSections: SubSection[] = Sections[0].subSections;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.url.subscribe(url => {
      this.hop = url[1].path;
    });
  }

  getHop(): string {
    return this.hop;
  }

}
