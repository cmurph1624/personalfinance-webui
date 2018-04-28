import { Injectable } from '@angular/core';
import { AccountSummaryitem } from '../account-summary/account-summaryitem';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class AccountSummaryService {

  private accountSummaryUrl = 'http://localhost:6167/Api/AccountSummary';

  constructor(private http: HttpClient) { }

  getAccountSummary(): Observable <AccountSummaryitem[]>{
    return this.http.get<AccountSummaryitem[]>(this.accountSummaryUrl)
  }

}
