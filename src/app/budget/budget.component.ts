import { Component, OnInit } from '@angular/core';
import { Budgetitem } from './budgetitem';
import { BudgetService } from '../services/budget.service';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {
  budgets: Budgetitem[];
  error: any;
  constructor(private budgetService: BudgetService) { }

  ngOnInit() {
    this.budgetService.getBudget().subscribe( budgets => this.budgets = budgets )
  }

}
