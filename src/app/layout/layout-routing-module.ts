import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoListComponent, LoginComponent } from './../features/index';
import { MainLayoutComponent } from './main-layout/main-layout.component';

import { FeaturesModule } from '../features/features.module';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [
      { path: 'login', component: LoginComponent },
    ],

  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', loadChildren: '../features/features.module#FeaturesModule' }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [
  ]
})
export class LayoutRoutingModule { }
