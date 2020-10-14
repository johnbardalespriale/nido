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
      { imagen: 'assets/Img/taza.png', silabas: 1, name: 'taza' },
      { imagen: 'assets/Img/sol.png', silabas: 1, name: 'sol' },
      { imagen: 'assets/Img/pera.png', silabas: 2, name: 'pera' },
      { imagen: 'assets/Img/zapato.png', silabas: 3, name: 'zapato' },
    ];

    this.nivel2 = [
      { imagen: 'assets/Img/canasta.png', silabas: 3, name: 'canasta' },
      { imagen: 'assets/Img/falda.png', silabas: 2, name: 'falda' },
      { imagen: 'assets/Img/ventilador.png', silabas: 4, name: 'ventilador' },
      { imagen: 'assets/Img/bicicleta.png', silabas: 4, name: 'bicicleta' },
    ];

    this.nivel3 = [
      { imagen: 'assets/Img/flor.png', silabas: 1, name: 'flor' },
      { imagen: 'assets/Img/polo.png', silabas: 2, name: 'polo' },
      { imagen: 'assets/Img/camion.png', silabas: 2, name: 'camion' },
      {
        imagen: 'assets/Img/hipopotamo_2.png',
        silabas: 5,
        name: 'hipopotamo_2',
      },
    ];

    this.nivel4 = [
      { imagen: 'assets/Img/computadora.png', silabas: 5, name: 'computadora' },
      { imagen: 'assets/Img/dia.png', silabas: 1, name: 'dia' },
      { imagen: 'assets/Img/pan.png', silabas: 1, name: 'pan' },
      { imagen: 'assets/Img/tren.png', silabas: 1, name: 'tren' },
    ];

    this.nivel5 = [
      { imagen: 'assets/Img/bote.png', silabas: 2, name: 'bote' },
      { imagen: 'assets/Img/carro.png', silabas: 2, name: 'carro' },
      { imagen: 'assets/Img/caballo.png', silabas: 3, name: 'caballo' },
      { imagen: 'assets/Img/payaso.png', silabas: 3, name: 'payaso' },
    ];

    this.nivel6 = [
      { imagen: 'assets/Img/piñata.png', silabas: 3, name: 'piñata' },
      { imagen: 'assets/Img/panadero.png', silabas: 4, name: 'panadero' },
      { imagen: 'assets/Img/elefante_1.png', silabas: 4, name: 'elefante' },
      { imagen: 'assets/Img/mariposa.png', silabas: 4, name: 'mariposa' },
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
      title: '¡ Genial !',
      text: 'El número de sílabas es correcto',
    });
  }

  iniciarJuego(i, name) {
    if (name === 'taza' && i === 2) {
      this.answerCorrect();
      let objeto = document.getElementsByClassName(name);
      for (let i = 0; i < objeto.length; i++) {
        const slide = objeto[i] as HTMLElement;
        slide.style.pointerEvents = 'none';
        slide.style.opacity = '0.3';
      }
    } else if (name === 'sol' && i === 1) {
      this.answerCorrect();
      let objeto = document.getElementsByClassName(name);
      for (let i = 0; i < objeto.length; i++) {
        const slide = objeto[i] as HTMLElement;
        slide.style.pointerEvents = 'none';
        slide.style.opacity = '0.3';
      }
    } else if (name === 'pera' && i === 2) {
      this.answerCorrect();
      let objeto = document.getElementsByClassName(name);
      for (let i = 0; i < objeto.length; i++) {
        const slide = objeto[i] as HTMLElement;
        slide.style.pointerEvents = 'none';
        slide.style.opacity = '0.3';
      }
    } else if (name === 'zapato' && i === 3) {
      this.answerCorrect();
      let objeto = document.getElementsByClassName(name);
      for (let i = 0; i < objeto.length; i++) {
        const slide = objeto[i] as HTMLElement;
        slide.style.pointerEvents = 'none';
        slide.style.opacity = '0.3';
      }
    } else if (name === 'canasta' && i === 3) {
      this.answerCorrect();
      let objeto = document.getElementsByClassName(name);
      for (let i = 0; i < objeto.length; i++) {
        const slide = objeto[i] as HTMLElement;
        slide.style.pointerEvents = 'none';
        slide.style.opacity = '0.3';
      }
    } else if (name === 'falda' && i === 2) {
      this.answerCorrect();
      let objeto = document.getElementsByClassName(name);
      for (let i = 0; i < objeto.length; i++) {
        const slide = objeto[i] as HTMLElement;
        slide.style.pointerEvents = 'none';
        slide.style.opacity = '0.3';
      }
    } else if (name === 'ventilador' && i === 4) {
      this.answerCorrect();
      let objeto = document.getElementsByClassName(name);
      for (let i = 0; i < objeto.length; i++) {
        const slide = objeto[i] as HTMLElement;
        slide.style.pointerEvents = 'none';
        slide.style.opacity = '0.3';
      }
    } else if (name === 'bicicleta' && i === 4) {
      this.answerCorrect();
      let objeto = document.getElementsByClassName(name);
      for (let i = 0; i < objeto.length; i++) {
        const slide = objeto[i] as HTMLElement;
        slide.style.pointerEvents = 'none';
        slide.style.opacity = '0.3';
      }
    } else if (name === 'flor' && i === 1) {
      this.answerCorrect();
      let objeto = document.getElementsByClassName(name);
      for (let i = 0; i < objeto.length; i++) {
        const slide = objeto[i] as HTMLElement;
        slide.style.pointerEvents = 'none';
        slide.style.opacity = '0.3';
      }
    } else if (name === 'polo' && i === 2) {
      this.answerCorrect();
      let objeto = document.getElementsByClassName(name);
      for (let i = 0; i < objeto.length; i++) {
        const slide = objeto[i] as HTMLElement;
        slide.style.pointerEvents = 'none';
        slide.style.opacity = '0.3';
      }
    } else if (name === 'camion' && i === 2) {
      this.answerCorrect();
      let objeto = document.getElementsByClassName(name);
      for (let i = 0; i < objeto.length; i++) {
        const slide = objeto[i] as HTMLElement;
        slide.style.pointerEvents = 'none';
        slide.style.opacity = '0.3';
      }
    } else if (name === 'hipopotamo_2' && i === 5) {
      this.answerCorrect();
      let objeto = document.getElementsByClassName(name);
      for (let i = 0; i < objeto.length; i++) {
        const slide = objeto[i] as HTMLElement;
        slide.style.pointerEvents = 'none';
        slide.style.opacity = '0.3';
      }
    } else if (name === 'computadora' && i === 5) {
      this.answerCorrect();
      let objeto = document.getElementsByClassName(name);
      for (let i = 0; i < objeto.length; i++) {
        const slide = objeto[i] as HTMLElement;
        slide.style.pointerEvents = 'none';
        slide.style.opacity = '0.3';
      }
    } else if (name === 'dia' && i === 1) {
      this.answerCorrect();
      let objeto = document.getElementsByClassName(name);
      for (let i = 0; i < objeto.length; i++) {
        const slide = objeto[i] as HTMLElement;
        slide.style.pointerEvents = 'none';
        slide.style.opacity = '0.3';
      }
    } else if (name === 'pan' && i === 1) {
      this.answerCorrect();
      let objeto = document.getElementsByClassName(name);
      for (let i = 0; i < objeto.length; i++) {
        const slide = objeto[i] as HTMLElement;
        slide.style.pointerEvents = 'none';
        slide.style.opacity = '0.3';
      }
    } else if (name === 'tren' && i === 1) {
      this.answerCorrect();
      let objeto = document.getElementsByClassName(name);
      for (let i = 0; i < objeto.length; i++) {
        const slide = objeto[i] as HTMLElement;
        slide.style.pointerEvents = 'none';
        slide.style.opacity = '0.3';
      }
    } else if (name === 'bote' && i === 2) {
      this.answerCorrect();
      let objeto = document.getElementsByClassName(name);
      for (let i = 0; i < objeto.length; i++) {
        const slide = objeto[i] as HTMLElement;
        slide.style.pointerEvents = 'none';
        slide.style.opacity = '0.3';
      }
    } else if (name === 'carro' && i === 2) {
      this.answerCorrect();
      let objeto = document.getElementsByClassName(name);
      for (let i = 0; i < objeto.length; i++) {
        const slide = objeto[i] as HTMLElement;
        slide.style.pointerEvents = 'none';
        slide.style.opacity = '0.3';
      }
    } else if (name === 'caballo' && i === 3) {
      this.answerCorrect();
      let objeto = document.getElementsByClassName(name);
      for (let i = 0; i < objeto.length; i++) {
        const slide = objeto[i] as HTMLElement;
        slide.style.pointerEvents = 'none';
        slide.style.opacity = '0.3';
      }
    } else if (name === 'payaso' && i === 3) {
      this.answerCorrect();
      let objeto = document.getElementsByClassName(name);
      for (let i = 0; i < objeto.length; i++) {
        const slide = objeto[i] as HTMLElement;
        slide.style.pointerEvents = 'none';
        slide.style.opacity = '0.3';
      }
    } else if (name === 'piñata' && i === 3) {
      this.answerCorrect();
      let objeto = document.getElementsByClassName(name);
      for (let i = 0; i < objeto.length; i++) {
        const slide = objeto[i] as HTMLElement;
        slide.style.pointerEvents = 'none';
        slide.style.opacity = '0.3';
      }
    } else if (name === 'panadero' && i === 4) {
      this.answerCorrect();
      let objeto = document.getElementsByClassName(name);
      for (let i = 0; i < objeto.length; i++) {
        const slide = objeto[i] as HTMLElement;
        slide.style.pointerEvents = 'none';
        slide.style.opacity = '0.3';
      }
    } else if (name === 'elefante' && i === 4) {
      this.answerCorrect();
      let objeto = document.getElementsByClassName(name);
      for (let i = 0; i < objeto.length; i++) {
        const slide = objeto[i] as HTMLElement;
        slide.style.pointerEvents = 'none';
        slide.style.opacity = '0.3';
      }
    } else if (name === 'mariposa' && i === 4) {
      this.answerCorrect();
      let objeto = document.getElementsByClassName(name);
      for (let i = 0; i < objeto.length; i++) {
        const slide = objeto[i] as HTMLElement;
        slide.style.pointerEvents = 'none';
        slide.style.opacity = '0.3';
      }
    } else {
      Swal.fire({
        icon: 'error',
        text: 'Vuelve a intentarlo',
      });
    }
  }
}
