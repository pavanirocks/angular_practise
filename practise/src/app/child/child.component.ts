import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input()
  myinputMsg!: string; 
  @Output() myOutput:EventEmitter<string>= new EventEmitter();  
  outputMessage:string="I am child component."  
  constructor() { }

  ngOnInit(): void {
    console.log(this.myinputMsg); 
  }
  sendValues(){  
    this.myOutput.emit(this.outputMessage);  //https://www.c-sharpcorner.com/article/input-and-output-decorator-in-angular/
 }  

}
