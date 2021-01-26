import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-silabas',
  templateUrl: './silabas.component.html',
  styleUrls: ['./silabas.component.sass'],
})
export class SilabasComponent implements OnInit {
  nivel1: any[];
  nivel2: any[];
  nivel3: any[];
  nivel4: any[];
  nivel5: any[];
  nivel6: any[];
  numeros: any[];
  cont: number;
  nivel: String;
  isDisabled = false;

  constructor() {}

  ngOnInit(): void {
    this.cont = 0;

    this.numeros = [
      { id: 0, numero: 1 },
      { id: 1, numero: 2 },
      { id: 2, numero: 3 },
      { id: 3, numero: 4 },
      { id: 4, numero: 5 },
    ];

    this.nivel1 = [
      { imagen: 'assets/Img/taza.png', silabas: 2, name: 'Taza', descompongo: 'ta-za' },
      { imagen: 'assets/Img/sol.png', silabas: 1, name: 'Sol', descompongo: 'sol' },
      { imagen: 'assets/Img/pera.png', silabas: 2, name: 'Pera', descompongo: 'pe-ra' },
      { imagen: 'assets/Img/zapato.png', silabas: 3, name: 'Zapato', descompongo: 'za-pa-to' },
    ];

    this.nivel2 = [
      { imagen: 'assets/Img/canasta.png', silabas: 3, name: 'Canasta', descompongo: 'ca-nas-ta' },
      { imagen: 'assets/Img/falda.png', silabas: 2, name: 'Falda', descompongo: 'fal-da' },
      { imagen: 'assets/Img/ventilador.png', silabas: 4, name: 'Ventilador', descompongo: 'ven-ti-la-dor' },
      { imagen: 'assets/Img/bicicleta.png', silabas: 4, name: 'Bicicleta', descompongo: 'bi-ci-cle-ta' },
    ];

    this.nivel3 = [
      { imagen: 'assets/Img/flor.png', silabas: 1, name: 'Flor', descompongo: 'flor' },
      { imagen: 'assets/Img/polo.png', silabas: 2, name: 'Polo', descompongo: 'po-lo' },
      { imagen: 'assets/Img/camion.png', silabas: 2, name: 'Camion', descompongo: 'ca-mion' },
      {
        imagen: 'assets/Img/hipopotamo_2.png',
        silabas: 5,
        name: 'Hipopotamo',
        descompongo: 'hi-po-po-ta-mo'
      },
    ];

    this.nivel4 = [
      { imagen: 'assets/Img/computadora.png', silabas: 5, name: 'Computadora', descompongo: 'com-pu-ta-do-ra' },
      { imagen: 'assets/Img/miel.png', silabas: 1, name: 'Miel', descompongo: 'miel' },
      { imagen: 'assets/Img/pan.png', silabas: 1, name: 'Pan', descompongo: 'pan' },
      { imagen: 'assets/Img/tren.png', silabas: 1, name: 'Tren', descompongo: 'tren' },
    ];

    this.nivel5 = [
      { imagen: 'assets/Img/bote.png', silabas: 2, name: 'Bote', descompongo: 'bo-te' },
      { imagen: 'assets/Img/carro.png', silabas: 2, name: 'Carro', descompongo: 'ca-rro' },
      { imagen: 'assets/Img/caballo.png', silabas: 3, name: 'Caballo', descompongo: 'ca-ba-llo' },
      { imagen: 'assets/Img/payaso.png', silabas: 3, name: 'Payaso', descompongo: 'pa-ya-so' },
    ];

    this.nivel6 = [
      { imagen: 'assets/Img/piñata.png', silabas: 3, name: 'Piñata', descompongo: 'pi-ña-ta' },
      { imagen: 'assets/Img/panadero.png', silabas: 4, name: 'Panadero', descompongo: 'pa-na-de-ro' },
      { imagen: 'assets/Img/elefante_1.png', silabas: 4, name: 'Elefante', descompongo: 'e-le-fan-te' },
      { imagen: 'assets/Img/mariposa.png', silabas: 4, name: 'Mariposa', descompongo: 'ma-ri-po-sa' },
    ];

    this.nivel1.sort(function () {
      return Math.random() - 0.5;
    });
    this.nivel2.sort(function () {
      return Math.random() - 0.5;
    });
    this.nivel3.sort(function () {
      return Math.random() - 0.5;
    });
    this.nivel4.sort(function () {
      return Math.random() - 0.5;
    });
    this.nivel5.sort(function () {
      return Math.random() - 0.5;
    });
    this.nivel6.sort(function () {
      return Math.random() - 0.5;
    });
  }

  answerCorrect() {
    Swal.fire({
      html: "<h1 style='color:#1db31d;'>¡GENIAL!</h1> El número de sílabas es correcto "
    });

    this.cont++;

    if (this.cont === 24){
      Swal.fire({
        html: "<h1 style='color:#1db31d;'>¡LO LOGRASTE!</h1> Juego terminado "
      });
  
    }
  }


  iniciarJuego(i, name, descompongo) {
    if (name === 'Taza' && i === 2) {
      this.answerCorrect();
      let objeto = document.getElementsByClassName(name);
      for (let i = 0; i < objeto.length; i++) {
        const slide = objeto[i] as HTMLElement;
        slide.style.pointerEvents = 'none';
        slide.style.opacity = '0.3';
      }
    } else if (name === 'Sol' && i === 1) {
      this.answerCorrect();
      let objeto = document.getElementsByClassName(name);
      for (let i = 0; i < objeto.length; i++) {
        const slide = objeto[i] as HTMLElement;
        slide.style.pointerEvents = 'none';
        slide.style.opacity = '0.3';
      }
    } else if (name === 'Pera' && i === 2) {
      this.answerCorrect();
      let objeto = document.getElementsByClassName(name);
      for (let i = 0; i < objeto.length; i++) {
        const slide = objeto[i] as HTMLElement;
        slide.style.pointerEvents = 'none';
        slide.style.opacity = '0.3';
      }
    } else if (name === 'Zapato' && i === 3) {
      this.answerCorrect();
      let objeto = document.getElementsByClassName(name);
      for (let i = 0; i < objeto.length; i++) {
        const slide = objeto[i] as HTMLElement;
        slide.style.pointerEvents = 'none';
        slide.style.opacity = '0.3';
      }
    } else if (name === 'Canasta' && i === 3) {
      this.answerCorrect();
      let objeto = document.getElementsByClassName(name);
      for (let i = 0; i < objeto.length; i++) {
        const slide = objeto[i] as HTMLElement;
        slide.style.pointerEvents = 'none';
        slide.style.opacity = '0.3';
      }
    } else if (name === 'Falda' && i === 2) {
      this.answerCorrect();
      let objeto = document.getElementsByClassName(name);
      for (let i = 0; i < objeto.length; i++) {
        const slide = objeto[i] as HTMLElement;
        slide.style.pointerEvents = 'none';
        slide.style.opacity = '0.3';
      }
    } else if (name === 'Ventilador' && i === 4) {
      this.answerCorrect();
      let objeto = document.getElementsByClassName(name);
      for (let i = 0; i < objeto.length; i++) {
        const slide = objeto[i] as HTMLElement;
        slide.style.pointerEvents = 'none';
        slide.style.opacity = '0.3';
      }
    } else if (name === 'Bicicleta' && i === 4) {
      this.answerCorrect();
      let objeto = document.getElementsByClassName(name);
      for (let i = 0; i < objeto.length; i++) {
        const slide = objeto[i] as HTMLElement;
        slide.style.pointerEvents = 'none';
        slide.style.opacity = '0.3';
      }
    } else if (name === 'Flor' && i === 1) {
      this.answerCorrect();
      let objeto = document.getElementsByClassName(name);
      for (let i = 0; i < objeto.length; i++) {
        const slide = objeto[i] as HTMLElement;
        slide.style.pointerEvents = 'none';
        slide.style.opacity = '0.3';
      }
    } else if (name === 'Polo' && i === 2) {
      this.answerCorrect();
      let objeto = document.getElementsByClassName(name);
      for (let i = 0; i < objeto.length; i++) {
        const slide = objeto[i] as HTMLElement;
        slide.style.pointerEvents = 'none';
        slide.style.opacity = '0.3';
      }
    } else if (name === 'Camion' && i === 2) {
      this.answerCorrect();
      let objeto = document.getElementsByClassName(name);
      for (let i = 0; i < objeto.length; i++) {
        const slide = objeto[i] as HTMLElement;
        slide.style.pointerEvents = 'none';
        slide.style.opacity = '0.3';
      }
    } else if (name === 'Hipopotamo' && i === 5) {
      this.answerCorrect();
      let objeto = document.getElementsByClassName(name);
      for (let i = 0; i < objeto.length; i++) {
        const slide = objeto[i] as HTMLElement;
        slide.style.pointerEvents = 'none';
        slide.style.opacity = '0.3';
      }
    } else if (name === 'Computadora' && i === 5) {
      this.answerCorrect();
      let objeto = document.getElementsByClassName(name);
      for (let i = 0; i < objeto.length; i++) {
        const slide = objeto[i] as HTMLElement;
        slide.style.pointerEvents = 'none';
        slide.style.opacity = '0.3';
      }
    } else if (name === 'Miel' && i === 1) {
      this.answerCorrect();
      let objeto = document.getElementsByClassName(name);
      for (let i = 0; i < objeto.length; i++) {
        const slide = objeto[i] as HTMLElement;
        slide.style.pointerEvents = 'none';
        slide.style.opacity = '0.3';
      }
    } else if (name === 'Pan' && i === 1) {
      this.answerCorrect();
      let objeto = document.getElementsByClassName(name);
      for (let i = 0; i < objeto.length; i++) {
        const slide = objeto[i] as HTMLElement;
        slide.style.pointerEvents = 'none';
        slide.style.opacity = '0.3';
      }
    } else if (name === 'Tren' && i === 1) {
      this.answerCorrect();
      let objeto = document.getElementsByClassName(name);
      for (let i = 0; i < objeto.length; i++) {
        const slide = objeto[i] as HTMLElement;
        slide.style.pointerEvents = 'none';
        slide.style.opacity = '0.3';
      }
    } else if (name === 'Bote' && i === 2) {
      this.answerCorrect();
      let objeto = document.getElementsByClassName(name);
      for (let i = 0; i < objeto.length; i++) {
        const slide = objeto[i] as HTMLElement;
        slide.style.pointerEvents = 'none';
        slide.style.opacity = '0.3';
      }
    } else if (name === 'Carro' && i === 2) {
      this.answerCorrect();
      let objeto = document.getElementsByClassName(name);
      for (let i = 0; i < objeto.length; i++) {
        const slide = objeto[i] as HTMLElement;
        slide.style.pointerEvents = 'none';
        slide.style.opacity = '0.3';
      }
    } else if (name === 'Caballo' && i === 3) {
      this.answerCorrect();
      let objeto = document.getElementsByClassName(name);
      for (let i = 0; i < objeto.length; i++) {
        const slide = objeto[i] as HTMLElement;
        slide.style.pointerEvents = 'none';
        slide.style.opacity = '0.3';
      }
    } else if (name === 'Payaso' && i === 3) {
      this.answerCorrect();
      let objeto = document.getElementsByClassName(name);
      for (let i = 0; i < objeto.length; i++) {
        const slide = objeto[i] as HTMLElement;
        slide.style.pointerEvents = 'none';
        slide.style.opacity = '0.3';
      }
    } else if (name === 'Piñata' && i === 3) {
      this.answerCorrect();
      let objeto = document.getElementsByClassName(name);
      for (let i = 0; i < objeto.length; i++) {
        const slide = objeto[i] as HTMLElement;
        slide.style.pointerEvents = 'none';
        slide.style.opacity = '0.3';
      }
    } else if (name === 'Panadero' && i === 4) {
      this.answerCorrect();
      let objeto = document.getElementsByClassName(name);
      for (let i = 0; i < objeto.length; i++) {
        const slide = objeto[i] as HTMLElement;
        slide.style.pointerEvents = 'none';
        slide.style.opacity = '0.3';
      }
    } else if (name === 'Elefante' && i === 4) {
      this.answerCorrect();
      let objeto = document.getElementsByClassName(name);
      for (let i = 0; i < objeto.length; i++) {
        const slide = objeto[i] as HTMLElement;
        slide.style.pointerEvents = 'none';
        slide.style.opacity = '0.3';
      }
    } else if (name === 'Mariposa' && i === 4) {
      this.answerCorrect();
      let objeto = document.getElementsByClassName(name);
      for (let i = 0; i < objeto.length; i++) {
        const slide = objeto[i] as HTMLElement;
        slide.style.pointerEvents = 'none';
        slide.style.opacity = '0.3';
      }
    } else {
      Swal.fire({
        html: "<img src='assets/Img/carita_triste.jpg' style='width:100px;'> <p style='margin: 5px;'>La palabra es: </p> <b>"+ descompongo +"</b> <p style='margin: 5px;'>Vuelve a intentarlo</p>",
      });
    }
  }
}
