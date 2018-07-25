import { Component, OnInit } from '@angular/core';
import {trigger,style,transition,keyframes,query,stagger} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemCount : number = 4;
  btnText : string = "Add Item";
  goals = [];
  goalText = "Mi primera meta es ";
  constructor() { }

  ngOnInit() {
    this.itemCount = this.goals.length;
  }

  addItems(){
    
    if(this.goalText==''){
      alert("dgdfgfd");
    }else{
      this.goals.push(this.goalText);
      this.goalText = '';
    this.itemCount = this.goals.length;
    return false;
    }

    
  }
}
