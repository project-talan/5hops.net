import { Component, OnInit } from '@angular/core';

import { Link, SubSection, Section, Toc } from './../../models/toc';
import { Content } from './../../app.toc';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  sections: Section[] = Content.sections;
  constructor() { }

  ngOnInit() {
  }

}
