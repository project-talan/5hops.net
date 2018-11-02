import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  getRouteUrl(): string {
    return this.router.url;
  }

}
