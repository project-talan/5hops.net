import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  hop = '';
  article = '';

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.url.subscribe(url => {
      console.log(url);
      if (url.length > 1) {
        this.hop = url[1].path;
        if (url.length > 2) {
          this.article = url[2].path;
        }
      }
    });
  }

  getHop(): string {
    return this.hop;
  }

  getArticle(): string {
    return this.article;
  }

}
