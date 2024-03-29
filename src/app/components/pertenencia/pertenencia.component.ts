import { Component, OnInit } from '@angular/core';
import {
  CdkDrag,
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pertenencia',
  templateUrl: './pertenencia.component.html',
  styleUrls: ['./pertenencia.component.sass'],
})
export class PertenenciaComponent implements OnInit {
  nivels: any[];
  animales: any[];
  animalesNivel2: any[];
  animalesNivel3: any[];
  habilitar: number;
  setCarnivoros: any[];
  setHerbivoros: any[];
  set2Paws: any[];
  set3Paws: any[];
  weakSound: any[];
  loudSound: any[];
  selectedNivel: string;
  win: number;

  constructor() { }

  ngOnInit(): void {

    this.win = 0;

    this.nivels = [
      { nivel: 'Nivel 1', selected: false },
      { nivel: 'Nivel 2', selected: false },
      { nivel: 'Nivel 3', selected: false },
    ];

    this.animales = [
      { imagen: 'assets/Img/pertenencia_leon.png', name: 'carnivoro' },
      { imagen: 'assets/Img/pertenencia_tigre.png', name: 'carnivoro' },
      { imagen: 'assets/Img/pertenencia_condor.png', name: 'carnivoro' },
      { imagen: 'assets/Img/pertenencia_venado.png', name: 'herbivoro' },
      { imagen: 'assets/Img/pertenencia_cabra.png', name: 'herbivoro' },
      { imagen: 'assets/Img/pertenencia_jirafa.png', name: 'herbivoro' },
      { imagen: 'assets/Img/pertenencia_cuy.png', name: 'herbivoro' },
    ];

    this.animalesNivel2 = [
      { imagen: 'assets/Img/pertenencia_avestruz.png', name: '2_patas' },
      { imagen: 'assets/Img/pertenencia_pato.png', name: '2_patas' },
      { imagen: 'assets/Img/pertenencia_flamenco.png', name: '2_patas' },
      { imagen: 'assets/Img/pertenencia_pinguino.png', name: '2_patas' },
      { imagen: 'assets/Img/pertenencia_cocodrilo.png', name: '4_patas' },
      { imagen: 'assets/Img/pertenencia_zorro.png', name: '4_patas' },
      { imagen: 'assets/Img/pertenencia_alpaca.png', name: '4_patas' },
      { imagen: 'assets/Img/pertenencia_tortuga.png', name: '4_patas' },
    ];

    this.animalesNivel3 = [
      { imagen: 'assets/Img/pertenencia_elefante.png', name: 'loudSound' },
      { imagen: 'assets/Img/pertenencia_vaca.png', name: 'loudSound' },
      { imagen: 'assets/Img/pertenencia_lobo.png', name: 'loudSound' },
      { imagen: 'assets/Img/pertenencia_serpiente.png', name: 'weakSound' },
      { imagen: 'assets/Img/pertenencia_pollo.png', name: 'weakSound' },
      { imagen: 'assets/Img/pertenencia_cuy.png', name: 'weakSound' },
    ];

    this.setCarnivoros = [];
    this.setHerbivoros = [];
    this.set2Paws = [];
    this.set3Paws = [];
    this.weakSound = [];
    this.loudSound = [];

    this.animales.sort(function () {
      return Math.random() - 0.5;
    });
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

  dropCarnivoro(event: CdkDragDrop<string[]>) {
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

      let cont = 0;
      for (let i in event.container.data) {
        let valor: any;
        valor = event.container.data[i];
        var name: String;
        name = valor.name;
        if (name != 'carnivoro') {
          let animal: any;
          var index = Number(i);
          animal = this.setCarnivoros[i];
          this.setCarnivoros.splice(index, 1);
          this.animales.push(animal);

          Swal.fire({
            html: "<img src='assets/Img/carita_triste.jpg' style='width:100px;'> <p style='margin-top:25px;'>Grupo equivocado</p>",
          });
          cont--;
        } else {
          cont++;
        }
      }

      if (this.animales.length === 0 && cont >= 3) {
        this.win = 1;

        var animales = document.getElementById('animales');
        animales.style.opacity = '0.3';
        animales.style.pointerEvents = 'none';

        var animales = document.getElementById('setCarnivoros');
        animales.style.opacity = '0.3';
        animales.style.pointerEvents = 'none';

        var animales = document.getElementById('setHerbivoros');
        animales.style.opacity = '0.3';
        animales.style.pointerEvents = 'none';

        Swal.fire({
          html: "<h1 style='color:#1db31d;'>¡GANASTE!</h1> Juego terminado"
        });
      }
    }
  }

  dropHerbivoro(event: CdkDragDrop<string[]>) {
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

      let cont = 0;

      for (let i in event.container.data) {
        let valor: any;
        valor = event.container.data[i];
        var name: String;
        name = valor.name;
        if (name != 'herbivoro') {
          let animal: any;
          var index = Number(i);
          animal = this.setHerbivoros[i];
          this.setHerbivoros.splice(index, 1);
          this.animales.push(animal);

          Swal.fire({
            html: "<img src='assets/Img/carita_triste.jpg' style='width:100px;'> <p style='margin-top:25px;'>Grupo equivocado</p>",
          });
          cont--;
        } else {
          cont++;
        }
      }

      if (this.animales.length === 0 && cont >= 4) {
        this.win = 1;

        var animales = document.getElementById('animales');
        animales.style.opacity = '0.3';
        animales.style.pointerEvents = 'none';

        var animales = document.getElementById('setCarnivoros');
        animales.style.opacity = '0.3';
        animales.style.pointerEvents = 'none';

        var animales = document.getElementById('setHerbivoros');
        animales.style.opacity = '0.3';
        animales.style.pointerEvents = 'none';

        Swal.fire({
          html: "<h1 style='color:#1db31d;'>¡GANASTE!</h1> Juego terminado"
        });
      }
    }
  }

  drop2Paws(event: CdkDragDrop<string[]>) {
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

      let cont = 0;
      for (let i in event.container.data) {
        let valor: any;
        valor = event.container.data[i];
        var name: String;
        name = valor.name;
        if (name != '2_patas') {
          let animal: any;
          var index = Number(i);
          animal = this.set2Paws[i];
          this.set2Paws.splice(index, 1);
          this.animalesNivel2.push(animal);

          Swal.fire({
            html: "<img src='assets/Img/carita_triste.jpg' style='width:100px;'> <p style='margin-top:25px;'>Grupo equivocado</p>",
          });
          cont--;
        } else {
          cont++;
        }
      }

      if (this.animalesNivel2.length === 0 && cont >= 4) {
        this.win = 1;

        var animalesNivel2 = document.getElementById('animalesNivel2');
        animalesNivel2.style.opacity = '0.3';
        animalesNivel2.style.pointerEvents = 'none';

        var set2Paws = document.getElementById('set2Paws');
        set2Paws.style.opacity = '0.3';
        set2Paws.style.pointerEvents = 'none';

        var set3Paws = document.getElementById('set3Paws');
        set3Paws.style.opacity = '0.3';
        set3Paws.style.pointerEvents = 'none';

        Swal.fire({
          html: "<h1 style='color:#1db31d;'>¡GANASTE!</h1> Juego terminado"
        });
      }
    }
  }

  drop4Paws(event: CdkDragDrop<string[]>) {
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
      let cont = 0;

      for (let i in event.container.data) {
        let valor: any;
        valor = event.container.data[i];
        var name: String;
        name = valor.name;
        if (name != '4_patas') {
          let animal: any;
          var index = Number(i);
          animal = this.set3Paws[i];
          this.set3Paws.splice(index, 1);
          this.animalesNivel2.push(animal);

          Swal.fire({
            html: "<img src='assets/Img/carita_triste.jpg' style='width:100px;'> <p style='margin-top:25px;'>Grupo equivocado</p>",
          });
          cont--;
        } else {
          cont++;
        }
      }

      if (this.animalesNivel2.length === 0 && cont >= 4) {
        this.win = 1;

        var animalesNivel2 = document.getElementById('animalesNivel2');
        animalesNivel2.style.opacity = '0.3';
        animalesNivel2.style.pointerEvents = 'none';

        var set2Paws = document.getElementById('set2Paws');
        set2Paws.style.opacity = '0.3';
        set2Paws.style.pointerEvents = 'none';

        var set3Paws = document.getElementById('set3Paws');
        set3Paws.style.opacity = '0.3';
        set3Paws.style.pointerEvents = 'none';

        Swal.fire({
          html: "<h1 style='color:#1db31d;'>¡GANASTE!</h1> Juego terminado"
        });
      }
    }
  }

  dropLoudSound(event: CdkDragDrop<string[]>) {
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

      let cont = 0;

      for (let i in event.container.data) {
        let valor: any;
        valor = event.container.data[i];
        var name: String;
        name = valor.name;
        if (name != 'loudSound') {
          let animal: any;
          var index = Number(i);
          animal = this.loudSound[i];
          this.loudSound.splice(index, 1);
          this.animalesNivel3.push(animal);

          Swal.fire({
            html: "<img src='assets/Img/carita_triste.jpg' style='width:100px;'> <p style='margin-top:25px;'>Grupo equivocado</p>",
          });
          cont--;
        } else {
          cont++;
        }
      }

      if (this.animalesNivel3.length === 0 && cont >= 3) {
        this.win = 1;

        var animalesNivel3 = document.getElementById('animalesNivel3');
        animalesNivel3.style.opacity = '0.3';
        animalesNivel3.style.pointerEvents = 'none';

        var loudSound = document.getElementById('loudSound');
        loudSound.style.opacity = '0.3';
        loudSound.style.pointerEvents = 'none';

        var weakSound = document.getElementById('weakSound');
        weakSound.style.opacity = '0.3';
        weakSound.style.pointerEvents = 'none';

        Swal.fire({
          html: "<h1 style='color:#1db31d;'>¡GANASTE!</h1> Juego terminado"
        });
      }
    }
  }

  dropWeakSound(event: CdkDragDrop<string[]>) {
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

      let cont = 0;

      for (let i in event.container.data) {
        let valor: any;
        valor = event.container.data[i];
        var name: String;
        name = valor.name;
        if (name != 'weakSound') {
          let animal: any;
          var index = Number(i);
          animal = this.weakSound[i];
          this.weakSound.splice(index, 1);
          this.animalesNivel3.push(animal);
          Swal.fire({
            html: "<img src='assets/Img/carita_triste.jpg' style='width:100px;'> <p style='margin-top:25px;'>Grupo equivocado</p>",
          });
          cont--;
        } else {
          cont++;
        }
      }

      if (this.animalesNivel3.length === 0 && cont >= 3) {
        this.win = 1;

        var animalesNivel3 = document.getElementById('animalesNivel3');
        animalesNivel3.style.opacity = '0.3';
        animalesNivel3.style.pointerEvents = 'none';

        var loudSound = document.getElementById('loudSound');
        loudSound.style.opacity = '0.3';
        loudSound.style.pointerEvents = 'none';

        var weakSound = document.getElementById('weakSound');
        weakSound.style.opacity = '0.3';
        weakSound.style.pointerEvents = 'none';

        Swal.fire({
          html: "<h1 style='color:#1db31d;'>¡GANASTE!</h1> Juego terminado"
        });
      }
    }
  }

  resetear(show) {
    this.win = 0;
    if (show === 'Nivel 1') {
      this.habilitar = 1;
      setTimeout(() => {
        var animales = document.getElementById('animales');
        animales.style.opacity = '1';
        animales.style.pointerEvents = 'inherit';

        var animales = document.getElementById('setCarnivoros');
        animales.style.opacity = '1';
        animales.style.pointerEvents = 'inherit';

        var animales = document.getElementById('setHerbivoros');
        animales.style.opacity = '1';
        animales.style.pointerEvents = 'inherit';
      }, 200);
      this.animales = [
        { imagen: 'assets/Img/pertenencia_leon.png', name: 'carnivoro' },
        { imagen: 'assets/Img/pertenencia_tigre.png', name: 'carnivoro' },
        { imagen: 'assets/Img/pertenencia_condor.png', name: 'carnivoro' },
        { imagen: 'assets/Img/pertenencia_venado.png', name: 'herbivoro' },
        { imagen: 'assets/Img/pertenencia_cabra.png', name: 'herbivoro' },
        { imagen: 'assets/Img/pertenencia_jirafa.png', name: 'herbivoro' },
        { imagen: 'assets/Img/pertenencia_cuy.png', name: 'herbivoro' },
      ];

      this.animales.sort(function () {
        return Math.random() - 0.5;
      });

      this.setCarnivoros = [];
      this.setHerbivoros = [];
    } else if (show === 'Nivel 2') {
      this.habilitar = 2;
      setTimeout(() => {
        var animales = document.getElementById('animalesNivel2');
        animales.style.opacity = '1';
        animales.style.pointerEvents = 'inherit';

        var animales = document.getElementById('set2Paws');
        animales.style.opacity = '1';
        animales.style.pointerEvents = 'inherit';

        var animales = document.getElementById('set3Paws');
        animales.style.opacity = '1';
        animales.style.pointerEvents = 'inherit';
      }, 200);
      this.animalesNivel2 = [
        { imagen: 'assets/Img/pertenencia_avestruz.png', name: '2_patas' },
        { imagen: 'assets/Img/pertenencia_pato.png', name: '2_patas' },
        { imagen: 'assets/Img/pertenencia_flamenco.png', name: '2_patas' },
        { imagen: 'assets/Img/pertenencia_pinguino.png', name: '2_patas' },
        { imagen: 'assets/Img/pertenencia_cocodrilo.png', name: '4_patas' },
        { imagen: 'assets/Img/pertenencia_zorro.png', name: '4_patas' },
        { imagen: 'assets/Img/pertenencia_alpaca.png', name: '4_patas' },
        { imagen: 'assets/Img/pertenencia_tortuga.png', name: '4_patas' },
      ];

      this.animalesNivel2.sort(function () {
        return Math.random() - 0.5;
      });

      this.set2Paws = [];
      this.set3Paws = [];
    } else if (show === 'Nivel 3') {
      this.habilitar = 3;
      setTimeout(() => {
        var animales = document.getElementById('animalesNivel3');
        animales.style.opacity = '1';
        animales.style.pointerEvents = 'inherit';

        var animales = document.getElementById('loudSound');
        animales.style.opacity = '1';
        animales.style.pointerEvents = 'inherit';

        var animales = document.getElementById('weakSound');
        animales.style.opacity = '1';
        animales.style.pointerEvents = 'inherit';
      }, 200);
      this.animalesNivel3 = [
        { imagen: 'assets/Img/pertenencia_elefante.png', name: 'loudSound' },
        { imagen: 'assets/Img/pertenencia_vaca.png', name: 'loudSound' },
        { imagen: 'assets/Img/pertenencia_lobo.png', name: 'loudSound' },
        { imagen: 'assets/Img/pertenencia_serpiente.png', name: 'weakSound' },
        { imagen: 'assets/Img/pertenencia_pollo.png', name: 'weakSound' },
        { imagen: 'assets/Img/pertenencia_cuy.png', name: 'weakSound' },
      ];

      this.animalesNivel3.sort(function () {
        return Math.random() - 0.5;
      });

      this.loudSound = [];
      this.weakSound = [];
    }
  }
}
