import { Component, OnInit, Input } from '@angular/core';

import { Link, SubSection, Section, Toc } from './../../models/toc';
import { Content } from './../../app.toc';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() hop: string;
  @Input() article: string;

  hops: Section[] = Content.sections;

  constructor() {
  }

  ngOnInit() {
/*
     console.log(this.hop);
     console.log(this.article);
     console.log(this.hops);
*/
  }

  capitalizeFirstLetter(str): string {
    return str[0].toUpperCase() + str.slice(1);
  }

}
