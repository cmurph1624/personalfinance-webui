import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BudgetComponent } from './budget/budget.component';
import { BudgetService } from './services/budget.service';
import { BudgetDetailComponent } from './budget/budget-detail/budget-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EnvelopesService } from './services/envelopes.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BudgetComponent,
    BudgetDetailComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    BudgetService,
    EnvelopesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
