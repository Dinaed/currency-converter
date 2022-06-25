import { Component, OnInit, Output } from '@angular/core';
import { Currency } from 'src/app/models/currency';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private curencyService: CurrencyService ) { }
  
  currency:Currency[] = [];

  ngOnInit() {
    this.curencyService.getCurrensy().subscribe((data: Currency[]) => {
      this.currency = data;
      return this.currency;      
    })
  }
}
