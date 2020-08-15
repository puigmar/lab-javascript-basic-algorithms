import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from '../shared/error-page/error-page.component';


const erorrRoutes: Routes = [
    {
      path: '**',
      component: ErrorPageComponent
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(erorrRoutes)
    ]
})
export class ErrorPageRoutingModule { }
