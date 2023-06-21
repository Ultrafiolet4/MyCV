import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app.routing.module";
import {NgxsModule} from "@ngxs/store";
import {NameState} from "./state/namestate";
import {NavbarComponent} from "./modules/navbar/navbar.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {ExtendedModule, FlexModule} from "@angular/flex-layout";
import {MatCardModule} from "@angular/material/card";
import {MatSidenavModule} from "@angular/material/sidenav";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterOutlet,
    AppRoutingModule,
    NgxsModule.forRoot([NameState], {}),
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexModule,
    MatCardModule,
    MatSidenavModule,
    ExtendedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
