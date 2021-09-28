import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AngularBindingsComponent} from './angular-bindings/angular-bindings.component';
import { Child2Component } from './child2/child2.component';

const routes: Routes = [
    { path: 'angular-bindings', component: AngularBindingsComponent },
    { path: 'child2', component: Child2Component },
   // { path: 'second-component', component: SecondComponent },
   {path :'',redirectTo :'angular-bindings',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
