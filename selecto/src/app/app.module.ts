import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app.routes";
import {StoreModule} from "@ngrx/store";
import {reducerMap} from "./common/store/reducer-map";
import {
  metaReducers
} from "./common/store/meta-reducers";
import {StoreRouterConnectingModule} from "@ngrx/router-store";
import {EffectsModule} from "@ngrx/effects";
import {
  HttpClientModule
} from "@angular/common/http";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgbModule,
    HttpClientModule,
    BrowserModule,
    StoreModule.forRoot(reducerMap as any, {metaReducers: metaReducers as any}),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router'
    }),
    RouterModule.forRoot(appRoutes, {paramsInheritanceStrategy: 'always'}),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
