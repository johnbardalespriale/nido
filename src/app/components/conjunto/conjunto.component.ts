import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-conjunto',
  templateUrl: './conjunto.component.html',
  styleUrls: ['./conjunto.component.sass'],
})
export class ConjuntoComponent implements OnInit {
  nivel1: any[];
  caja_amarilla = [];
  caja_verde = [];
  caja_naranja = [];
  caja_morado = [];
  cont: number;

  constructor() {}

  ngOnInit(): void {
    this.nivel1 = [
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
      { imagen: 'assets/Img/falda.png', name: 'morado' },
      { imagen: 'assets/Img/gorra.png', name: 'naranja' },
      { imagen: 'assets/Img/gorrito.png', name: 'celeste' },
      { imagen: 'assets/Img/lentes.png', name: 'marron' },
      { imagen: 'assets/Img/pantalon.png', name: 'marron' },
      { imagen: 'assets/Img/polo.png', name: 'celeste' },
      { imagen: 'assets/Img/zapato.png', name: 'celeste' },
    ];

    this.cont = 0;
  }

  dropTotal(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      console.log(this.nivel1.length, 'ingreso2');
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

      if (this.nivel1.length === 9) {
        alert(
          '¡Lo lograste, identificaste el color de los objetos correctamente!'
        );
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

      if (this.nivel1.length === 9) {
        alert(
          '¡Lo lograste, identificaste el color de los objetos correctamente!'
        );
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

      if (this.nivel1.length === 9) {
        alert(
          '¡Lo lograste, identificaste el color de los objetos correctamente!'
        );
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

      if (this.nivel1.length === 9) {
        alert(
          '¡Lo lograste, identificaste el color de los objetos correctamente!'
        );
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
}
