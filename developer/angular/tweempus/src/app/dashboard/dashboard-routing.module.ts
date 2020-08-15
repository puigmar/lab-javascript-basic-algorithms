import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { ErrorPageComponent } from '../shared/error-page/error-page.component'


const dashboardRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    {
      path: '**',
      component: ErrorPageComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(dashboardRoutes)
    ]
})
export class DashboardRoutingModule { }
