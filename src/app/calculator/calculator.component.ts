import {Component, OnInit, ViewChild} from '@angular/core';
import {CalculatorService} from "./calculator.service";
declare const cdnUrl: object;

@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
  providers:  [ CalculatorService ]
})

export class CalculatorComponent implements OnInit {
  @ViewChild('myCarousel', {static: false}) myCarousel;
  calculator: CalculatorService;
  currentSuitSelected: number = 0;

  toCdn(file) {
    return cdnUrl[file] || file;
  }

  ngOnInit() {
    this.calculator = new CalculatorService();
  }

  moveToIndex(i) {
    Array.from(document.getElementsByClassName('carousel-dot')).forEach((suitIndicator, index) => {
      if (Array.from(suitIndicator.classList).find(i => i == 'carousel-dot-active')) {
        this.currentSuitSelected = index;
      }
    })
    let className;

    if (i < this.currentSuitSelected) {
      className = 'carousel-arrow-prev';
    } else {
      className = 'carousel-arrow-next';
    }

    let element: HTMLElement = document.getElementsByClassName(className)[0] as HTMLElement;
    this.clickDelay(element, Math.abs(this.currentSuitSelected - i));
  }

    clickDelay(element, times) {
      if (times == 0) return;
      element.click();
      setTimeout(() => {
        this.clickDelay(element, times - 1)
      }, 100);

    }
}
