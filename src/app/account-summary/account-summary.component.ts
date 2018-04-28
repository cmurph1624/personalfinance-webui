import { Component, OnInit } from '@angular/core';
import { AccountSummaryitem } from './account-summaryitem';
import {AccountSummaryService} from '../services/account-summary.service';
@Component({
  selector: 'side-bar',
  templateUrl: './account-summary.component.html',
  styleUrls: ['./account-summary.component.css']
})
export class AccountSummaryComponent implements OnInit {
  accountSummary: AccountSummaryitem[];
  
  constructor(private accountSummaryService: AccountSummaryService) { }

  ngOnInit() {
    this.accountSummaryService.getAccountSummary().subscribe( accountSummary => this.accountSummary = accountSummary );
  }

}
