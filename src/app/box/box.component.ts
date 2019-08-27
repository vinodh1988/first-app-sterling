import { Component, OnInit, Input ,EventEmitter, Output} from '@angular/core';

/*
   <app-box [type]="title" [items]="items"></app-box>
*/
@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
 
  @Input('type') title:string="NoValue";
  @Input('items') values:string[]=[];
  data=" B O X";
  theme:string="box1";
  item:string;
  @Output('get') sendParent:EventEmitter<string>=new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  toggleTheme(){
    this.theme=this.theme=="box1"?"box2":"box1";
  }

  newItem(){
     this.sendParent.emit(this.item);
  }

}
