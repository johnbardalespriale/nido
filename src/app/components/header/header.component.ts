import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  clicked() {
    var submenu = document.getElementById('submenu');
    submenu.classList.add('visibility');
    setTimeout(() => {
      submenu.classList.remove('visibility');
    }, 500);

    var submenu2 = document.getElementById('submenu2');
    submenu2.classList.add('visibility');
    setTimeout(() => {
      submenu2.classList.remove('visibility');
    }, 500);

    var submenu3 = document.getElementById('submenu3');
    submenu3.classList.add('visibility');
    setTimeout(() => {
      submenu3.classList.remove('visibility');
    }, 500);

    var submenu4 = document.getElementById('submenu4');
    submenu4.classList.add('visibility');
    setTimeout(() => {
      submenu4.classList.remove('visibility');
    }, 500);

    var submenu5 = document.getElementById('submenu5');
    submenu5.classList.add('visibility');
    setTimeout(() => {
      submenu5.classList.remove('visibility');
    }, 500);

    var submenu6 = document.getElementById('submenu6');
    submenu6.classList.add('visibility');
    setTimeout(() => {
      submenu6.classList.remove('visibility');
    }, 500);

    var submenu7 = document.getElementById('submenu7');
    submenu7.classList.add('visibility');
    setTimeout(() => {
      submenu7.classList.remove('visibility');
    }, 500);

    var submenu11 = document.getElementById('submenu11');
    submenu11.classList.add('visibility');
    setTimeout(() => {
      submenu11.classList.remove('visibility');
    }, 500);

    var submenu8 = document.getElementById('submenu8');
    submenu8.classList.add('visibility');
    setTimeout(() => {
      submenu8.classList.remove('visibility');
    }, 500);

    var submenu9 = document.getElementById('submenu9');
    submenu9.classList.add('visibility');
    setTimeout(() => {
      submenu9.classList.remove('visibility');
    }, 500);
  }
}
