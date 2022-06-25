import { Component, OnInit } from '@angular/core';
import { Currency } from 'src/app/models/currency';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  constructor( private curencyService: CurrencyService ) { }
  
  currency: Currency[] = []
  firstCurrensy: number = 1;
  secondCurrensy: number = 1;

  firstSelect = 0;
  secondSelect = 0;

  ngOnInit() {
    this.curencyService.getCurrensy().subscribe((data: Currency[]) => {
      this.currency = data
      return this.currency;
    });
  }
  calcCurrency1(){
    this.secondCurrensy  = (this.firstCurrensy * this.firstSelect) / this.secondSelect
    return this.secondCurrensy.toFixed(2);
  }
  calcCurrency2(){
    this.firstCurrensy = (this.secondCurrensy*this.secondSelect) / this.firstSelect
    return this.firstCurrensy.toFixed(2)
  }
}
