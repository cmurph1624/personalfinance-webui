import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { BudgetComponent } from './budget/budget.component';

const routes: Routes = [
  { path: '', redirectTo: 'budget', pathMatch: 'full' },
  { path: 'budget', component: BudgetComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
