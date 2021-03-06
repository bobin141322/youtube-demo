import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoListComponent, LoginComponent } from './../features/index';
import { MainLayoutComponent } from './main-layout/main-layout.component';

import { FeaturesModule } from '../features/features.module';


const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'features',
        pathMatch: 'full'
      },
      { path: 'features', loadChildren: '../features/features.module#FeaturesModule' },
    ]
  },
  {
    path: 'auth',
    component: LoginComponent,
    children: [
      { path: 'login', component: LoginComponent },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [
  ]
})
export class LayoutRoutingModule { }
