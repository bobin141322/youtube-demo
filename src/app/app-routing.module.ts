import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoListComponent, LoginComponent } from './features/index'
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

const routes: Routes = [];
// const routes: Routes = [
//   {
//     path: '',
//     children: [
//       { path: 'login', component: LoginComponent },
//       // { path: 'video-list', component: VideoListComponent },
//     ],

//   },
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
