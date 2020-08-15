import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login.component';
import { ErrorPageComponent } from '../shared/error-page/error-page.component'

const loginRoutes: Routes = [
    { path: 'login',
      component: LoginComponent,
      pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(loginRoutes)
    ]
})
export class LoginRoutingModule { }
