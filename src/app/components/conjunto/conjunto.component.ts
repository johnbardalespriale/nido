import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
} from '@angular/cdk/drag-drop';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-conjunto',
  templateUrl: './conjunto.component.html',
  styleUrls: ['./conjunto.component.sass'],
})
export class ConjuntoComponent implements OnInit {
  nivels: any[];
  selectedNivel: string;
  nivel1: any[];
  nivel2: any[];
  nivel3: any[];
  caja_amarilla = [];
  caja_verde = [];
  caja_naranja = [];
  caja_morado = [];
  caja_marron = [];
  caja_azul = [];
  caja_rojo = [];
  cont: number;
  winner: number;

  constructor() {}

  ngOnInit(): void {
    this.winner = 0;
    this.selectedNivel = '';

    this.nivels = [
      { nivel: 'Nivel 1', selected: false },
      { nivel: 'Nivel 2', selected: false },
      { nivel: 'Nivel 3', selected: false },
    ];

    this.nivel1 = [
      { imagen: 'assets/Img/fresa.png', name: 'rojo' },
      { imagen: 'assets/Img/manzana.png', name: 'rojo' },
      { imagen: 'assets/Img/naranja.png', name: 'naranja' },
      { imagen: 'assets/Img/piña.png', name: 'amarillo' },
      { imagen: 'assets/Img/platano.png', name: 'amarillo' },
      { imagen: 'assets/Img/zanahoria.png', name: 'naranja' },
      { imagen: 'assets/Img/bufanda.png', name: 'celeste' },
      { imagen: 'assets/Img/corbata_2.png', name: 'naranja' },
      { imagen: 'assets/Img/gorra.png', name: 'naranja' },
      { imagen: 'assets/Img/gorrito.png', name: 'celeste' },
      { imagen: 'assets/Img/polo.png', name: 'celeste' },
      { imagen: 'assets/Img/zapato.png', name: 'celeste' },
    ];

    this.nivel2 = [
      { imagen: 'assets/Img/sandia.png', name: 'verde' },
      { imagen: 'assets/Img/palta.png', name: 'verde' },
      { imagen: 'assets/Img/pera_2.png', name: 'verde' },
      { imagen: 'assets/Img/correa.png', name: 'marron' },
      { imagen: 'assets/Img/lentes.png', name: 'marron' },
      { imagen: 'assets/Img/pantalon.png', name: 'marron' },
      { imagen: 'assets/Img/falda.png', name: 'morado' },
      { imagen: 'assets/Img/gorrito.png', name: 'celeste' },
      { imagen: 'assets/Img/polo.png', name: 'celeste' },
      { imagen: 'assets/Img/zapato.png', name: 'celeste' },
      { imagen: 'assets/Img/bufanda.png', name: 'celeste' },
    ];

    this.nivel3 = [
      { imagen: 'assets/Img/sandia.png', name: 'verde' },
      { imagen: 'assets/Img/fresa.png', name: 'rojo' },
      { imagen: 'assets/Img/manzana.png', name: 'rojo' },
      { imagen: 'assets/Img/naranja.png', name: 'naranja' },
      { imagen: 'assets/Img/palta.png', name: 'verde' },
      { imagen: 'assets/Img/pera_2.png', name: 'verde' },
      { imagen: 'assets/Img/piña.png', name: 'amarillo' },
      { imagen: 'assets/Img/platano.png', name: 'amarillo' },
      { imagen: 'assets/Img/zanahoria.png', name: 'naranja' },
      { imagen: 'assets/Img/bufanda.png', name: 'celeste' },
      { imagen: 'assets/Img/corbata_2.png', name: 'naranja' },
      { imagen: 'assets/Img/correa.png', name: 'marron' },
      { imagen: 'assets/Img/gorra.png', name: 'naranja' },
      { imagen: 'assets/Img/gorrito.png', name: 'celeste' },
      { imagen: 'assets/Img/lentes.png', name: 'marron' },
      { imagen: 'assets/Img/pantalon.png', name: 'marron' },
      { imagen: 'assets/Img/polo.png', name: 'celeste' },
      { imagen: 'assets/Img/zapato.png', name: 'celeste' },
    ];

    this.cont = 0;
  }

  resetear() {
    this.winner = 0;

    if (this.selectedNivel === 'Nivel 1') {
      this.nivel1 = [
        { imagen: 'assets/Img/fresa.png', name: 'rojo' },
        { imagen: 'assets/Img/manzana.png', name: 'rojo' },
        { imagen: 'assets/Img/piña.png', name: 'amarillo' },
        { imagen: 'assets/Img/platano.png', name: 'amarillo' },
        { imagen: 'assets/Img/zanahoria.png', name: 'naranja' },
        { imagen: 'assets/Img/bufanda.png', name: 'celeste' },
        { imagen: 'assets/Img/corbata_2.png', name: 'naranja' },
        { imagen: 'assets/Img/gorra.png', name: 'naranja' },
        { imagen: 'assets/Img/gorrito.png', name: 'celeste' },
        { imagen: 'assets/Img/polo.png', name: 'celeste' },
        { imagen: 'assets/Img/zapato.png', name: 'celeste' },
      ];

      setTimeout(() => {
        var objects = document.getElementById('objects');
        objects.style.opacity = '1';
        objects.style.pointerEvents = 'inherit';
      }, 500);
      this.nivel1.sort(function () { return Math.random() - 0.5;});
      
    } else if (this.selectedNivel === 'Nivel 2') {
      this.nivel2 = [
        { imagen: 'assets/Img/sandia.png', name: 'verde' },
        { imagen: 'assets/Img/palta.png', name: 'verde' },
        { imagen: 'assets/Img/pera_2.png', name: 'verde' },
        { imagen: 'assets/Img/correa.png', name: 'marron' },
        { imagen: 'assets/Img/lentes.png', name: 'marron' },
        { imagen: 'assets/Img/pantalon.png', name: 'marron' },
        { imagen: 'assets/Img/falda.png', name: 'morado' },
        { imagen: 'assets/Img/gorrito.png', name: 'celeste' },
        { imagen: 'assets/Img/polo.png', name: 'celeste' },
        { imagen: 'assets/Img/zapato.png', name: 'celeste' },
        { imagen: 'assets/Img/bufanda.png', name: 'celeste' },
      ];

      setTimeout(() => {
        var objects = document.getElementById('objects');
        objects.style.opacity = '1';
        objects.style.pointerEvents = 'inherit';
      }, 500);
      this.nivel2.sort(function () { return Math.random() - 0.5;});

    } else if (this.selectedNivel === 'Nivel 3') {
      this.nivel3 = [
        { imagen: 'assets/Img/sandia.png', name: 'verde' },
        { imagen: 'assets/Img/fresa.png', name: 'rojo' },
        { imagen: 'assets/Img/manzana.png', name: 'rojo' },
        { imagen: 'assets/Img/naranja.png', name: 'naranja' },
        { imagen: 'assets/Img/palta.png', name: 'verde' },
        { imagen: 'assets/Img/pera_2.png', name: 'verde' },
        { imagen: 'assets/Img/piña.png', name: 'amarillo' },
        { imagen: 'assets/Img/platano.png', name: 'amarillo' },
        { imagen: 'assets/Img/zanahoria.png', name: 'naranja' },
        { imagen: 'assets/Img/bufanda.png', name: 'celeste' },
        { imagen: 'assets/Img/corbata_2.png', name: 'naranja' },
        { imagen: 'assets/Img/correa.png', name: 'marron' },
        { imagen: 'assets/Img/gorra.png', name: 'naranja' },
        { imagen: 'assets/Img/gorrito.png', name: 'celeste' },
        { imagen: 'assets/Img/lentes.png', name: 'marron' },
        { imagen: 'assets/Img/pantalon.png', name: 'marron' },
        { imagen: 'assets/Img/polo.png', name: 'celeste' },
        { imagen: 'assets/Img/zapato.png', name: 'celeste' },
      ];

      setTimeout(() => {
        var objects = document.getElementById('objects');
        objects.style.opacity = '1';
        objects.style.pointerEvents = 'inherit';
      }, 500);
      this.nivel3.sort(function () { return Math.random() - 0.5;});
    }
  }

  dropTotal(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  dropAmarillo(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      if (
        this.nivel1.length === 0 ||
        this.nivel2.length === 0 ||
        this.nivel3.length === 0
      ) {
        Swal.fire({
          html:
            "<h1 style='color:#1db31d;'>¡GANASTE!</h1> <br> Identificaste el color de los objetos correctamente",
        });

        this.winner = 1;

        var objects = document.getElementById('objects');
        objects.style.opacity = '0.3';
        objects.style.pointerEvents = 'none';
      }
    }
  }

  dropVerde(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      if (
        this.nivel1.length === 0 ||
        this.nivel2.length === 0 ||
        this.nivel3.length === 0
      ) {
        Swal.fire({
          html:
            "<h1 style='color:#1db31d;'>¡GANASTE!</h1> Identificaste el color de los objetos correctamente",
        });

        this.winner = 1;

        var objects = document.getElementById('objects');
        objects.style.opacity = '0.3';
        objects.style.pointerEvents = 'none';
      }
    }
  }

  dropNaranja(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      if (
        this.nivel1.length === 0 ||
        this.nivel2.length === 0 ||
        this.nivel3.length === 0
      ) {
        Swal.fire({
          html:
            "<h1 style='color:#1db31d;'>¡GANASTE!</h1> Identificaste el color de los objetos correctamente",
        });

        this.winner = 1;

        var objects = document.getElementById('objects');
        objects.style.opacity = '0.3';
        objects.style.pointerEvents = 'none';
      }
    }
  }

  dropMorado(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      if (
        this.nivel1.length === 0 ||
        this.nivel2.length === 0 ||
        this.nivel3.length === 0
      ) {
        Swal.fire({
          html:
            "<h1 style='color:#1db31d;'>¡GANASTE!</h1> Identificaste el color de los objetos correctamente",
        });

        this.winner = 1;

        var objects = document.getElementById('objects');
        objects.style.opacity = '0.3';
        objects.style.pointerEvents = 'none';
      }
    }
  }

  dropMarron(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      if (
        this.nivel1.length === 0 ||
        this.nivel2.length === 0 ||
        this.nivel3.length === 0
      ) {
        Swal.fire({
          html:
            "<h1 style='color:#1db31d;'>¡GANASTE!</h1> Identificaste el color de los objetos correctamente",
        });

        this.winner = 1;

        var objects = document.getElementById('objects');
        objects.style.opacity = '0.3';
        objects.style.pointerEvents = 'none';

        var cajaAmarilla = document.getElementById('cajaAmarilla');
        cajaAmarilla.style.opacity = '0.3';
        cajaAmarilla.style.pointerEvents = 'none';

        var cajaVerde = document.getElementById('cajaVerde');
        cajaVerde.style.opacity = '0.3';
        cajaVerde.style.pointerEvents = 'none';

        var cajaNaranja = document.getElementById('cajaNaranja');
        cajaNaranja.style.opacity = '0.3';
        cajaNaranja.style.pointerEvents = 'none';

        var cajaMorado = document.getElementById('cajaMorado');
        cajaMorado.style.opacity = '0.3';
        cajaMorado.style.pointerEvents = 'none';

        var cajaMarron = document.getElementById('cajaMarron');
        cajaMarron.style.opacity = '0.3';
        cajaMarron.style.pointerEvents = 'none';

        var cajaAzul = document.getElementById('cajaAzul');
        cajaAzul.style.opacity = '0.3';
        cajaAzul.style.pointerEvents = 'none';

        var cajaRojo = document.getElementById('cajaRojo');
        cajaRojo.style.opacity = '0.3';
        cajaRojo.style.pointerEvents = 'none';
      }
    }
  }

  dropAzul(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      if (
        this.nivel1.length === 0 ||
        this.nivel2.length === 0 ||
        this.nivel3.length === 0
      ) {
        Swal.fire({
          html:
            "<h1 style='color:#1db31d;'>¡GANASTE!</h1> Identificaste el color de los objetos correctamente",
        });

        this.winner = 1;

        var objects = document.getElementById('objects');
        objects.style.opacity = '0.3';
        objects.style.pointerEvents = 'none';
      }
    }
  }

  dropRojo(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      if (
        this.nivel1.length === 0 ||
        this.nivel2.length === 0 ||
        this.nivel3.length === 0
      ) {
        Swal.fire({
          html:
            "<h1 style='color:#1db31d;'>¡GANASTE!</h1> Identificaste el color de los objetos correctamente",
        });

        this.winner = 1;

        var objects = document.getElementById('objects');
        objects.style.opacity = '0.3';
        objects.style.pointerEvents = 'none';
      }
    }
  }

  evenPredicateAmarillo(item: CdkDrag<any>) {
    for (var i in item.data) {
      if (item.data.hasOwnProperty(i)) {
        var answer = item.data[i];
      }
    }

    return answer === 'amarillo';
  }

  evenPredicateVerde(item: CdkDrag<any>) {
    for (var i in item.data) {
      if (item.data.hasOwnProperty(i)) {
        var answer = item.data[i];
      }
    }

    return answer === 'verde';
  }

  evenPredicateNaranja(item: CdkDrag<any>) {
    for (var i in item.data) {
      if (item.data.hasOwnProperty(i)) {
        var answer = item.data[i];
      }
    }

    return answer === 'naranja';
  }

  evenPredicateMorado(item: CdkDrag<any>) {
    for (var i in item.data) {
      if (item.data.hasOwnProperty(i)) {
        var answer = item.data[i];
      }
    }
    return answer === 'morado';
  }

  evenPredicateMarron(item: CdkDrag<any>) {
    for (var i in item.data) {
      if (item.data.hasOwnProperty(i)) {
        var answer = item.data[i];
      }
    }
    return answer === 'marron';
  }

  evenPredicateAzul(item: CdkDrag<any>) {
    for (var i in item.data) {
      if (item.data.hasOwnProperty(i)) {
        var answer = item.data[i];
      }
    }
    return answer === 'celeste';
  }

  evenPredicateRojo(item: CdkDrag<any>) {
    for (var i in item.data) {
      if (item.data.hasOwnProperty(i)) {
        var answer = item.data[i];
      }
    }
    return answer === 'rojo';
  }
}
