import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cuadro-doble',
  templateUrl: './cuadro-doble.component.html',
  styleUrls: ['./cuadro-doble.component.sass'],
})
export class CuadroDobleComponent implements OnInit {
  triangulos: any[];
  circulos: any[];
  cuadrados: any[];
  rectangulos: any[];
  rombos: any[];
  esferas: any[];
  cubos: any[];
  sectores: any[];
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
  constructor() {}

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
    this.circulos = [];
    this.cuadrados = [];
    this.rectangulos = [];
    this.rombos = [];
    this.esferas = [];
    this.cubos = [];
    this.sectores = [];

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
        title: 'GANASTE',
        text: 'Juego Finalizado, lo lograste!!!',
      });
    }
  }

  validacionTriangulo() {
    if (
      this.triangulos.length === 3 &&
      this.triangulos[0].value === 'triangulo_rojo' &&
      this.triangulos[1].value === 'triangulo_amarillo' &&
      this.triangulos[2].value === 'triangulo_verde'
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
      this.circulos.length === 3 &&
      this.circulos[0].value === 'circulo_rojo' &&
      this.circulos[1].value === 'circulo_amarillo' &&
      this.circulos[2].value === 'circulo_verde'
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
      this.cuadrados.length === 3 &&
      this.cuadrados[0].value === 'cuadrado_rojo' &&
      this.cuadrados[1].value === 'cuadrado_amarillo' &&
      this.cuadrados[2].value === 'cuadrado_verde'
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
      this.rectangulos.length === 3 &&
      this.rectangulos[0].value === 'rectangulo_rojo' &&
      this.rectangulos[1].value === 'rectangulo_amarillo' &&
      this.rectangulos[2].value === 'rectangulo_verde'
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
      this.rombos.length === 3 &&
      this.rombos[0].value === 'rombo_rojo' &&
      this.rombos[1].value === 'rombo_amarillo' &&
      this.rombos[2].value === 'rombo_verde'
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
      this.esferas.length === 3 &&
      this.esferas[0].value === 'esfera_rojo' &&
      this.esferas[1].value === 'esfera_amarillo' &&
      this.esferas[2].value === 'esfera_verde'
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
      this.cubos.length === 3 &&
      this.cubos[0].value === 'cubo_rojo' &&
      this.cubos[1].value === 'cubo_amarillo' &&
      this.cubos[2].value === 'cubo_verde'
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
      this.sectores.length === 3 &&
      this.sectores[0].value === 'sector_rojo' &&
      this.sectores[1].value === 'sector_amarillo' &&
      this.sectores[2].value === 'sector_verde'
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
}
