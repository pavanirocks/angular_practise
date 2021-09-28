import { Component, OnInit,ViewChild } from '@angular/core';
import { Child2Component } from '../child2/child2.component';
@Component({
  selector: 'app-angular-bindings',
  templateUrl: './angular-bindings.component.html',
  styleUrls: ['./angular-bindings.component.css']
})
export class AngularBindingsComponent implements OnInit {
  userName: string = "Peter";
  isTrue: boolean = true;
  name = "pavani";
  appName = "My first app in Angular 8";
  myInputMessage:string ="I am the parent component" 
  @ViewChild('child')
  public child2!: Child2Component;

  constructor() { }

  ngOnInit() { }

  showData($event: any) {
    console.log("button is clicked!");
    if ($event) {
      console.log($event.target);
      console.log($event.target.value);
    }
  }
  GetChildData(data: string){  
    console.log(data);  
 }  
 public setChildProperty(): void {
  this.child2.application = 'This Data is Coming From Parent To Child - via @ViewChild()';
}


}
