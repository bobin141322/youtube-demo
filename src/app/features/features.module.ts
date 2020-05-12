import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturessRoutingModule } from './features-routing.module';
import { VideoDetailComponent, VideoItemComponent, VideoListComponent } from './index';
import { ShareModule } from '../shared/share.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { VideoEffects } from './effects/video';
import { reducers } from './reducers/index';
import * as fromRoot from './reducers/route';
import {
  StoreRouterConnectingModule,
  RouterStateSerializer,
  routerReducer
} from '@ngrx/router-store';

export const stateKey = 'router';


@NgModule({
  imports: [
    CommonModule,
    FeaturessRoutingModule,
    ShareModule,
    StoreModule.forFeature('youtube', reducers),
    StoreModule.forFeature(stateKey, routerReducer),
    EffectsModule.forFeature([VideoEffects])
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
