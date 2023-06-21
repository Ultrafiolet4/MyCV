import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {MyCVComponent} from './mycv.component';


const routes: Routes = [
  { path: '', component: MyCVComponent }
];

@NgModule({
  declarations: [
    MyCVComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MyCVModule { }
