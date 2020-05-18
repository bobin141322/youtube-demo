import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoListComponent, LoginComponent, VideoDetailComponent, FavoriteVideoComponent } from './index';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'video-list',
        pathMatch: 'full'
    },
    {
        path: 'video-list',
        component: VideoListComponent
    },
    {
        path: 'video-detail/:id',
        component: VideoDetailComponent
    },
    {
        path: 'collection',
        component: FavoriteVideoComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturessRoutingModule { }
