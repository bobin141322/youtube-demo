import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturessRoutingModule } from './features-routing.module';
import { VideoDetailComponent, VideoItemComponent, VideoListComponent } from './index';
import { ShareModule } from '../shared/share.module';
import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [
    CommonModule,
    FeaturessRoutingModule,
    ShareModule,
    StoreModule,
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
