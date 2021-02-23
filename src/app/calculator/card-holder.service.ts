import {Inject, Injectable} from '@angular/core';
import { Card } from "./card.service";

@Injectable()
export class CardHolder {
  public cards: Card[] = [];
  public equity: object; // {win: **, tie: **}

  constructor(
      @Inject('imageIds') public imageIds: string[] = [],
      @Inject('isHero') public index: number
  ) {
    this.cards = this.imageIds.map(id => new Card(id));
    this.equity = null;
  }

  class() {
    return this.index === -1 ? 'board-label' : 'category-label';
  }

  label() {
    const playerId = this.index + 1;
    if (this.index === -1) {
      return {name: 'Board', id: 'board', playerId: 'board'}
    }
    if (this.isHero()) {
      return {name: 'Hero', id: 'hero', playerId: playerId};
    } else {
      return {name: `P. ${this.index}`, id: ('villain' + this.index.toString()), playerId: playerId};
    }
  }

  isHero() {
    return this.index == 0;
  }

  exportValues() {
    return this.cards.map(c => c.serverValue()).filter(a => a);
  }
}