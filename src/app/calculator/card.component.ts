import { Component, Input } from '@angular/core';

import { Card } from './card.service';
import {CalculatorService} from "./calculator.service";

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CardComponent {
  @Input() card: Card;
  @Input() calculator: CalculatorService;
}
