import { Injectable, Inject } from '@angular/core';
declare const cdnUrl: object;
function toCdn(file) {
  return cdnUrl[file] || file;
}

@Injectable()
export class Card {
  public redBack: string = toCdn('assets/images/cards_zipped/newGraySm.png')
  public redBackBordered: string = toCdn('assets/images/cards_zipped/newGraySmBr.png')

  constructor(
      @Inject('imageId') public imageId: string,
      @Inject('src') public src: string = '',
      @Inject('value') public value: string = null
  ) {
    this.imageId = imageId;
    this.setNewCard(src, value);
  }

  setNewCard(src, value) {
    this.src = toCdn(src || this.redBack);
    this.value = value;
  }

  serverValue() {
    if (!this.value) { return null; }
    return this.value.slice(-1) + this.value.slice(0, -1)
  }

  deselect() {
    this.src = toCdn(this.redBack);
    this.value = null;
  }

  setSrc(calculator) {
    if (!this.value) {
      if (this === calculator.nextCard()) {
        this.src = toCdn(this.redBackBordered);
      } else {
        this.src = toCdn(this.redBack);
      }
    }
  }
}

