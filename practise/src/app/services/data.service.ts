import { Injectable } from '@angular/core';  
  
@Injectable()  
export class DataService {  
  
  private data = {};  
  
 setOption(option: any, value: any) {      
    // this.data[option] = value;  
  }  
  
  getOption() {  
    return this.data;  
  }  
}  