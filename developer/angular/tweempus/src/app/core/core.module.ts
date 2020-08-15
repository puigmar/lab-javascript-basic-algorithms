import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';



@NgModule({
  declarations: [HeaderComponent, NavComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent,
    NavComponent
  ]
})
export class CoreModule { }
