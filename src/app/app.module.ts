import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoListComponent, LoginComponent} from './features/index';
import { SocialCardComponent } from './shared/component/social-card/social-card.component';
import { LayoutModule } from './layout/layout-module';
import { ShareModule } from './shared/share.module';
import { FeaturesModule } from './features/features.module';
import { HttpClientModule } from '@angular/common/http';

import {YoutubeService} from './features/services/youtube.service';
import { StoreModule } from '@ngrx/store';
import { reducer, metaReducers } from './features/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { VideoEffects } from './features/effects/video';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SocialCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    FeaturesModule,
    HttpClientModule,
    ShareModule,
    StoreModule.forRoot(reducer({}, {})),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([])
  ],
  exports: [],
  providers: [YoutubeService],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
