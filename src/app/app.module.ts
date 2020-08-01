import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardCardComponent } from './components/dashboard-card/dashboard-card.component';
import { LastInsightCardComponent } from './components/last-insight-card/last-insight-card.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { PortfolioModelsComponent } from './components/portfolio-models/portfolio-models.component';
import { DashboardFirstCardComponent } from './components/dashboard-first-card/dashboard-first-card.component';
import { HelloDashboardComponent } from './components/hello-dashboard/hello-dashboard.component';
import { DashboardSecondCardComponent } from './components/dashboard-second-card/dashboard-second-card.component';
import { UnderManagementCardComponent } from './components/under-management-card/under-management-card.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DashboardCardComponent,
    LastInsightCardComponent,
    PortfolioModelsComponent,
    DashboardFirstCardComponent,
    HelloDashboardComponent,
    DashboardSecondCardComponent,
    UnderManagementCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
