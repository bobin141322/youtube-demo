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
import * as fromRoot from './features/reducers/index';
export const stateKey = 'router';
import {AuthGuard} from './authGuard';
import { DBModule } from '@ngrx/db';
import { schema } from './db';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ShareModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreModule.forRoot(fromRoot.reducers),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot({
      serializer: CustomSerializer,
      stateKey,
    }),
    DBModule.provideDB(schema),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  exports: [],
  providers: [YoutubeService, AuthGuard],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
