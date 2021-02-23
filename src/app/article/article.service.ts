import { Injectable } from '@angular/core';
declare const fetch: any;
declare const anychart: any;
declare const cdnUrl: object;
function toCdn(file) {
  return cdnUrl[file] || file;
}

@Injectable()
export class ArticleService {

  constructor() {

  }
}

