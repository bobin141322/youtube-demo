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
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import {
  StoreRouterConnectingModule,
  RouterStateSerializer
} from '@ngrx/router-store';
import {reducers, metaReducers, CustomSerializer} from './features/reducers/route';


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
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
    }),
    ShareModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([])
  ],
  exports: [],
  providers: [YoutubeService, { provide: RouterStateSerializer, useClass: CustomSerializer }],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
