import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  getRouteUrl(): string {
    return this.router.url;
  }

}
