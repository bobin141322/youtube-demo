import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoListComponent, LoginComponent } from './features/index'
import { AuthGuard } from './authGuard';

//const routes: Routes = [];
const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    // canActivate: [AuthGuard],
  },
  // { path: '**', redirectTo: '' }
  ];
//   {
//     path: '',
//     component: MainLayoutComponent,
//     children: [
//       { path: 'video-list', loadChildren: 'VideoListComponent' }
//     ]

//   }
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
