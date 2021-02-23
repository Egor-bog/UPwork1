import {Component, OnInit, ViewChild} from '@angular/core';
import {ArticleService} from "./article.service";
declare const cdnUrl: object;

@Component({
  selector: 'article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers:  [ ArticleService ]
})

export class ArticleComponent implements OnInit {
  @ViewChild('myCarousel', {static: false}) myCarousel;
  article: ArticleService;
  currentSuitSelected: number = 0;

  toCdn(file) {
    return cdnUrl[file] || file;
  }

  ngOnInit() {
    this.article = new ArticleService();
  }

}
