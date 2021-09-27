import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() { }

  showData($event: any) {
    console.log("button is clicked!");
    if ($event) {
      console.log($event.target);
      console.log($event.target.value);
    }
  }


}
