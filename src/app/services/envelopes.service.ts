import { Injectable } from '@angular/core';

import { Headers, Http, Response } from '@angular/http';

import { catchError, map, tap } from 'rxjs/operators';

import 'rxjs/add/operator/toPromise';
import { Envelopeitem } from '../envelopes/envelopeitem';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export const Envelopes: Envelopeitem[] = [
  {description: "desc 1", amountBudgeted: 5, amountUsed: 2, amountRemaining: 3},
  { description: "desc 2", amountBudgeted: 9, amountUsed: 2, amountRemaining: 7}
]

@Injectable()
export class EnvelopesService {

  private envelopesUrl = 'http://localhost:6167/Api/Envelopes';

  constructor(
      private http: HttpClient) { }

  getEnvelopes(): Observable <Envelopeitem[]>{
    // return of(Envelopes);
    return this.http.get<Envelopeitem[]>(this.envelopesUrl)
      // .pipe(
      //   tap(Envelopeitem)       
      // );
  }

  // getHeroes (): Observable<Hero[]> {
  //   return this.http.get<Hero[]>(this.heroesUrl)
  //     .pipe(
  //       tap(heroes => this.log(`fetched heroes`)),
  //       catchError(this.handleError('getHeroes', []))
  //     );
  // }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
