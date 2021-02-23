import { Component, Input } from '@angular/core';
import { CardHolder } from './card-holder.service';
import {CalculatorService} from "./calculator.service";

declare const cdnUrl: object;

@Component({
  selector: 'card-holder',
  templateUrl: './card-holder.component.html',
  styleUrls: ['./card-holder.component.css']
})
export class CardHolderComponent {
  @Input() player: CardHolder;
  @Input() calculator: CalculatorService;

  toCdn(file) {
    return cdnUrl[file] || file;
  }
}
