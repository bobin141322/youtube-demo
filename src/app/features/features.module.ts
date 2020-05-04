import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { VideoListComponent } from '../containers/video-list/video-list.component';
import { FeaturessRoutingModule } from './features-routing.module';
import { VideoDetailComponent, VideoItemComponent, VideoListComponent } from './index';
import { ShareModule } from '../shared/share.module';
//import { Store } from '@ngrx/store';

@NgModule({
  imports: [
    CommonModule,
    FeaturessRoutingModule,
    ShareModule
  ],
  exports: [],
  declarations: [
    VideoListComponent,
    VideoDetailComponent,
    VideoItemComponent
  ],
  providers: []
})
export class FeaturesModule { }
