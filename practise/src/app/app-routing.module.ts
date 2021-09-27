import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AngularBindingsComponent} from './angular-bindings/angular-bindings.component';

const routes: Routes = [
    { path: 'angular-bindings', component: AngularBindingsComponent },
   // { path: 'second-component', component: SecondComponent },
   {path :'',redirectTo :'angular-bindings',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
