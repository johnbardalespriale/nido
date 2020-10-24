import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
} from '@angular/cdk/drag-drop';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cuadro-doble',
  templateUrl: './cuadro-doble.component.html',
  styleUrls: ['./cuadro-doble.component.sass'],
})
export class CuadroDobleComponent implements OnInit {
  triangulos: any[];
  triangulos2: any[];
  triangulos3: any[];
  circulos: any[];
  circulos2: any[];
  circulos3: any[];
  cuadrados: any[];
  cuadrados2: any[];
  cuadrados3: any[];
  rectangulos: any[];
  rectangulos2: any[];
  rectangulos3: any[];
  rombos: any[];
  rombos2: any[];
  rombos3: any[];
  esferas: any[];
  esferas2: any[];
  esferas3: any[];
  cubos: any[];
  cubos2: any[];
  cubos3: any[];
  sectores: any[];
  sectores2: any[];
  sectores3: any[];
  done: any[];
  able1: String;
  able2: String;
  able3: String;
  able4: String;
  able5: String;
  able6: String;
  able7: String;
  able8: String;
  cont: number;
  constructor() { }

  ngOnInit(): void {
    this.done = [
      { imagen: 'assets/Img/doble_sector_verde.png', value: 'sector_verde' },
      {
        imagen: 'assets/Img/doble_sector_amarillo.png',
        value: 'sector_amarillo',
      },
      { imagen: 'assets/Img/doble_sector_rojo.png', value: 'sector_rojo' },
      { imagen: 'assets/Img/doble_circulo_rojo.png', value: 'circulo_rojo' },
      { imagen: 'assets/Img/doble_circulo_verde.png', value: 'circulo_verde' },
      {
        imagen: 'assets/Img/doble_circulo_amarillo.png',
        value: 'circulo_amarillo',
      },
      { imagen: 'assets/Img/doble_cuadrado_rojo.png', value: 'cuadrado_rojo' },
      {
        imagen: 'assets/Img/doble_cuadrado_verde.png',
        value: 'cuadrado_verde',
      },
      {
        imagen: 'assets/Img/doble_cuadrado_amarillo.png',
        value: 'cuadrado_amarillo',
      },
      {
        imagen: 'assets/Img/doble_rectangulo_rojo.png',
        value: 'rectangulo_rojo',
      },
      {
        imagen: 'assets/Img/doble_rectangulo_verde.png',
        value: 'rectangulo_verde',
      },
      {
        imagen: 'assets/Img/doble_rectangulo_amarillo.png',
        value: 'rectangulo_amarillo',
      },
      { imagen: 'assets/Img/doble_cubo_rojo.png', value: 'cubo_rojo' },
      { imagen: 'assets/Img/doble_cubo_verde.png', value: 'cubo_verde' },
      { imagen: 'assets/Img/doble_cubo_amarillo.png', value: 'cubo_amarillo' },
      {
        imagen: 'assets/Img/doble_triangulo_rojo.png',
        value: 'triangulo_rojo',
      },
      {
        imagen: 'assets/Img/doble_triangulo_verde.png',
        value: 'triangulo_verde',
      },
      {
        imagen: 'assets/Img/doble_triangulo_amarillo.png',
        value: 'triangulo_amarillo',
      },
      { imagen: 'assets/Img/doble_rombo_rojo.png', value: 'rombo_rojo' },
      { imagen: 'assets/Img/doble_rombo_verde.png', value: 'rombo_verde' },
      {
        imagen: 'assets/Img/doble_rombo_amarillo.png',
        value: 'rombo_amarillo',
      },
      { imagen: 'assets/Img/doble_esfera_rojo.png', value: 'esfera_rojo' },
      { imagen: 'assets/Img/doble_esfera_verde.png', value: 'esfera_verde' },
      {
        imagen: 'assets/Img/doble_esfera_amarillo.png',
        value: 'esfera_amarillo',
      },
    ];

    this.cont = 0;
    this.triangulos = [];
    this.triangulos2 = [];
    this.triangulos3 = [];
    this.circulos = [];
    this.circulos2 = [];
    this.circulos3 = [];
    this.cuadrados = [];
    this.cuadrados2 = [];
    this.cuadrados3 = [];
    this.rectangulos = [];
    this.rectangulos2 = [];
    this.rectangulos3 = [];
    this.rombos = [];
    this.rombos2 = [];
    this.rombos3 = [];
    this.esferas = [];
    this.esferas2 = [];
    this.esferas3 = [];
    this.cubos = [];
    this.cubos2 = [];
    this.cubos3 = [];
    this.sectores = [];
    this.sectores2 = [];
    this.sectores3 = [];

    this.able();
  }

  able() {
    this.able1 = 'triangulo';
    this.able2 = 'circulo';
    this.able3 = 'cuadrado';
    this.able4 = 'rectangulo';
    this.able5 = 'rombo';
    this.able6 = 'esfera';
    this.able7 = 'cubo';
    this.able8 = 'sector';
  }

  mensaje() {
    console.log('contador', this.cont);
    if (this.done.length === 0 && this.cont >= 8) {
      Swal.fire({
        html: "<h1 style='color:#1db31d;'>¡GANASTE!</h1> <br> Juego terminado "
      });
    }
  }

  validacionTriangulo() {
    if (
      this.triangulos[0].value === 'triangulo_rojo' &&
      this.triangulos2[0].value === 'triangulo_amarillo' &&
      this.triangulos3[0].value === 'triangulo_verde'
    ) {
      if (this.able1 === 'triangulo') {
        Swal.fire({
          text: '¡Columna completada exitosamente!',
        });
        this.able1 = 'nulo';
      }
      var figuras = document.getElementById('triangulos');
      figuras.style.opacity = '0.3';
      figuras.style.pointerEvents = 'none';
      this.cont++;
    }
  }

  validacionCirculo() {
    if (
      this.circulos[0].value === 'circulo_rojo' &&
      this.circulos2[0].value === 'circulo_amarillo' &&
      this.circulos3[0].value === 'circulo_verde'
    ) {
      if (this.able2 === 'circulo') {
        Swal.fire({
          text: '¡Columna completada exitosamente!',
        });
        this.able2 = 'nulo';
      }
      var figuras = document.getElementById('Circulo');
      figuras.style.opacity = '0.3';
      figuras.style.pointerEvents = 'none';
      this.cont++;
    }
  }

  validacionCuadrado() {
    if (
      this.cuadrados[0].value === 'cuadrado_rojo' &&
      this.cuadrados2[0].value === 'cuadrado_amarillo' &&
      this.cuadrados3[0].value === 'cuadrado_verde'
    ) {
      if (this.able3 === 'cuadrado') {
        Swal.fire({
          text: '¡Columna completada exitosamente!',
        });
        this.able3 = 'nulo';
      }
      var figuras = document.getElementById('cuadrados');
      figuras.style.opacity = '0.3';
      figuras.style.pointerEvents = 'none';
      this.cont++;
    }
  }

  validacionRectangulo() {
    if (
      this.rectangulos[0].value === 'rectangulo_rojo' &&
      this.rectangulos2[0].value === 'rectangulo_amarillo' &&
      this.rectangulos3[0].value === 'rectangulo_verde'
    ) {
      if (this.able4 === 'rectangulo') {
        Swal.fire({
          text: '¡Columna completada exitosamente!',
        });
        this.able4 = 'nulo';
      }
      var figuras = document.getElementById('rectangulos');
      figuras.style.opacity = '0.3';
      figuras.style.pointerEvents = 'none';
      this.cont++;
    }
  }

  validacionRombo() {
    if (
      this.rombos[0].value === 'rombo_rojo' &&
      this.rombos2[0].value === 'rombo_amarillo' &&
      this.rombos3[0].value === 'rombo_verde'
    ) {
      if (this.able5 === 'rombo') {
        Swal.fire({
          text: '¡Columna completada exitosamente!',
        });
        this.able5 = 'nulo';
      }
      var figuras = document.getElementById('rombos');
      figuras.style.opacity = '0.3';
      figuras.style.pointerEvents = 'none';
      this.cont++;
    }
  }

  validacionEsfera() {
    if (
      this.esferas[0].value === 'esfera_rojo' &&
      this.esferas2[0].value === 'esfera_amarillo' &&
      this.esferas3[0].value === 'esfera_verde'
    ) {
      if (this.able6 === 'esfera') {
        Swal.fire({
          text: '¡Columna completada exitosamente!',
        });
        this.able6 = 'nulo';
      }
      var figuras = document.getElementById('esferas');
      figuras.style.opacity = '0.3';
      figuras.style.pointerEvents = 'none';
      this.cont++;
    }
  }

  validacionCubo() {
    if (
      this.cubos[0].value === 'cubo_rojo' &&
      this.cubos2[0].value === 'cubo_amarillo' &&
      this.cubos3[0].value === 'cubo_verde'
    ) {
      if (this.able7 === 'cubo') {
        Swal.fire({
          text: '¡Columna completada exitosamente!',
        });
        this.able7 = 'nulo';
      }
      var figuras = document.getElementById('cubos');
      figuras.style.opacity = '0.3';
      figuras.style.pointerEvents = 'none';
      this.cont++;
    }
  }

  validacionSector() {
    if (
      this.sectores[0].value === 'sector_rojo' &&
      this.sectores2[0].value === 'sector_amarillo' &&
      this.sectores3[0].value === 'sector_verde'
    ) {
      if (this.able8 === 'sector') {
        Swal.fire({
          text: '¡Columna completada exitosamente!',
        });
        this.able8 = 'nulo';
      }
      var figuras = document.getElementById('sectores');
      figuras.style.opacity = '0.3';
      figuras.style.pointerEvents = 'none';
      this.cont++;
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

      this.validacionTriangulo();
      this.validacionCirculo();
      this.validacionCuadrado();
      this.validacionRectangulo();
      this.validacionRombo();
      this.validacionEsfera();
      this.validacionCubo();
      this.validacionSector();
      this.mensaje();
    }
  }

  dropTriangulos(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      this.validacionTriangulo();
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      this.validacionTriangulo();
      this.mensaje();
    }
  }

  dropCirculo(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      this.validacionCirculo();
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      this.validacionCirculo();
      this.mensaje();
    }
  }

  dropCuadrado(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      this.validacionCuadrado();
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      this.validacionCuadrado();
      this.mensaje();
    }
  }

  dropRectangulo(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      this.validacionRectangulo();
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      this.validacionRectangulo();
      this.mensaje();
    }
  }

  dropRombo(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      this.validacionRombo();
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      this.validacionRombo();
      this.mensaje();
    }
  }

  dropEsfera(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      this.validacionEsfera();
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      this.validacionEsfera();
      this.mensaje();
    }
  }

  dropCubo(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      this.validacionCubo();
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      this.validacionCubo();
      this.mensaje();
    }
  }

  dropSector(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      this.validacionSector();
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      this.validacionSector();
      this.mensaje();
    }
  }

  evenPredicatetriangulos(item: CdkDrag<any>) {
    for (var i in item.data) {
      if (item.data.hasOwnProperty(i)) {
        var answer = item.data[i];
      }
    }
    return answer === 'triangulo_rojo';
  }

  evenPredicatetriangulos2(item: CdkDrag<any>) {
    for (var i in item.data) {
      if (item.data.hasOwnProperty(i)) {
        var answer = item.data[i];
      }
    }
    return answer === 'triangulo_amarillo';
  }

  evenPredicatetriangulos3(item: CdkDrag<any>) {
    for (var i in item.data) {
      if (item.data.hasOwnProperty(i)) {
        var answer = item.data[i];
      }
    }
    return answer === 'triangulo_verde';
  }

  evenPredicateCirculos(item: CdkDrag<any>) {
    for (var i in item.data) {
      if (item.data.hasOwnProperty(i)) {
        var answer = item.data[i];
      }
    }
    return answer === 'circulo_rojo';
  }

  evenPredicateCirculos2(item: CdkDrag<any>) {
    for (var i in item.data) {
      if (item.data.hasOwnProperty(i)) {
        var answer = item.data[i];
      }
    }
    return answer === 'circulo_amarillo';
  }

  evenPredicateCirculos3(item: CdkDrag<any>) {
    for (var i in item.data) {
      if (item.data.hasOwnProperty(i)) {
        var answer = item.data[i];
      }
    }
    return answer === 'circulo_verde';
  }

  evenPredicateCuadrados(item: CdkDrag<any>) {
    for (var i in item.data) {
      if (item.data.hasOwnProperty(i)) {
        var answer = item.data[i];
      }
    }
    return answer === 'cuadrado_rojo';
  }

  evenPredicateCuadrados2(item: CdkDrag<any>) {
    for (var i in item.data) {
      if (item.data.hasOwnProperty(i)) {
        var answer = item.data[i];
      }
    }
    return answer === 'cuadrado_amarillo';
  }

  evenPredicateCuadrados3(item: CdkDrag<any>) {
    for (var i in item.data) {
      if (item.data.hasOwnProperty(i)) {
        var answer = item.data[i];
      }
    }
    return answer === 'cuadrado_verde';
  }

  evenPredicateRectangulos(item: CdkDrag<any>) {
    for (var i in item.data) {
      if (item.data.hasOwnProperty(i)) {
        var answer = item.data[i];
      }
    }
    return answer === 'rectangulo_rojo';
  }

  evenPredicateRectangulos2(item: CdkDrag<any>) {
    for (var i in item.data) {
      if (item.data.hasOwnProperty(i)) {
        var answer = item.data[i];
      }
    }
    return answer === 'rectangulo_amarillo';
  }

  evenPredicateRectangulos3(item: CdkDrag<any>) {
    for (var i in item.data) {
      if (item.data.hasOwnProperty(i)) {
        var answer = item.data[i];
      }
    }
    return answer === 'rectangulo_verde';
  }

  evenPredicateRombos(item: CdkDrag<any>) {
    for (var i in item.data) {
      if (item.data.hasOwnProperty(i)) {
        var answer = item.data[i];
      }
    }
    return answer === 'rombo_rojo';
  }

  evenPredicateRombos2(item: CdkDrag<any>) {
    for (var i in item.data) {
      if (item.data.hasOwnProperty(i)) {
        var answer = item.data[i];
      }
    }
    return answer === 'rombo_amarillo';
  }

  evenPredicateRombos3(item: CdkDrag<any>) {
    for (var i in item.data) {
      if (item.data.hasOwnProperty(i)) {
        var answer = item.data[i];
      }
    }
    return answer === 'rombo_verde';
  }

  evenPredicateEsferas(item: CdkDrag<any>) {
    for (var i in item.data) {
      if (item.data.hasOwnProperty(i)) {
        var answer = item.data[i];
      }
    }
    return answer === 'esfera_rojo';
  }

  evenPredicateEsferas2(item: CdkDrag<any>) {
    for (var i in item.data) {
      if (item.data.hasOwnProperty(i)) {
        var answer = item.data[i];
      }
    }
    return answer === 'esfera_amarillo';
  }

  evenPredicateEsferas3(item: CdkDrag<any>) {
    for (var i in item.data) {
      if (item.data.hasOwnProperty(i)) {
        var answer = item.data[i];
      }
    }
    return answer === 'esfera_verde';
  }

  evenPredicateCubos(item: CdkDrag<any>) {
    for (var i in item.data) {
      if (item.data.hasOwnProperty(i)) {
        var answer = item.data[i];
      }
    }
    return answer === 'cubo_rojo';
  }

  evenPredicateCubos2(item: CdkDrag<any>) {
    for (var i in item.data) {
      if (item.data.hasOwnProperty(i)) {
        var answer = item.data[i];
      }
    }
    return answer === 'cubo_amarillo';
  }

  evenPredicateCubos3(item: CdkDrag<any>) {
    for (var i in item.data) {
      if (item.data.hasOwnProperty(i)) {
        var answer = item.data[i];
      }
    }
    return answer === 'cubo_verde';
  }

  evenPredicateSectores(item: CdkDrag<any>) {
    for (var i in item.data) {
      if (item.data.hasOwnProperty(i)) {
        var answer = item.data[i];
      }
    }
    return answer === 'sector_rojo';
  }

  evenPredicateSectores2(item: CdkDrag<any>) {
    for (var i in item.data) {
      if (item.data.hasOwnProperty(i)) {
        var answer = item.data[i];
      }
    }
    return answer === 'sector_amarillo';
  }

  evenPredicateSectores3(item: CdkDrag<any>) {
    for (var i in item.data) {
      if (item.data.hasOwnProperty(i)) {
        var answer = item.data[i];
      }
    }
    return answer === 'sector_verde';
  }
}
