import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-menor-mayor',
  templateUrl: './menor-mayor.component.html',
  styleUrls: ['./menor-mayor.component.sass'],
})
export class MenorMayorComponent implements OnInit {
  nivels: any[];
  selectedNivel: string;
  habilitar: number;
  arrays;
  todo1;
  todo2;
  todo3;
  todo4;
  todo5;
  todo6;
  cont: number;
  done: any[];
  nivel1: any[];
  nivel2: any[];
  nivel3: any[];
  nivel1_1: any[];
  nivel2_1: any[];
  nivel3_1: any[];

  constructor() {}

  ngOnInit(): void {
    this.nivels = [
      { nivel: 'Nivel 1', selected: false },
      { nivel: 'Nivel 2', selected: false },
      { nivel: 'Nivel 3', selected: false },
    ];

    this.todo1 = [];
    this.todo2 = [];
    this.todo3 = [];
    this.todo4 = [];
    this.todo5 = [];
    this.todo6 = [];

    this.done = [
      { imagen: 'assets/Img/signo_igual.png', value: '=' },
      { imagen: 'assets/Img/signo_mayor.png', value: '>' },
      { imagen: 'assets/Img/signo_menor.png', value: '<' },
      { imagen: 'assets/Img/signo_igual.png', value: '=' },
      { imagen: 'assets/Img/signo_mayor.png', value: '>' },
      { imagen: 'assets/Img/signo_menor.png', value: '<' },
      { imagen: 'assets/Img/signo_igual.png', value: '=' },
      { imagen: 'assets/Img/signo_mayor.png', value: '>' },
      { imagen: 'assets/Img/signo_menor.png', value: '<' },
      { imagen: 'assets/Img/signo_igual.png', value: '=' },
      { imagen: 'assets/Img/signo_mayor.png', value: '>' },
      { imagen: 'assets/Img/signo_menor.png', value: '<' },
      { imagen: 'assets/Img/signo_igual.png', value: '=' },
      { imagen: 'assets/Img/signo_mayor.png', value: '>' },
      { imagen: 'assets/Img/signo_menor.png', value: '<' },
    ];

    this.nivel1 = [
      { imagen: 'assets/Img/pez_1.png', number: 1 },
      { imagen: 'assets/Img/ovejas_2.png', number: 2 },
      { imagen: 'assets/Img/mariposas_3.png', number: 3 },
      { imagen: 'assets/Img/perros_4.png', number: 4 },
      { imagen: 'assets/Img/palomas_5.png', number: 5 },
      { imagen: 'assets/Img/contar_6.png', number: 6 },
      { imagen: 'assets/Img/contar_7.png', number: 7 },
      { imagen: 'assets/Img/contar_8.png', number: 8 },
      { imagen: 'assets/Img/contar_9.png', number: 9 },
      { imagen: 'assets/Img/contar_10.png', number: 10 },
    ];

    this.nivel1_1 = [
      { imagen: 'assets/Img/pez_1.png', number: 1 },
      { imagen: 'assets/Img/ovejas_2.png', number: 2 },
      { imagen: 'assets/Img/mariposas_3.png', number: 3 },
      { imagen: 'assets/Img/perros_4.png', number: 4 },
      { imagen: 'assets/Img/palomas_5.png', number: 5 },
      { imagen: 'assets/Img/contar_6.png', number: 6 },
      { imagen: 'assets/Img/contar_7.png', number: 7 },
      { imagen: 'assets/Img/contar_8.png', number: 8 },
      { imagen: 'assets/Img/contar_9.png', number: 9 },
      { imagen: 'assets/Img/contar_10.png', number: 10 },
    ];

    this.nivel2 = [
      { imagen: 'assets/Img/contar_11.png', number: 11 },
      { imagen: 'assets/Img/contar_12.png', number: 12 },
      { imagen: 'assets/Img/contar_13.png', number: 13 },
      { imagen: 'assets/Img/contar_14.png', number: 14 },
      { imagen: 'assets/Img/contar_15.png', number: 15 },
      { imagen: 'assets/Img/contar_16.png', number: 16 },
      { imagen: 'assets/Img/contar_17.png', number: 17 },
      { imagen: 'assets/Img/contar_18.png', number: 18 },
      { imagen: 'assets/Img/contar_19.png', number: 19 },
      { imagen: 'assets/Img/contar_20.png', number: 20 },
    ];

    this.nivel2_1 = [
      { imagen: 'assets/Img/contar_11.png', number: 11 },
      { imagen: 'assets/Img/contar_12.png', number: 12 },
      { imagen: 'assets/Img/contar_13.png', number: 13 },
      { imagen: 'assets/Img/contar_14.png', number: 14 },
      { imagen: 'assets/Img/contar_15.png', number: 15 },
      { imagen: 'assets/Img/contar_16.png', number: 16 },
      { imagen: 'assets/Img/contar_17.png', number: 17 },
      { imagen: 'assets/Img/contar_18.png', number: 18 },
      { imagen: 'assets/Img/contar_19.png', number: 19 },
      { imagen: 'assets/Img/contar_20.png', number: 20 },
    ];

    this.nivel3 = [
      { imagen: 'assets/Img/contar_10.png', number: 10 },
      { imagen: 'assets/Img/contar_20.png', number: 20 },
      { imagen: 'assets/Img/contar_30.png', number: 30 },
      { imagen: 'assets/Img/contar_40.png', number: 40 },
      { imagen: 'assets/Img/contar_50.png', number: 50 },
      { imagen: 'assets/Img/contar_60.png', number: 60 },
      { imagen: 'assets/Img/contar_70.png', number: 70 },
      { imagen: 'assets/Img/contar_80.png', number: 80 },
      { imagen: 'assets/Img/contar_90.png', number: 90 },
      { imagen: 'assets/Img/contar_100.png', number: 100 },
    ];

    this.nivel3_1 = [
      { imagen: 'assets/Img/contar_10.png', number: 10 },
      { imagen: 'assets/Img/contar_20.png', number: 20 },
      { imagen: 'assets/Img/contar_30.png', number: 30 },
      { imagen: 'assets/Img/contar_40.png', number: 40 },
      { imagen: 'assets/Img/contar_50.png', number: 50 },
      { imagen: 'assets/Img/contar_60.png', number: 60 },
      { imagen: 'assets/Img/contar_70.png', number: 70 },
      { imagen: 'assets/Img/contar_80.png', number: 80 },
      { imagen: 'assets/Img/contar_90.png', number: 90 },
      { imagen: 'assets/Img/contar_100.png', number: 100 },
    ];

    this.mixNumbers();
  }

  mixNumbers() {
    this.nivel1.sort(function () {
      return Math.random() - 0.5;
    });

    this.nivel1_1.sort(function () {
      return Math.random() - 0.5;
    });

    this.nivel2.sort(function () {
      return Math.random() - 0.5;
    });

    this.nivel2_1.sort(function () {
      return Math.random() - 0.5;
    });

    this.nivel3.sort(function () {
      return Math.random() - 0.5;
    });

    this.nivel3_1.sort(function () {
      return Math.random() - 0.5;
    });
  }

  drop(event: CdkDragDrop<string[]>) {
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
      this.cont = 0;
      if (event.container.data.length === 6) {
        for (let i in event.container.data) {
          let valor: any;
          valor = event.container.data[i];
          var signo: String;
          signo = valor.value;

          if (signo === '>') {
            if (
              this.selectedNivel === 'Nivel 1' &&
              this.nivel1[i].number > this.nivel1_1[i].number
            ) {
              this.cont++;
            } else if (
              this.selectedNivel === 'Nivel 2' &&
              this.nivel2[i].number > this.nivel2_1[i].number
            ) {
              this.cont++;
            } else if (
              this.selectedNivel === 'Nivel 3' &&
              this.nivel3[i].number > this.nivel3_1[i].number
            ) {
              this.cont++;
            }
          } else if (signo === '<') {
            if (
              this.selectedNivel === 'Nivel 1' &&
              this.nivel1[i].number < this.nivel1_1[i].number
            ) {
              this.cont++;
            } else if (
              this.selectedNivel === 'Nivel 2' &&
              this.nivel2[i].number < this.nivel2_1[i].number
            ) {
              this.cont++;
            } else if (
              this.selectedNivel === 'Nivel 3' &&
              this.nivel3[i].number < this.nivel3_1[i].number
            ) {
              this.cont++;
            }
          } else if (signo === '=') {
            if (
              this.selectedNivel === 'Nivel 1' &&
              this.nivel1[i].number === this.nivel1_1[i].number
            ) {
              this.cont++;
            } else if (
              this.selectedNivel === 'Nivel 2 ' &&
              this.nivel2[i].number === this.nivel2_1[i].number
            ) {
              this.cont++;
            } else if (
              this.selectedNivel === 'Nivel 3 ' &&
              this.nivel3[i].number === this.nivel3_1[i].number
            ) {
              this.cont++;
            }
          }
        }
        setTimeout(() => {
          alert(
            'Tienes ' +
              this.cont +
              " respuestas correctas, elige otro nivel o presiona 'Iniciar Juego' para volver a jugar"
          );
        }, 500);

        var answers = document.getElementById('answers');
        answers.style.opacity = '0.3';
        answers.style.pointerEvents = 'none';

        var signos = document.getElementById('signos');
        signos.style.opacity = '0.3';
        signos.style.pointerEvents = 'none';
      }
    }
  }

  resetear(show) {
    this.cont = 0;
    this.mixNumbers();

    this.done = [
      { imagen: 'assets/Img/signo_igual.png', value: '=' },
      { imagen: 'assets/Img/signo_mayor.png', value: '>' },
      { imagen: 'assets/Img/signo_menor.png', value: '<' },
      { imagen: 'assets/Img/signo_igual.png', value: '=' },
      { imagen: 'assets/Img/signo_mayor.png', value: '>' },
      { imagen: 'assets/Img/signo_menor.png', value: '<' },
      { imagen: 'assets/Img/signo_igual.png', value: '=' },
      { imagen: 'assets/Img/signo_mayor.png', value: '>' },
      { imagen: 'assets/Img/signo_menor.png', value: '<' },
      { imagen: 'assets/Img/signo_igual.png', value: '=' },
      { imagen: 'assets/Img/signo_mayor.png', value: '>' },
      { imagen: 'assets/Img/signo_menor.png', value: '<' },
      { imagen: 'assets/Img/signo_igual.png', value: '=' },
      { imagen: 'assets/Img/signo_mayor.png', value: '>' },
      { imagen: 'assets/Img/signo_menor.png', value: '<' },
    ];

    if (show === 'Nivel 1') {
      this.habilitar = 1;

      while (this.todo1.length > 0) {
        this.todo1.pop();
      }

      setTimeout(() => {
        var answers = document.getElementById('answers');
        answers.style.opacity = '1';
        answers.style.pointerEvents = 'inherit';

        var signos = document.getElementById('signos');
        signos.style.opacity = '1';
        signos.style.pointerEvents = 'inherit';
      }, 500);
    } else if (show === 'Nivel 2') {
      this.habilitar = 2;

      while (this.todo1.length > 0) {
        this.todo1.pop();
      }

      setTimeout(() => {
        var answers = document.getElementById('answers');
        answers.style.opacity = '1';
        answers.style.pointerEvents = 'inherit';

        var signos = document.getElementById('signos');
        signos.style.opacity = '1';
        signos.style.pointerEvents = 'inherit';
      }, 500);
    } else if (show === 'Nivel 3') {
      this.habilitar = 3;

      while (this.todo1.length > 0) {
        this.todo1.pop();
      }

      setTimeout(() => {
        var answers = document.getElementById('answers');
        answers.style.opacity = '1';
        answers.style.pointerEvents = 'inherit';

        var signos = document.getElementById('signos');
        signos.style.opacity = '1';
        signos.style.pointerEvents = 'inherit';
      }, 500);
    }
  }
}
