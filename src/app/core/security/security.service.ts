import { Injectable } from '@angular/core';
import { Security } from './security.interface';
import { SECURITIES } from './security.stub';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor() { }

  getSecurities(): Observable<Security[]> {
    return of(SECURITIES)
      .pipe(delay(3000));
  }
}
