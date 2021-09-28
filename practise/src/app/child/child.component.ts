import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';
import { DataService } from "../services/behaviourSubject.service";
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
  message!:string;
  constructor(private data: DataService) { }

  ngOnInit(): void {
    console.log(this.myinputMsg); 
    this.data.currentMessage.subscribe(message => this.message = message)
  }
  sendValues(){  
    this.myOutput.emit(this.outputMessage);  //https://www.c-sharpcorner.com/article/input-and-output-decorator-in-angular/
 }  
 newMessage() {
  this.data.changeMessage("Hello from child")
}

}
