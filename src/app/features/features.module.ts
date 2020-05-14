import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturessRoutingModule } from './features-routing.module';
import {
  VideoDetailComponent,
  VideoItemComponent,
  VideoListComponent,
  FavoriteVideoComponent
} from './index';
import { ShareModule } from '../shared/share.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { VideoEffects } from './effects/video';
import { CollectionEffects } from './effects/collection';
import { reducers } from './reducers/index';
import * as fromRoot from './reducers/route';
import {
  routerReducer
} from '@ngrx/router-store';
import { FavoriteBtnDirective } from './directives/favorite-btn.directive'

export const stateKey = 'router';


@NgModule({
  imports: [
    CommonModule,
    FeaturessRoutingModule,
    ShareModule,
    StoreModule.forFeature('youtube', reducers),
    StoreModule.forFeature(stateKey, routerReducer),
    EffectsModule.forFeature([VideoEffects]),
    EffectsModule.forFeature([CollectionEffects]),
  ],
  exports: [],
  declarations: [
    VideoListComponent,
    VideoDetailComponent,
    VideoItemComponent,
    FavoriteBtnDirective,
    FavoriteVideoComponent
  ],
  providers: []
})
export class FeaturesModule { }
