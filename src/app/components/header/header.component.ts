import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("Component creado");
  }

  nombre = "John";
  arr = [0, 1, 2, 3, 4, 5, 6, 7];

  add(){
    this.arr.push(Math.random())
  }
}
