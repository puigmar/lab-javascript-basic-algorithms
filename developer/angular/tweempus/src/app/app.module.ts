import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CoreModule } from './core/core.module';
import { LoginModule } from './login/login.module';
import { ProfileModule } from './profile/profile.module';
import { DashboardModule } from './dashboard/dashboard.module';

import { ErrorPageModule } from './error-page/error-page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    LoginModule,
    ProfileModule,
    DashboardModule,
    ErrorPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
