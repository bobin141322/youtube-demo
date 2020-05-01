import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import {LayoutRoutingModule} from './layout-routing-module';
//import {FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
  exports: [],
  declarations: [
    MainLayoutComponent,
    HeaderComponent,
    NavComponent
  ]
})
export class LayoutModule { }