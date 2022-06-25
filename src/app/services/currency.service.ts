import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Currency } from '../models/currency';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

constructor( private httpClient:HttpClient ) { }

getCurrensy(): Observable<Currency[]>{
  return this.httpClient.get<Currency[]>('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
}

}
