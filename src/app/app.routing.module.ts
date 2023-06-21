import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/main/main.module').then(m => m.MainModule) },
  { path: 'mycv', loadChildren: () => import('./modules/mycv/mycv.module').then(m => m.MyCVModule) },
  { path: 'aboutme', loadChildren: () => import('./modules/aboutme/aboutme.module').then(m => m.AboutmeModule) }
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
