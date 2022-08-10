import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PORTFOLIO } from './portfolio.stub';
import { Portfolio } from './portfolio.interface';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor() { }

  getPortfolio(): Observable<Portfolio[]> {
    return of(PORTFOLIO);
  }
}
