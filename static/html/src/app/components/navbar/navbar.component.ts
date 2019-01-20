import { Component, OnInit, Input } from '@angular/core';

import { Link, SubSection, Section, Toc } from './../../models/toc';
import { Sections } from './../../app.toc';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() hop: string;
  @Input() article: string;

  hops: Section[] = Sections;

  constructor() {
  }

  ngOnInit() {
/*
     console.log(this.hop);
     console.log(this.article);
     console.log(this.hops);
*/
  }

}
