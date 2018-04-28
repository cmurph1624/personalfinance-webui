import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Budgetitem } from '../budget/budgetitem';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Envelopeitem } from '../envelopes/envelopeitem';

export const Budgets: Budgetitem[] = [
  {id: 1, description: "desc 1", amount: 5, amountRemaining: 3, catagoryDesc:"test"},
  {id: 2, description: "desc 2", amount: 5, amountRemaining: 7, catagoryDesc:"test"}
]


@Injectable()
export class BudgetService {
 

  constructor() { }

  getBudget(): Observable <Budgetitem[]>{
    return of(Budgets);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
