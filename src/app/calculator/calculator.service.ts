import { Injectable } from '@angular/core';
import {CardHolder} from "./card-holder.service";
declare const fetch: any;
declare const anychart: any;
declare const cdnUrl: object;
function toCdn(file) {
  return cdnUrl[file] || file;
}

@Injectable()
export class CalculatorService {
  suits: string[] = ['H', 'D', 'S', 'C'];
  cardIndices: string[] = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  selectedCards: object = {};
  validData: boolean = false;
  players: CardHolder[] = [];
  board: CardHolder;
  chart: any;
  ajaxCounter: number = 0

  constructor() {
    this.addPlayer(0);
    this.addPlayer(1);
    this.board = new CardHolder(['board-1-card','board-2-card','board-3-card','board-4-card','board-5-card'], -1);
    this.resetSrc();
  }


  cardToSrc(cardIndex) {
    return toCdn(`assets/images/cards_zipped/${cardIndex}.png`);
  }

  nextCard() {
    return this.getAllCard().find((card) => !card.value);
  }

  addNewPlayer() {
    if (this.players.length < 6) {
      this.addPlayer(this.players.length);
      console.log(this.players.length)
    }
    this.resetBoard();
  }

  removePlayer(i) {
    this.players.splice(i, 1);
    this.resetBoard();
  }

  selectCard(i, suit) {
    const card = this.nextCard();
    if (card) {
      card.value = i + suit;
      this.selectedCards[card.value] = card;
      card.src = this.cardToSrc(i + suit);// TODO: bind runtime
      this.resetBoard();
    }
  }

  deselect(card) {
    delete this.selectedCards[card.value];
    card.deselect();
    this.resetBoard();
  }

  addPlayer(i) {
    this.players.push(new CardHolder([`player${i}-1-card`, `player${i}-2-card`], i));
  }


  // private
  sendAjax(times) {
    const params = {
      shared: this.board.exportValues(),
      times,
      deadCards: []
    }

    this.players.forEach((player, i) => {
      params[`cardsPlayer${i + 1}`] = player.exportValues();
    })
    const queryString = Object.keys(params).map(key => {
      if (Array.isArray(params[key])) {
        return params[key].map(arrValue => key + '[]=' + arrValue).join('&');
      }
      return key + '=' + params[key];
    }).join('&');
    return fetch("https://texas-multirun.herokuapp.com/api/multi-calc?" + queryString, {"method": "get"}).then(r => r.json());
  }

  initChart(chartData) {
      this.chart = anychart.column();

      // turn on chart animation
      this.chart.animation(true);

      // set chart title text settings
      this.chart.title('Running results');

      // create area series with passed data
      var series = this.chart.column(chartData);

      // set series tooltip settings
      series.tooltip().titleFormat('{%X}');

      series
          .tooltip()
          .position('center-top')
          .anchor('center-bottom')
          .offsetX(0)
          .offsetY(5)
          .format('%{%Value}{groupsSeparator: }');

      // set scale minimum
      this.chart.yScale().minimum(0);
      this.chart.yScale().maximum(100);

      // set yAxis labels formatter
      this.chart.yAxis().labels().format('%{%Value}{groupsSeparator: }');

      // tooltips position and interactivity settings
      this.chart.tooltip().positionMode('point');
      this.chart.interactivity().hoverMode('by-x');

      // axes titles
      this.chart.xAxis().title('Pot share');
      this.chart.yAxis().title('Frequency');

      // set container id for the chart
      this.chart.container('results');

      // initiate chart drawing
      this.chart.draw();
  }

  removeChart() {
    if (this.chart) {
      this.chart.remove();
    }
    document.getElementById('results').innerHTML = '';
  }
  sendAjaxAndSetResults(times) {
    this.removeChart();

    this.sendAjax(times).then(a => {
      const humanMapping = {
        '0': 'Nothing',
        '25': '¼ Pot',
        '75': '¾ Pot',
        '50': '½ Pot',
        '100': 'All pots',
        '33.33333333333333': '⅓ Pot',
        '16.666666666666664': '⅙ Pot',
        '66.66666666666666': '⅔ Pot',
        '83.33333333333334': '⅚ Pot'
      };
      if (Object.keys(a).length > 2) {
        Object.assign(humanMapping, {
            '25': '1 split pot',
            '75': '½ Pot + split pot',
            '16.666666666666664': '1 split pot',
            '83.33333333333334': '⅔ Pot + split pot'
        })
        if (times == 3) {
          Object.assign(humanMapping, {
            '50': '⅓ Pot + split pot', // 1/3 + 1/6 while 1/6 represent any tie
          })
        }
      }
      let text = 'Running results: \n';
      let chartData = [];
      Object.keys(a.cardsPlayer1.running).sort((a, b) => parseFloat(a) - parseFloat(b)).forEach(res => {
        chartData.push([(humanMapping[res] || (res + '% Pot')), a.cardsPlayer1.running[res]])
        text += (humanMapping[res] || (res + '% Pot')) + ' is ' + a.cardsPlayer1.running[res] + '% '
            + '\n';
      })
      this.initChart(chartData);
      document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
    });
  }

  setEquity() {
    if (this.validData) {
      this.ajaxCounter++;
      const requestId = this.ajaxCounter;
      this.sendAjax(1).then(res => {
        // checking if this is the last ajax sent
        if (requestId == this.ajaxCounter) {
          this.players.forEach((player, i) => {
            const playerRes = res[`cardsPlayer${i + 1}`].running;
            player.equity = {win: (playerRes[100] || '0'), tie: (playerRes[50] || '0')};
          })
        }
      });
    } else {
      this.players.forEach(player => player.equity = null);
    }
  }

  resetIndexes() {
    this.players.forEach((player, i) => {
      player.index = i;
    })
  }

  resetBoard() {
    this.validData = this.players.every((player) => player.cards.every(c => c.value));
    this.resetIndexes();
    this.removeChart();
    this.resetSrc();
    this.setEquity();
  }
  resetSrc() {
    this.getAllCard().forEach((card) => {
      card.setSrc(this);
    })
  }

  isPlayersLimitReached() {
    return this.players.length >= 6;
  }

  getAllCard() {
    let allCards = [];
    this.players.forEach(p => {
      allCards = allCards.concat(p.cards)
    });
    return allCards.concat(this.board.cards);
  }

}

