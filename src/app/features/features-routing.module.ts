import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoListComponent, LoginComponent, VideoDetailComponent } from './index';



const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'video-list',
        component: VideoListComponent
    },
    {
        path: 'video-detail/:id',
        component: VideoDetailComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturessRoutingModule { }