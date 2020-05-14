import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import {LayoutRoutingModule} from './layout-routing-module';
import {
  routerReducer
} from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { Routes, RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    RouterModule,
    StoreModule.forFeature('router', routerReducer),
  ],
  exports: [],
  declarations: [
    MainLayoutComponent,
    HeaderComponent,
    NavComponent
  ]
})
export class LayoutModule { }