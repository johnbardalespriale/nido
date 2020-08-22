import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-trazos',
  templateUrl: './trazos.component.html',
  styleUrls: ['./trazos.component.sass'],
})
export class TrazosComponent implements OnInit {
  constructor() {}

  //imagen: assets/Img/perro_trazo.png

  javascript() {
    var c = <HTMLCanvasElement>document.getElementById('myCanvas');
    var ctx = c.getContext('2d');
    var img = <HTMLCanvasElement>document.getElementById('scream');
    var habilitar = 45;
    var cont = 0;
    ctx.drawImage(img, 10, 10);

    var elem = <HTMLCanvasElement>document.getElementById('myCanvas'),
      elemLeft = elem.offsetLeft,
      elemTop = elem.offsetTop,
      context = elem.getContext('2d'),
      elements = [];

    // Add event listener for `click` events.
    elem.addEventListener(
      'mousedown',
      function (event) {
        elements.forEach(function (element) {
          if (element.number === 0) {
            habilitar = 0;
            //alert('clicked an element');
          } else if (cont === 1 && element.number === 1) {
            habilitar = 1;
          } else if (cont === 2 && element.number === 2) {
            habilitar = 2;
          } else if (cont === 3 && element.number === 4) {
            habilitar = 3;
          } else if (cont === 4 && element.number === 5) {
            habilitar = 4;
          } else if (cont === 5 && element.number === 6) {
            habilitar = 5;
          } else if (cont === 6 && element.number === 7) {
            habilitar = 6;
          } else if (cont === 7 && element.number === 8) {
            habilitar = 7;
          } else if (cont === 8 && element.number === 9) {
            habilitar = 8;
          } else if (cont === 9 && element.number === 10) {
            habilitar = 9;
          } else if (cont === 10 && element.number === 11) {
            habilitar = 10;
          } else if (cont === 11 && element.number === 12) {
            habilitar = 11;
          } else if (cont === 12 && element.number === 13) {
            habilitar = 12;
          } else if (cont === 13 && element.number === 14) {
            habilitar = 13;
          } else if (cont === 14 && element.number === 15) {
            habilitar = 14;
          } else if (cont === 15 && element.number === 16) {
            habilitar = 15;
          } else if (cont === 16 && element.number === 17) {
            habilitar = 16;
          } else if (cont === 17 && element.number === 18) {
            habilitar = 17;
          }
        });
      },
      false
    );

    elem.addEventListener(
      'mouseup',
      function (event) {
        var x = event.pageX - elemLeft,
          y = event.pageY - elemTop;

        elements.forEach(function (element) {
          if (habilitar === 0 && element.number === 1) {
            cont = 1;
            ctx.moveTo(23, 80);
            ctx.lineTo(17, 110);
            ctx.lineTo(17, 125);
            ctx.stroke();
          } else if (habilitar === 1 && element.number === 2) {
            //alert('clicked an element');
            cont = 2;
            ctx.moveTo(23, 80);
            ctx.lineTo(17, 110);
            ctx.lineTo(17, 125);
            ctx.lineTo(17, 124);
            ctx.lineTo(35, 145);
            ctx.stroke();
          } else if (habilitar === 2 && element.number === 4) {
            //alert('clicked an element');
            cont = 3;
            ctx.moveTo(23, 80);
            ctx.lineTo(17, 110);
            ctx.lineTo(17, 125);
            ctx.lineTo(17, 124);
            ctx.lineTo(35, 145);
            ctx.lineTo(35, 165);
            ctx.stroke();
          } else if (habilitar === 3 && element.number === 5) {
            //alert('clicked an element');
            cont = 4;
            ctx.moveTo(23, 80);
            ctx.lineTo(17, 110);
            ctx.lineTo(17, 125);
            ctx.lineTo(17, 124);
            ctx.lineTo(35, 145);
            ctx.lineTo(35, 165);
            ctx.lineTo(50, 200);
            ctx.stroke();
          } else if (habilitar === 4 && element.number === 6) {
            //alert('clicked an element');
            cont = 5;
            ctx.moveTo(23, 80);
            ctx.lineTo(17, 110);
            ctx.lineTo(17, 125);
            ctx.lineTo(17, 124);
            ctx.lineTo(35, 145);
            ctx.lineTo(35, 165);
            ctx.lineTo(50, 200);
            ctx.lineTo(50, 218);
            ctx.stroke();
          } else if (habilitar === 5 && element.number === 7) {
            //alert('clicked an element');
            cont = 6;
            ctx.moveTo(23, 80);
            ctx.lineTo(17, 110);
            ctx.lineTo(17, 125);
            ctx.lineTo(17, 124);
            ctx.lineTo(35, 145);
            ctx.lineTo(35, 165);
            ctx.lineTo(50, 200);
            ctx.lineTo(50, 218);
            ctx.lineTo(110, 210);
            ctx.stroke();
          } else if (habilitar === 6 && element.number === 8) {
            //alert('clicked an element');
            cont = 7;
            ctx.moveTo(23, 80);
            ctx.lineTo(17, 110);
            ctx.lineTo(17, 125);
            ctx.lineTo(17, 124);
            ctx.lineTo(35, 145);
            ctx.lineTo(35, 165);
            ctx.lineTo(50, 200);
            ctx.lineTo(50, 218);
            ctx.lineTo(110, 210);
            ctx.lineTo(110, 220);
            ctx.stroke();
          } else if (habilitar === 7 && element.number === 9) {
            //alert('clicked an element');
            cont = 8;
            ctx.moveTo(23, 80);
            ctx.lineTo(17, 110);
            ctx.lineTo(17, 125);
            ctx.lineTo(17, 124);
            ctx.lineTo(35, 145);
            ctx.lineTo(35, 165);
            ctx.lineTo(50, 200);
            ctx.lineTo(50, 218);
            ctx.lineTo(110, 210);
            ctx.lineTo(110, 220);
            ctx.lineTo(185, 210);
            ctx.stroke();
          } else if (habilitar === 8 && element.number === 10) {
            //alert('clicked an element');
            cont = 9;
            ctx.moveTo(23, 80);
            ctx.lineTo(17, 110);
            ctx.lineTo(17, 125);
            ctx.lineTo(17, 124);
            ctx.lineTo(35, 145);
            ctx.lineTo(35, 165);
            ctx.lineTo(50, 200);
            ctx.lineTo(50, 218);
            ctx.lineTo(110, 210);
            ctx.lineTo(110, 220);
            ctx.lineTo(185, 210);
            ctx.lineTo(170, 180);
            ctx.stroke();
          } else if (habilitar === 9 && element.number === 11) {
            //alert('clicked an element');
            cont = 10;
            ctx.moveTo(23, 80);
            ctx.lineTo(17, 110);
            ctx.lineTo(17, 125);
            ctx.lineTo(17, 124);
            ctx.lineTo(35, 145);
            ctx.lineTo(35, 165);
            ctx.lineTo(50, 200);
            ctx.lineTo(50, 218);
            ctx.lineTo(110, 210);
            ctx.lineTo(110, 220);
            ctx.lineTo(185, 210);
            ctx.lineTo(170, 180);
            ctx.lineTo(165, 140);
            ctx.stroke();
          } else if (habilitar === 10 && element.number === 12) {
            //alert('clicked an element');
            cont = 11;
            ctx.moveTo(23, 80);
            ctx.lineTo(17, 110);
            ctx.lineTo(17, 125);
            ctx.lineTo(17, 124);
            ctx.lineTo(35, 145);
            ctx.lineTo(35, 165);
            ctx.lineTo(50, 200);
            ctx.lineTo(50, 218);
            ctx.lineTo(110, 210);
            ctx.lineTo(110, 220);
            ctx.lineTo(185, 210);
            ctx.lineTo(170, 180);
            ctx.lineTo(165, 140);
            ctx.lineTo(200, 145);
            ctx.stroke();
          } else if (habilitar === 11 && element.number === 13) {
            //alert('clicked an element');
            cont = 12;
            ctx.moveTo(23, 80);
            ctx.lineTo(17, 110);
            ctx.lineTo(17, 125);
            ctx.lineTo(17, 124);
            ctx.lineTo(35, 145);
            ctx.lineTo(35, 165);
            ctx.lineTo(50, 200);
            ctx.lineTo(50, 218);
            ctx.lineTo(110, 210);
            ctx.lineTo(110, 220);
            ctx.lineTo(185, 210);
            ctx.lineTo(170, 180);
            ctx.lineTo(165, 140);
            ctx.lineTo(200, 145);
            ctx.lineTo(230, 100);
            ctx.stroke();
          } else if (habilitar === 12 && element.number === 14) {
            //alert('clicked an element');
            cont = 13;
            ctx.moveTo(23, 80);
            ctx.lineTo(17, 110);
            ctx.lineTo(17, 125);
            ctx.lineTo(17, 124);
            ctx.lineTo(35, 145);
            ctx.lineTo(35, 165);
            ctx.lineTo(50, 200);
            ctx.lineTo(50, 218);
            ctx.lineTo(110, 210);
            ctx.lineTo(110, 220);
            ctx.lineTo(185, 210);
            ctx.lineTo(170, 180);
            ctx.lineTo(165, 140);
            ctx.lineTo(200, 145);
            ctx.lineTo(230, 100);
            ctx.lineTo(200, 40);
            ctx.stroke();
          } else if (habilitar === 13 && element.number === 15) {
            //alert('clicked an element');
            cont = 14;
            ctx.moveTo(23, 80);
            ctx.lineTo(17, 110);
            ctx.lineTo(17, 125);
            ctx.lineTo(17, 124);
            ctx.lineTo(35, 145);
            ctx.lineTo(35, 165);
            ctx.lineTo(50, 200);
            ctx.lineTo(50, 218);
            ctx.lineTo(110, 210);
            ctx.lineTo(110, 220);
            ctx.lineTo(185, 210);
            ctx.lineTo(170, 180);
            ctx.lineTo(165, 140);
            ctx.lineTo(200, 145);
            ctx.lineTo(230, 100);
            ctx.lineTo(200, 40);
            ctx.lineTo(130, 18);
            ctx.stroke();
          } else if (habilitar === 14 && element.number === 16) {
            //alert('clicked an element');
            cont = 15;
            ctx.moveTo(23, 80);
            ctx.lineTo(17, 110);
            ctx.lineTo(17, 125);
            ctx.lineTo(17, 124);
            ctx.lineTo(35, 145);
            ctx.lineTo(35, 165);
            ctx.lineTo(50, 200);
            ctx.lineTo(50, 218);
            ctx.lineTo(110, 210);
            ctx.lineTo(110, 220);
            ctx.lineTo(185, 210);
            ctx.lineTo(170, 180);
            ctx.lineTo(165, 140);
            ctx.lineTo(200, 145);
            ctx.lineTo(230, 100);
            ctx.lineTo(200, 40);
            ctx.lineTo(130, 18);
            ctx.lineTo(75, 60);
            ctx.stroke();
          } else if (habilitar === 15 && element.number === 17) {
            //alert('clicked an element');
            cont = 16;
            ctx.moveTo(23, 80);
            ctx.lineTo(17, 110);
            ctx.lineTo(17, 125);
            ctx.lineTo(17, 124);
            ctx.lineTo(35, 145);
            ctx.lineTo(35, 165);
            ctx.lineTo(50, 200);
            ctx.lineTo(50, 218);
            ctx.lineTo(110, 210);
            ctx.lineTo(110, 220);
            ctx.lineTo(185, 210);
            ctx.lineTo(170, 180);
            ctx.lineTo(165, 140);
            ctx.lineTo(200, 145);
            ctx.lineTo(230, 100);
            ctx.lineTo(200, 40);
            ctx.lineTo(130, 18);
            ctx.lineTo(75, 60);
            ctx.lineTo(80, 110);
            ctx.stroke();
          } else if (habilitar === 16 && element.number === 18) {
            //alert('clicked an element');
            cont = 17;
            ctx.moveTo(23, 80);
            ctx.lineTo(17, 110);
            ctx.lineTo(17, 125);
            ctx.lineTo(17, 124);
            ctx.lineTo(35, 145);
            ctx.lineTo(35, 165);
            ctx.lineTo(50, 200);
            ctx.lineTo(50, 218);
            ctx.lineTo(110, 210);
            ctx.lineTo(110, 220);
            ctx.lineTo(185, 210);
            ctx.lineTo(170, 180);
            ctx.lineTo(165, 140);
            ctx.lineTo(200, 145);
            ctx.lineTo(230, 100);
            ctx.lineTo(200, 40);
            ctx.lineTo(130, 18);
            ctx.lineTo(75, 60);
            ctx.lineTo(80, 110);
            ctx.lineTo(40, 110);
            ctx.lineTo(20, 80);
            ctx.stroke();

            var dog = document.getElementById('dog');
            dog.style.display = 'inherit';

            var canva = document.getElementById('myCanvas');
            canva.style.display = 'none';

            setTimeout(() => {
              alert('¡Lo lograste, descubriste la figura!');
            }, 600);
          }
        });
      },
      false
    );

    // Add element.
    elements.push(
      {
        colour: 'red',
        number: 0,
        width: 10,
        height: 10,
        top: 80,
        left: 20,
      },
      {
        colour: 'blue',
        number: 1,
        width: 10,
        height: 10,
        top: 120,
        left: 12,
      },
      {
        colour: '#05EFFF',
        number: 2,
        width: 10,
        height: 10,
        top: 140,
        left: 30,
      },
      {
        colour: '#05EFFF',
        number: 3,
        width: 10,
        height: 10,
        top: 140,
        left: 30,
      },
      {
        colour: '#05EFFF',
        number: 4,
        width: 10,
        height: 10,
        top: 160,
        left: 30,
      },
      {
        colour: '#05EFFF',
        number: 5,
        width: 10,
        height: 10,
        top: 190,
        left: 45,
      },

      {
        colour: '#05EFFF',
        number: 6,
        width: 10,
        height: 10,
        top: 210,
        left: 45,
      },
      {
        colour: '#05EFFF',
        number: 7,
        width: 8,
        height: 8,
        top: 204,
        left: 100,
      },
      {
        colour: '#05EFFF',
        number: 8,
        width: 10,
        height: 10,
        top: 218,
        left: 110,
      },
      {
        colour: '#05EFFF',
        number: 9,
        width: 10,
        height: 10,
        top: 200,
        left: 180,
      },

      {
        colour: '#05EFFF',
        number: 10,
        width: 10,
        height: 10,
        top: 180,
        left: 170,
      },
      {
        colour: '#05EFFF',
        number: 11,
        width: 10,
        height: 10,
        top: 135,
        left: 160,
      },
      {
        colour: '#05EFFF',
        number: 12,
        width: 10,
        height: 10,
        top: 140,
        left: 200,
      },
      {
        colour: '#05EFFF',
        number: 13,
        width: 10,
        height: 10,
        top: 95,
        left: 224,
      },
      {
        colour: '#05EFFF',
        number: 14,
        width: 10,
        height: 10,
        top: 35,
        left: 195,
      },
      {
        colour: '#05EFFF',
        number: 15,
        width: 10,
        height: 10,
        top: 15,
        left: 125,
      },
      {
        colour: '#05EFFF',
        number: 16,
        width: 10,
        height: 10,
        top: 55,
        left: 68,
      },
      {
        colour: '#05EFFF',
        number: 17,
        width: 10,
        height: 10,
        top: 105,
        left: 74,
      },
      {
        colour: '#05EFFF',
        number: 18,
        width: 10,
        height: 10,
        top: 105,
        left: 40,
      }
    );

    // Render elements.
    elements.forEach(function (element) {
      context.fillStyle = element.colour;
      context.fillRect(
        element.left,
        element.top,
        element.width,
        element.height
      );
    });
  }

  ngOnInit(): void {
    this.javascript();
  }
}
