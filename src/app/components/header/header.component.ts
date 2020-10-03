import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }

  deleteHover(letra) {
    if (letra === "e") {
      var borrarX = document.getElementById('x');
      borrarX.classList.remove('letraMenuHover');
      var borrarP = document.getElementById('p');
      borrarP.classList.remove('letraMenuHover');
      var borrarL = document.getElementById('l');
      borrarL.classList.remove('letraMenuHover');
      var borrarO = document.getElementById('o');
      borrarO.classList.remove('letraMenuHover');
      var borrarR = document.getElementById('r');
      borrarR.classList.remove('letraMenuHover');
      var borrarA = document.getElementById('a');
      borrarA.classList.remove('letraMenuHover');
      var borrarN = document.getElementById('n');
      borrarN.classList.remove('letraMenuHover');
      var borrarD = document.getElementById('d');
      borrarD.classList.remove('letraMenuHover');
      var borrarU = document.getElementById('u');
      borrarU.classList.remove('letraMenuHover');
    } else if (letra === "x") {
      var borrarX = document.getElementById('e');
      borrarX.classList.remove('letraMenuHover');
      var borrarP = document.getElementById('p');
      borrarP.classList.remove('letraMenuHover');
      var borrarL = document.getElementById('l');
      borrarL.classList.remove('letraMenuHover');
      var borrarO = document.getElementById('o');
      borrarO.classList.remove('letraMenuHover');
      var borrarR = document.getElementById('r');
      borrarR.classList.remove('letraMenuHover');
      var borrarA = document.getElementById('a');
      borrarA.classList.remove('letraMenuHover');
      var borrarN = document.getElementById('n');
      borrarN.classList.remove('letraMenuHover');
      var borrarD = document.getElementById('d');
      borrarD.classList.remove('letraMenuHover');
      var borrarU = document.getElementById('u');
      borrarU.classList.remove('letraMenuHover');
    } else if (letra === "p") {
      var borrarX = document.getElementById('e');
      borrarX.classList.remove('letraMenuHover');
      var borrarX = document.getElementById('x');
      borrarX.classList.remove('letraMenuHover');
      var borrarL = document.getElementById('l');
      borrarL.classList.remove('letraMenuHover');
      var borrarO = document.getElementById('o');
      borrarO.classList.remove('letraMenuHover');
      var borrarR = document.getElementById('r');
      borrarR.classList.remove('letraMenuHover');
      var borrarA = document.getElementById('a');
      borrarA.classList.remove('letraMenuHover');
      var borrarN = document.getElementById('n');
      borrarN.classList.remove('letraMenuHover');
      var borrarD = document.getElementById('d');
      borrarD.classList.remove('letraMenuHover');
      var borrarU = document.getElementById('u');
      borrarU.classList.remove('letraMenuHover');
    } else if (letra === "l") {
      var borrarX = document.getElementById('e');
      borrarX.classList.remove('letraMenuHover');
      var borrarX = document.getElementById('x');
      borrarX.classList.remove('letraMenuHover');
      var borrarP = document.getElementById('p');
      borrarP.classList.remove('letraMenuHover');
      var borrarO = document.getElementById('o');
      borrarO.classList.remove('letraMenuHover');
      var borrarR = document.getElementById('r');
      borrarR.classList.remove('letraMenuHover');
      var borrarA = document.getElementById('a');
      borrarA.classList.remove('letraMenuHover');
      var borrarN = document.getElementById('n');
      borrarN.classList.remove('letraMenuHover');
      var borrarD = document.getElementById('d');
      borrarD.classList.remove('letraMenuHover');
      var borrarU = document.getElementById('u');
      borrarU.classList.remove('letraMenuHover');
    } else if (letra === "o") {
      var borrarX = document.getElementById('e');
      borrarX.classList.remove('letraMenuHover');
      var borrarX = document.getElementById('x');
      borrarX.classList.remove('letraMenuHover');
      var borrarP = document.getElementById('p');
      borrarP.classList.remove('letraMenuHover');
      var borrarL = document.getElementById('l');
      borrarL.classList.remove('letraMenuHover');
      var borrarR = document.getElementById('r');
      borrarR.classList.remove('letraMenuHover');
      var borrarA = document.getElementById('a');
      borrarA.classList.remove('letraMenuHover');
      var borrarN = document.getElementById('n');
      borrarN.classList.remove('letraMenuHover');
      var borrarD = document.getElementById('d');
      borrarD.classList.remove('letraMenuHover');
      var borrarU = document.getElementById('u');
      borrarU.classList.remove('letraMenuHover');
    } else if (letra === "r") {
      var borrarX = document.getElementById('e');
      borrarX.classList.remove('letraMenuHover');
      var borrarX = document.getElementById('x');
      borrarX.classList.remove('letraMenuHover');
      var borrarP = document.getElementById('p');
      borrarP.classList.remove('letraMenuHover');
      var borrarL = document.getElementById('l');
      borrarL.classList.remove('letraMenuHover');
      var borrarO = document.getElementById('o');
      borrarO.classList.remove('letraMenuHover');
      var borrarA = document.getElementById('a');
      borrarA.classList.remove('letraMenuHover');
      var borrarN = document.getElementById('n');
      borrarN.classList.remove('letraMenuHover');
      var borrarD = document.getElementById('d');
      borrarD.classList.remove('letraMenuHover');
      var borrarU = document.getElementById('u');
      borrarU.classList.remove('letraMenuHover');
    } else if (letra === "a") {
      var borrarX = document.getElementById('e');
      borrarX.classList.remove('letraMenuHover');
      var borrarX = document.getElementById('x');
      borrarX.classList.remove('letraMenuHover');
      var borrarP = document.getElementById('p');
      borrarP.classList.remove('letraMenuHover');
      var borrarL = document.getElementById('l');
      borrarL.classList.remove('letraMenuHover');
      var borrarO = document.getElementById('o');
      borrarO.classList.remove('letraMenuHover');
      var borrarR = document.getElementById('r');
      borrarR.classList.remove('letraMenuHover');
      var borrarN = document.getElementById('n');
      borrarN.classList.remove('letraMenuHover');
      var borrarD = document.getElementById('d');
      borrarD.classList.remove('letraMenuHover');
      var borrarU = document.getElementById('u');
      borrarU.classList.remove('letraMenuHover');
    } else if (letra === "n") {
      var borrarX = document.getElementById('e');
      borrarX.classList.remove('letraMenuHover');
      var borrarX = document.getElementById('x');
      borrarX.classList.remove('letraMenuHover');
      var borrarP = document.getElementById('p');
      borrarP.classList.remove('letraMenuHover');
      var borrarL = document.getElementById('l');
      borrarL.classList.remove('letraMenuHover');
      var borrarO = document.getElementById('o');
      borrarO.classList.remove('letraMenuHover');
      var borrarR = document.getElementById('r');
      borrarR.classList.remove('letraMenuHover');
      var borrarA = document.getElementById('a');
      borrarA.classList.remove('letraMenuHover');
      var borrarD = document.getElementById('d');
      borrarD.classList.remove('letraMenuHover');
      var borrarU = document.getElementById('u');
      borrarU.classList.remove('letraMenuHover');
    } else if (letra === "d") {
      var borrarX = document.getElementById('e');
      borrarX.classList.remove('letraMenuHover');
      var borrarX = document.getElementById('x');
      borrarX.classList.remove('letraMenuHover');
      var borrarP = document.getElementById('p');
      borrarP.classList.remove('letraMenuHover');
      var borrarL = document.getElementById('l');
      borrarL.classList.remove('letraMenuHover');
      var borrarO = document.getElementById('o');
      borrarO.classList.remove('letraMenuHover');
      var borrarR = document.getElementById('r');
      borrarR.classList.remove('letraMenuHover');
      var borrarA = document.getElementById('a');
      borrarA.classList.remove('letraMenuHover');
      var borrarN = document.getElementById('n');
      borrarN.classList.remove('letraMenuHover');
      var borrarU = document.getElementById('u');
      borrarU.classList.remove('letraMenuHover');
    } else if (letra === "u") {
      var borrarX = document.getElementById('e');
      borrarX.classList.remove('letraMenuHover');
      var borrarX = document.getElementById('x');
      borrarX.classList.remove('letraMenuHover');
      var borrarP = document.getElementById('p');
      borrarP.classList.remove('letraMenuHover');
      var borrarL = document.getElementById('l');
      borrarL.classList.remove('letraMenuHover');
      var borrarO = document.getElementById('o');
      borrarO.classList.remove('letraMenuHover');
      var borrarR = document.getElementById('r');
      borrarR.classList.remove('letraMenuHover');
      var borrarA = document.getElementById('a');
      borrarA.classList.remove('letraMenuHover');
      var borrarN = document.getElementById('n');
      borrarN.classList.remove('letraMenuHover');
      var borrarD = document.getElementById('d');
      borrarD.classList.remove('letraMenuHover');
    } else {
      var borrarX = document.getElementById('e');
      borrarX.classList.remove('letraMenuHover');
      var borrarX = document.getElementById('x');
      borrarX.classList.remove('letraMenuHover');
      var borrarP = document.getElementById('p');
      borrarP.classList.remove('letraMenuHover');
      var borrarL = document.getElementById('l');
      borrarL.classList.remove('letraMenuHover');
      var borrarO = document.getElementById('o');
      borrarO.classList.remove('letraMenuHover');
      var borrarR = document.getElementById('r');
      borrarR.classList.remove('letraMenuHover');
      var borrarA = document.getElementById('a');
      borrarA.classList.remove('letraMenuHover');
      var borrarN = document.getElementById('n');
      borrarN.classList.remove('letraMenuHover');
      var borrarD = document.getElementById('d');
      borrarD.classList.remove('letraMenuHover');
      var borrarU = document.getElementById('u');
      borrarU.classList.remove('letraMenuHover');
    }
  }

  hover(letra) {
    this.deleteHover(letra);

    if (letra === "e") {

      var e = document.getElementById(letra);
      e.classList.add('letraMenuHover');
    } else if (letra === "x") {

      var x = document.getElementById(letra);
      x.classList.add('letraMenuHover')
    } else if (letra === "p") {

      var p = document.getElementById(letra);
      p.classList.add('letraMenuHover')
    } else if (letra === "l") {

      var l = document.getElementById(letra);
      l.classList.add('letraMenuHover')
    } else if (letra === "o") {

      var o = document.getElementById(letra);
      o.classList.add('letraMenuHover')
    } else if (letra === "r") {

      var r = document.getElementById(letra);
      r.classList.add('letraMenuHover')
    } else if (letra === "a") {

      var a = document.getElementById(letra);
      a.classList.add('letraMenuHover')
    } else if (letra === "n") {

      var n = document.getElementById(letra);
      n.classList.add('letraMenuHover')
    } else if (letra === "d") {

      var d = document.getElementById(letra);
      d.classList.add('letraMenuHover')
    } else if (letra === "u") {

      var u = document.getElementById(letra);
      u.classList.add('letraMenuHover')
    }
  }

  clicked(letra) {
    this.hover(letra);
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
