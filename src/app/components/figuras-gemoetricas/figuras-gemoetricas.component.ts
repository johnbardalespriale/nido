import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
} from '@angular/cdk/drag-drop';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-figuras-gemoetricas',
  templateUrl: './figuras-gemoetricas.component.html',
  styleUrls: ['./figuras-gemoetricas.component.sass']
})
export class FigurasGemoetricasComponent implements OnInit {

  nivel1: any[];
  nivel2: any[];
  nivel3: any[];
  caja_amarilla = [];
  caja_verde = [];
  caja_naranja = [];
  caja_morado = [];
  caja_rosada = [];
  selectedNivel: string;
  nivels: any[];
  cont: number;
  numberRandom: number;
  numberRandom2: number;
  numberRandom3: number;

  constructor() { }

  ngOnInit(): void {
    this.selectedNivel = 'Nivel 1';

    this.random();

    this.nivels = [
      { nivel: 'Nivel 1', selected: false },
      { nivel: 'Nivel 2', selected: false },
      { nivel: 'Nivel 3', selected: false },
    ];

    this.nivel1 = [
      { imagen: 'assets/Img/cuadrado-azul.png', name: 'cuadrado-azul' },
      { imagen: 'assets/Img/cuadrado-verde.png', name: 'cuadrado-verde' },
      { imagen: 'assets/Img/cuadrado-rojo.png', name: 'cuadrado-rojo' },
      { imagen: 'assets/Img/rectangulo-rojo.png', name: 'rectangulo-rojo' },
      { imagen: 'assets/Img/rectangulo-azul.png', name: 'rectangulo-azul' },
      { imagen: 'assets/Img/rectangulo-verde.png', name: 'rectangulo-verde' },
      { imagen: 'assets/Img/triangulo-rojo.png', name: 'triangulo-rojo' },
      { imagen: 'assets/Img/triangulo-verde.png', name: 'triangulo-verde' },
      { imagen: 'assets/Img/triangulo-azul.png', name: 'triangulo-azul' }
    ];

    this.nivel2 = [
      { imagen: 'assets/Img/cuadrado-azul.png', name: 'cuadrado-azul' },
      { imagen: 'assets/Img/cuadrado-verde.png', name: 'cuadrado-verde' },
      { imagen: 'assets/Img/cuadrado-rojo.png', name: 'cuadrado-rojo' },
      { imagen: 'assets/Img/rectangulo-rojo.png', name: 'rectangulo-rojo' },
      { imagen: 'assets/Img/rectangulo-azul.png', name: 'rectangulo-azul' },
      { imagen: 'assets/Img/rectangulo-verde.png', name: 'rectangulo-verde' },
      { imagen: 'assets/Img/triangulo-rojo.png', name: 'triangulo-rojo' },
      { imagen: 'assets/Img/triangulo-verde.png', name: 'triangulo-verde' },
      { imagen: 'assets/Img/triangulo-azul.png', name: 'triangulo-azul' },
      { imagen: 'assets/Img/circulo-azul.png', name: 'circulo-azul' },
      { imagen: 'assets/Img/circulo-verde.png', name: 'circulo-verde' },
      { imagen: 'assets/Img/circulo-rojo.png', name: 'circulo-rojo' }
    ];

    this.nivel3 = [
      { imagen: 'assets/Img/cuadrado-azul.png', name: 'cuadrado-azul' },
      { imagen: 'assets/Img/cuadrado-verde.png', name: 'cuadrado-verde' },
      { imagen: 'assets/Img/cuadrado-rojo.png', name: 'cuadrado-rojo' },
      { imagen: 'assets/Img/rectangulo-rojo.png', name: 'rectangulo-rojo' },
      { imagen: 'assets/Img/rectangulo-azul.png', name: 'rectangulo-azul' },
      { imagen: 'assets/Img/rectangulo-verde.png', name: 'rectangulo-verde' },
      { imagen: 'assets/Img/triangulo-rojo.png', name: 'triangulo-rojo' },
      { imagen: 'assets/Img/triangulo-verde.png', name: 'triangulo-verde' },
      { imagen: 'assets/Img/triangulo-azul.png', name: 'triangulo-azul' },
      { imagen: 'assets/Img/circulo-azul.png', name: 'circulo-azul' },
      { imagen: 'assets/Img/circulo-verde.png', name: 'circulo-verde' },
      { imagen: 'assets/Img/circulo-rojo.png', name: 'circulo-rojo' },
      { imagen: 'assets/Img/rombo-rojo.png', name: 'rombo-rojo' },
      { imagen: 'assets/Img/rombo-azul.png', name: 'rombo-azul' },
      { imagen: 'assets/Img/rombo-verde.png', name: 'rombo-verde' }
    ];

  }

  random() {
    this.numberRandom = Math.floor(Math.random() * 3);
    this.numberRandom2 = Math.floor(Math.random() * 3);
    this.numberRandom3 = Math.floor(Math.random() * 3);
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

      if (this.nivel1.length === 6) {
        Swal.fire({
            html: "<h1 style='color:#1db31d;'>¡GANASTE!</h1> Identificaste la figuras geométricas correctamente "
        });
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

      if (this.nivel1.length === 6) {
        Swal.fire({
          html: "<h1 style='color:#1db31d;'>¡GANASTE!</h1> Identificaste la figuras geométricas correctamente "
        });
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

      if (this.nivel1.length === 6) {
        Swal.fire({
          html: "<h1 style='color:#1db31d;'>¡GANASTE!</h1> Identificaste la figuras geométricas correctamente "
        });
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
      }
    }
  }

  dropAmarilloNivel2(event: CdkDragDrop<string[]>) {
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

      if (this.nivel2.length === 8) {
        Swal.fire({
          html: "<h1 style='color:#1db31d;'>¡GANASTE!</h1> Identificaste la figuras geométricas correctamente "
        });
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

  dropVerdeNivel2(event: CdkDragDrop<string[]>) {
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

      if (this.nivel2.length === 8) {
        Swal.fire({
          html: "<h1 style='color:#1db31d;'>¡GANASTE!</h1> Identificaste la figuras geométricas correctamente "
        });
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
      }
    }
  }

  dropNaranjaNivel2(event: CdkDragDrop<string[]>) {
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

      if (this.nivel2.length === 8) {
        Swal.fire({
          html: "<h1 style='color:#1db31d;'>¡GANASTE!</h1> Identificaste la figuras geométricas correctamente "
        });
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

  dropMoradoNivel2(event: CdkDragDrop<string[]>) {
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

      if (this.nivel2.length === 8) {
        Swal.fire({
          html: "<h1 style='color:#1db31d;'>¡GANASTE!</h1> Identificaste la figuras geométricas correctamente "
        });
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

  dropAmarilloNivel3(event: CdkDragDrop<string[]>) {
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

      if (this.nivel3.length === 10) {
        Swal.fire({
          html: "<h1 style='color:#1db31d;'>¡GANASTE!</h1> Identificaste la figuras geométricas correctamente "
        });
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

        var cajaRosada = document.getElementById('cajaRosada');
        cajaRosada.style.opacity = '0.3';
        cajaRosada.style.pointerEvents = 'none';
      }
    }
  }

  dropVerdeNivel3(event: CdkDragDrop<string[]>) {
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

      if (this.nivel3.length === 10) {
        Swal.fire({
          html: "<h1 style='color:#1db31d;'>¡GANASTE!</h1> Identificaste la figuras geométricas correctamente "
        });
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

        var cajaRosada = document.getElementById('cajaRosada');
        cajaRosada.style.opacity = '0.3';
        cajaRosada.style.pointerEvents = 'none';
      }
    }
  }

  dropNaranjaNivel3(event: CdkDragDrop<string[]>) {
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

      if (this.nivel3.length === 10) {
        Swal.fire({
          html: "<h1 style='color:#1db31d;'>¡GANASTE!</h1> Identificaste la figuras geométricas correctamente "
        });
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

        var cajaRosada = document.getElementById('cajaRosada');
        cajaRosada.style.opacity = '0.3';
        cajaRosada.style.pointerEvents = 'none';
      }
    }
  }

  dropMoradoNivel3(event: CdkDragDrop<string[]>) {
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

      if (this.nivel3.length === 10) {
        Swal.fire({
          html: "<h1 style='color:#1db31d;'>¡GANASTE!</h1> Identificaste la figuras geométricas correctamente "
        });
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

        var cajaRosada = document.getElementById('cajaRosada');
        cajaRosada.style.opacity = '0.3';
        cajaRosada.style.pointerEvents = 'none';
      }
    }
  }

  dropRosadaNivel3(event: CdkDragDrop<string[]>) {
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

      if (this.nivel3.length === 10) {
        Swal.fire({
          html: "<h1 style='color:#1db31d;'>¡GANASTE!</h1> Identificaste la figuras geométricas correctamente "
        });
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

        var cajaRosada = document.getElementById('cajaRosada');
        cajaRosada.style.opacity = '0.3';
        cajaRosada.style.pointerEvents = 'none';
      }
    }
  }

  evenPredicateAmarillo(item: CdkDrag<any>) {
    for (var i in item.data) {
      if (item.data.hasOwnProperty(i)) {
        var answer = item.data[i];
      }
    }

    return answer === 'cuadrado-rojo';
  }

  evenPredicateVerde(item: CdkDrag<any>) {
    for (var i in item.data) {
      if (item.data.hasOwnProperty(i)) {
        var answer = item.data[i];
      }
    }

    return answer === 'triangulo-verde';
  }

  evenPredicateNaranja(item: CdkDrag<any>) {
    for (var i in item.data) {
      if (item.data.hasOwnProperty(i)) {
        var answer = item.data[i];
      }
    }

    return answer === 'cuadrado-azul';
  }

  evenPredicateTrianguloRojo(item: CdkDrag<any>) {
    for (var i in item.data) {
      if (item.data.hasOwnProperty(i)) {
        var answer = item.data[i];
      }
    }

    return answer === 'triangulo-rojo';
  }

  evenPredicateCuadradoVerde(item: CdkDrag<any>) {
    for (var i in item.data) {
      if (item.data.hasOwnProperty(i)) {
        var answer = item.data[i];
      }
    }

    return answer === 'cuadrado-verde';
  }

  evenPredicateRectanguloAzul(item: CdkDrag<any>) {
    for (var i in item.data) {
      if (item.data.hasOwnProperty(i)) {
        var answer = item.data[i];
      }
    }

    return answer === 'rectangulo-azul';
  }

  evenPredicateRectanguloVerde(item: CdkDrag<any>) {
    for (var i in item.data) {
      if (item.data.hasOwnProperty(i)) {
        var answer = item.data[i];
      }
    }

    return answer === 'rectangulo-verde';
  }

  evenPredicateTrianguloAzul(item: CdkDrag<any>) {
    for (var i in item.data) {
      if (item.data.hasOwnProperty(i)) {
        var answer = item.data[i];
      }
    }

    return answer === 'triangulo-azul';
  }

  evenPredicateCuadradoRojo(item: CdkDrag<any>) {
    for (var i in item.data) {
      if (item.data.hasOwnProperty(i)) {
        var answer = item.data[i];
      }
    }

    return answer === 'cuadrado-rojo';
  }

  evenPredicateAmarilloNivel2(item: CdkDrag<any>) {
    for (var i in item.data) {
      if (item.data.hasOwnProperty(i)) {
        var answer = item.data[i];
      }
    }

    return answer === 'circulo-verde';
  }

  evenPredicateVerdeNivel2(item: CdkDrag<any>) {
    for (var i in item.data) {
      if (item.data.hasOwnProperty(i)) {
        var answer = item.data[i];
      }
    }

    return answer === 'rectangulo-azul';
  }

  evenPredicateNaranjaNivel2(item: CdkDrag<any>) {
    for (var i in item.data) {
      if (item.data.hasOwnProperty(i)) {
        var answer = item.data[i];
      }
    }

    return answer === 'circulo-rojo';
  }

  evenPredicateMoradoNivel2(item: CdkDrag<any>) {
    for (var i in item.data) {
      if (item.data.hasOwnProperty(i)) {
        var answer = item.data[i];
      }
    }
    return answer === 'cuadrado-verde';
  }

  evenPredicateNivel2CirculoAzul(item: CdkDrag<any>) {
    for (var i in item.data) {
      if (item.data.hasOwnProperty(i)) {
        var answer = item.data[i];
      }
    }
    return answer === 'circulo-azul';
  }

  evenPredicateNivel2RectanguloVerde(item: CdkDrag<any>) {
    for (var i in item.data) {
      if (item.data.hasOwnProperty(i)) {
        var answer = item.data[i];
      }
    }
    return answer === 'rectangulo-verde';
  }

  evenPredicateNivel2CuadradoAzul(item: CdkDrag<any>) {
    for (var i in item.data) {
      if (item.data.hasOwnProperty(i)) {
        var answer = item.data[i];
      }
    }
    return answer === 'cuadrado-azul';
  }

  evenPredicateNivel2TrianguloRojo(item: CdkDrag<any>) {
    for (var i in item.data) {
      if (item.data.hasOwnProperty(i)) {
        var answer = item.data[i];
      }
    }
    return answer === 'triangulo-rojo';
  }

  evenPredicateNivel2RectanguloAzul(item: CdkDrag<any>) {
    for (var i in item.data) {
      if (item.data.hasOwnProperty(i)) {
        var answer = item.data[i];
      }
    }
    return answer === 'rectangulo-azul';
  }

  evenPredicateNivel2CirculoVerde(item: CdkDrag<any>) {
    for (var i in item.data) {
      if (item.data.hasOwnProperty(i)) {
        var answer = item.data[i];
      }
    }
    return answer === 'circulo-verde';
  }

  evenPredicateNivel2CirculoRojo(item: CdkDrag<any>) {
    for (var i in item.data) {
      if (item.data.hasOwnProperty(i)) {
        var answer = item.data[i];
      }
    }
    return answer === 'circulo-rojo';
  }

  evenPredicateNivel2TrianguloAzul(item: CdkDrag<any>) {
    for (var i in item.data) {
      if (item.data.hasOwnProperty(i)) {
        var answer = item.data[i];
      }
    }
    return answer === 'triangulo-azul';
  }

  evenPredicateAmarilloNivel3(item: CdkDrag<any>) {
    for (var i in item.data) {
      if (item.data.hasOwnProperty(i)) {
        var answer = item.data[i];
      }
    }

    return answer === 'cuadrado-azul';
  }

  evenPredicateVerdeNivel3(item: CdkDrag<any>) {
    for (var i in item.data) {
      if (item.data.hasOwnProperty(i)) {
        var answer = item.data[i];
      }
    }

    return answer === 'rombo-rojo';
  }

  evenPredicateNaranjaNivel3(item: CdkDrag<any>) {
    for (var i in item.data) {
      if (item.data.hasOwnProperty(i)) {
        var answer = item.data[i];
      }
    }

    return answer === 'circulo-verde';
  }

  evenPredicateMoradoNivel3(item: CdkDrag<any>) {
    for (var i in item.data) {
      if (item.data.hasOwnProperty(i)) {
        var answer = item.data[i];
      }
    }
    return answer === 'rectangulo-rojo';
  }

  evenPredicateRosadaNivel3(item: CdkDrag<any>) {
    for (var i in item.data) {
      if (item.data.hasOwnProperty(i)) {
        var answer = item.data[i];
      }
    }
    return answer === 'rombo-verde';
  }

  evenPredicateNivel3CuadradoAzul(item: CdkDrag<any>) {
    for (var i in item.data) {
      if (item.data.hasOwnProperty(i)) {
        var answer = item.data[i];
      }
    }
    return answer === 'cuadrado-azul';
  }

  evenPredicateNivel3CirculoRojo(item: CdkDrag<any>) {
    for (var i in item.data) {
      if (item.data.hasOwnProperty(i)) {
        var answer = item.data[i];
      }
    }
    return answer === 'circulo-rojo';
  }

  evenPredicateNivel3TrianguloAzul(item: CdkDrag<any>) {
    for (var i in item.data) {
      if (item.data.hasOwnProperty(i)) {
        var answer = item.data[i];
      }
    }
    return answer === 'triangulo-azul';
  }

  evenPredicateNivel3RomboRojo(item: CdkDrag<any>) {
    for (var i in item.data) {
      if (item.data.hasOwnProperty(i)) {
        var answer = item.data[i];
      }
    }
    return answer === 'rombo-rojo';
  }

  evenPredicateNivel3CuadradoVerde(item: CdkDrag<any>) {
    for (var i in item.data) {
      if (item.data.hasOwnProperty(i)) {
        var answer = item.data[i];
      }
    }
    return answer === 'cuadrado-verde';
  }

  evenPredicateNivel3TrianguloRojo(item: CdkDrag<any>) {
    for (var i in item.data) {
      if (item.data.hasOwnProperty(i)) {
        var answer = item.data[i];
      }
    }
    return answer === 'triangulo-rojo';
  }

  evenPredicateNivel3CirculoAzul(item: CdkDrag<any>) {
    for (var i in item.data) {
      if (item.data.hasOwnProperty(i)) {
        var answer = item.data[i];
      }
    }
    return answer === 'circulo-azul';
  }

  evenPredicateNivel3CuadradoRojo(item: CdkDrag<any>) {
    for (var i in item.data) {
      if (item.data.hasOwnProperty(i)) {
        var answer = item.data[i];
      }
    }
    return answer === 'cuadrado-rojo';
  }

  evenPredicateNivel3RomboAzul(item: CdkDrag<any>) {
    for (var i in item.data) {
      if (item.data.hasOwnProperty(i)) {
        var answer = item.data[i];
      }
    }
    return answer === 'rombo-azul';
  }

  restoreBoxes(){
    this.nivel1 = [
      { imagen: 'assets/Img/cuadrado-azul.png', name: 'cuadrado-azul' },
      { imagen: 'assets/Img/cuadrado-verde.png', name: 'cuadrado-verde' },
      { imagen: 'assets/Img/cuadrado-rojo.png', name: 'cuadrado-rojo' },
      { imagen: 'assets/Img/rectangulo-rojo.png', name: 'rectangulo-rojo' },
      { imagen: 'assets/Img/rectangulo-azul.png', name: 'rectangulo-azul' },
      { imagen: 'assets/Img/rectangulo-verde.png', name: 'rectangulo-verde' },
      { imagen: 'assets/Img/triangulo-rojo.png', name: 'triangulo-rojo' },
      { imagen: 'assets/Img/triangulo-verde.png', name: 'triangulo-verde' },
      { imagen: 'assets/Img/triangulo-azul.png', name: 'triangulo-azul' }
    ];

    this.nivel2 = [
      { imagen: 'assets/Img/cuadrado-azul.png', name: 'cuadrado-azul' },
      { imagen: 'assets/Img/cuadrado-verde.png', name: 'cuadrado-verde' },
      { imagen: 'assets/Img/cuadrado-rojo.png', name: 'cuadrado-rojo' },
      { imagen: 'assets/Img/rectangulo-rojo.png', name: 'rectangulo-rojo' },
      { imagen: 'assets/Img/rectangulo-azul.png', name: 'rectangulo-azul' },
      { imagen: 'assets/Img/rectangulo-verde.png', name: 'rectangulo-verde' },
      { imagen: 'assets/Img/triangulo-rojo.png', name: 'triangulo-rojo' },
      { imagen: 'assets/Img/triangulo-verde.png', name: 'triangulo-verde' },
      { imagen: 'assets/Img/triangulo-azul.png', name: 'triangulo-azul' },
      { imagen: 'assets/Img/circulo-azul.png', name: 'circulo-azul' },
      { imagen: 'assets/Img/circulo-verde.png', name: 'circulo-verde' },
      { imagen: 'assets/Img/circulo-rojo.png', name: 'circulo-rojo' }
    ];

    this.nivel3 = [
      { imagen: 'assets/Img/cuadrado-azul.png', name: 'cuadrado-azul' },
      { imagen: 'assets/Img/cuadrado-verde.png', name: 'cuadrado-verde' },
      { imagen: 'assets/Img/cuadrado-rojo.png', name: 'cuadrado-rojo' },
      { imagen: 'assets/Img/rectangulo-rojo.png', name: 'rectangulo-rojo' },
      { imagen: 'assets/Img/rectangulo-azul.png', name: 'rectangulo-azul' },
      { imagen: 'assets/Img/rectangulo-verde.png', name: 'rectangulo-verde' },
      { imagen: 'assets/Img/triangulo-rojo.png', name: 'triangulo-rojo' },
      { imagen: 'assets/Img/triangulo-verde.png', name: 'triangulo-verde' },
      { imagen: 'assets/Img/triangulo-azul.png', name: 'triangulo-azul' },
      { imagen: 'assets/Img/circulo-azul.png', name: 'circulo-azul' },
      { imagen: 'assets/Img/circulo-verde.png', name: 'circulo-verde' },
      { imagen: 'assets/Img/circulo-rojo.png', name: 'circulo-rojo' },
      { imagen: 'assets/Img/rombo-rojo.png', name: 'rombo-rojo' },
      { imagen: 'assets/Img/rombo-azul.png', name: 'rombo-azul' },
      { imagen: 'assets/Img/rombo-verde.png', name: 'rombo-verde' }
    ];
  }



  resetear() {
    this.random();
    this.caja_amarilla = [];
    this.caja_verde = [];
    this.caja_naranja = [];
    this.caja_morado = [];
    this.caja_rosada = [];



    if (this.selectedNivel === 'Nivel 1') {

      this.restoreBoxes();

      var objects = document.getElementById('objects');
      objects.style.opacity = '1';
      objects.style.pointerEvents = 'inherit';

      var cajaAmarilla = document.getElementById('cajaAmarilla');
      cajaAmarilla.style.opacity = '1';
      cajaAmarilla.style.pointerEvents = 'inherit';

      var cajaVerde = document.getElementById('cajaVerde');
      cajaVerde.style.opacity = '1';
      cajaVerde.style.pointerEvents = 'inherit';

      var cajaNaranja = document.getElementById('cajaNaranja');
      cajaNaranja.style.opacity = '1';
      cajaNaranja.style.pointerEvents = 'inherit';
    } else if (this.selectedNivel === 'Nivel 2') {
      this.restoreBoxes();

      var objects = document.getElementById('objects');
      objects.style.opacity = '1';
      objects.style.pointerEvents = 'inherit';

      var cajaAmarilla = document.getElementById('cajaAmarilla');
      cajaAmarilla.style.opacity = '1';
      cajaAmarilla.style.pointerEvents = 'inherit';

      var cajaVerde = document.getElementById('cajaVerde');
      cajaVerde.style.opacity = '1';
      cajaVerde.style.pointerEvents = 'inherit';

      var cajaNaranja = document.getElementById('cajaNaranja');
      cajaNaranja.style.opacity = '1';
      cajaNaranja.style.pointerEvents = 'inherit';

      var cajaMorado = document.getElementById('cajaMorado');
      cajaMorado.style.opacity = '1';
      cajaMorado.style.pointerEvents = 'inherit';
    } else if (this.selectedNivel === 'Nivel 3') {
      this.restoreBoxes();

      var objects = document.getElementById('objects');
      objects.style.opacity = '1';
      objects.style.pointerEvents = 'inherit';

      var cajaAmarilla = document.getElementById('cajaAmarilla');
      cajaAmarilla.style.opacity = '1';
      cajaAmarilla.style.pointerEvents = 'inherit';

      var cajaVerde = document.getElementById('cajaVerde');
      cajaVerde.style.opacity = '1';
      cajaVerde.style.pointerEvents = 'inherit';

      var cajaNaranja = document.getElementById('cajaNaranja');
      cajaNaranja.style.opacity = '1';
      cajaNaranja.style.pointerEvents = 'inherit';

      var cajaMorado = document.getElementById('cajaMorado');
      cajaMorado.style.opacity = '1';
      cajaMorado.style.pointerEvents = 'inherit';

      var cajaRosada = document.getElementById('cajaRosada');
      cajaRosada.style.opacity = '1';
      cajaRosada.style.pointerEvents = 'inherit';
    }
  }

}
