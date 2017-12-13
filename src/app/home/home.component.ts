import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bucketItems: string[] = [];
  newItem:string;
  constructor() { }

  ngOnInit() {
    if(this.bucketItems.length==0){
      this.bucketItems.push('Live life with goals');
    }
  }

  addItem() {
    this.bucketItems.push(this.newItem);
    this.newItem = '';
  }

}
