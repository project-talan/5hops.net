import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, retry } from 'rxjs/operators';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  private version: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    /*
    this.http.get('./package.json').pipe(
      .map(res => res.json())
    ).subscribe(
      (v) => {
        console.log('1');
        this.version = v.version;
      },
      (err) => {
        console.log('2');
      },
      () => {
        console.log('3');
      }
    );
    */
  }
}
