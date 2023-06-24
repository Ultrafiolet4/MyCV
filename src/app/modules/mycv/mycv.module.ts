import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {MyCVComponent} from './mycv.component';
import {MatCardModule} from "@angular/material/card";
import {FlexLayoutModule, FlexModule} from "@angular/flex-layout";


const routes: Routes = [
  { path: '', component: MyCVComponent }
];

@NgModule({
  declarations: [
    MyCVComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    FlexModule,
    FlexLayoutModule
  ]
})
export class MyCVModule { }
