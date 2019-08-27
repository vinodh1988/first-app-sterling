import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 title:string = 'My First angular APP';
 developer:string= "Sterling Software";
 programmers:string[]=["Rahul","Ravi","Naresh","Kiran","Joseph","Laury"];
 boxtitles:string[]=["Tools","Languages","Databases"];
 current:string;
 items:string[][]=[
   ["Eclipse IDE","Visual Studio Code","Chrome Browser","Intelli J"],
   ["Java","Angular","Javascript","SQL"],
   ["Oracle Server","MySQL","MongoDB"]
 ]

  
 getInfo(data,index){
   this.current=data;
   this.items[index].push(data);
 }
}
