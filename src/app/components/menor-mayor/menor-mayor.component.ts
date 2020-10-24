import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import Swal from 'sweetalert2';

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
  signo1: any[];
  signo2: any[];
  signo3: any[];
  signo4: any[];
  signo5: any[];
  signo6: any[];
  win:number;

  constructor() { }

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
    this.signo1 = [];
    this.signo2 = [];
    this.signo3 = [];
    this.signo4 = [];
    this.signo5 = [];
    this.signo6 = [];
    this.win = 0;

    this.done = [
      { imagen: 'assets/Img/signo_igual.png', value: '=', id: '1' },
      { imagen: 'assets/Img/signo_mayor.png', value: '>', id: '2' },
      { imagen: 'assets/Img/signo_menor.png', value: '<', id: '3' },
      { imagen: 'assets/Img/signo_igual.png', value: '=', id: '4' },
      { imagen: 'assets/Img/signo_mayor.png', value: '>', id: '5' },
      { imagen: 'assets/Img/signo_menor.png', value: '<', id: '6' },
      { imagen: 'assets/Img/signo_igual.png', value: '=', id: '7' },
      { imagen: 'assets/Img/signo_mayor.png', value: '>', id: '8' },
      { imagen: 'assets/Img/signo_menor.png', value: '<', id: '9' },
      { imagen: 'assets/Img/signo_igual.png', value: '=', id: '10' },
      { imagen: 'assets/Img/signo_mayor.png', value: '>', id: '11' },
      { imagen: 'assets/Img/signo_menor.png', value: '<', id: '12' },
      { imagen: 'assets/Img/signo_igual.png', value: '=', id: '13' },
      { imagen: 'assets/Img/signo_mayor.png', value: '>', id: '14' },
      { imagen: 'assets/Img/signo_menor.png', value: '<', id: '15' },
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


  border(i) {
    var signo = document.getElementById(i);
    signo.style.border = '8px solid #24ce22';
  }

  wrong(i) {
    var error = document.getElementById(i);
    error.style.border = '8px solid rgb(220 8 8)';
  }

  drop(event: CdkDragDrop<string[]>) {
    if (this.signo1.length <= 1 && this.signo2.length <= 1 && this.signo3.length <= 1 && this.signo4.length <= 1
      && this.signo5.length <= 1 && this.signo6.length <= 1) {
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

        if (this.signo1.length >= 2) {
          let valor: any;
          valor = this.signo1[1];
          this.signo1.splice(1, 1);
          this.done.push(valor);
        } else if (this.signo2.length >= 2) {
          let valor: any;
          valor = this.signo2[1];
          this.signo2.splice(1, 1);
          this.done.push(valor);
        } else if (this.signo3.length >= 2) {
          let valor: any;
          valor = this.signo3[1];
          this.signo3.splice(1, 1);
          this.done.push(valor);
        } else if (this.signo4.length >= 2) {
          let valor: any;
          valor = this.signo4[1];
          this.signo4.splice(1, 1);
          this.done.push(valor);
        } else if (this.signo5.length >= 2) {
          let valor: any;
          valor = this.signo5[1];
          this.signo5.splice(1, 1);
          this.done.push(valor);
        } else if (this.signo6.length >= 2) {
          let valor: any;
          valor = this.signo6[1];
          this.signo6.splice(1, 1);
          this.done.push(valor);
        }

        this.cont = 0;
        if (this.done.length === 9) {
          var arrayAnswers = [];

          arrayAnswers.push(this.signo1[0]);
          arrayAnswers.push(this.signo2[0]);
          arrayAnswers.push(this.signo3[0]);
          arrayAnswers.push(this.signo4[0]);
          arrayAnswers.push(this.signo5[0]);
          arrayAnswers.push(this.signo6[0]);

          setTimeout(() => {
            for (let index in arrayAnswers) {
              let valor = arrayAnswers[index];
              var signo: String;
              signo = valor.value;

              if (signo === '>') {

                if (
                  this.selectedNivel === 'Nivel 1' &&
                  this.nivel1[index].number > this.nivel1_1[index].number
                ) {
                  this.cont++;
                  setTimeout(() => {
                    this.border(index);
                  }, 500);
                } else if (
                  this.selectedNivel === 'Nivel 2' &&
                  this.nivel2[index].number > this.nivel2_1[index].number
                ) {
                  this.cont++;
                  setTimeout(() => {
                    this.border(index);
                  }, 500);

                } else if (
                  this.selectedNivel === 'Nivel 3' &&
                  this.nivel3[index].number > this.nivel3_1[index].number
                ) {
                  this.cont++;
                  setTimeout(() => {
                    this.border(index);
                  }, 500);

                } else {
                  setTimeout(() => {
                    this.wrong(index);
                  }, 500);
                }

              } else if (signo === '<') {

                if (
                  this.selectedNivel === 'Nivel 1' &&
                  this.nivel1[index].number < this.nivel1_1[index].number
                ) {
                  this.cont++;
                  setTimeout(() => {
                    this.border(index);
                  }, 500);
                } else if (
                  this.selectedNivel === 'Nivel 2' &&
                  this.nivel2[index].number < this.nivel2_1[index].number
                ) {
                  this.cont++;
                  setTimeout(() => {
                    this.border(index);
                  }, 500);
                  console.log(this.cont, "cont");
                } else if (
                  this.selectedNivel === 'Nivel 3' &&
                  this.nivel3[index].number < this.nivel3_1[index].number
                ) {
                  this.cont++;
                  setTimeout(() => {
                    this.border(index);
                  }, 500);

                } else {
                  setTimeout(() => {
                    this.wrong(index);
                  }, 500);
                }
              } else if (signo === '=') {
                if (
                  this.selectedNivel === 'Nivel 1' &&
                  this.nivel1[index].number === this.nivel1_1[index].number
                ) {
                  this.cont++;
                  setTimeout(() => {
                    this.border(index);
                  }, 500);
                } else if (
                  this.selectedNivel === 'Nivel 2' &&
                  this.nivel2[index].number === this.nivel2_1[index].number
                ) {
                  this.cont++;
                  setTimeout(() => {
                    this.border(index);
                  }, 500);
                  console.log(this.cont, "cont");
                } else if (
                  this.selectedNivel === 'Nivel 3' &&
                  this.nivel3[index].number === this.nivel3_1[index].number
                ) {
                  this.cont++;
                  setTimeout(() => {
                    this.border(index);
                  }, 500);

                } else {
                  setTimeout(() => {
                    this.wrong(index);
                  }, 500);
                }
              }
            }
          }, 500);

          setTimeout(() => {
            Swal.fire({
                html: "<h1 style='color:#1db31d;'>¡JUEGO TERMINADO!</h1> <br> Tienes " + this.cont + " respuestas correctas, elige otro nivel o presiona 'Resetear' para volver a jugar"
            });

            this.win = 1;
          }, 700);

          var answers = document.getElementById('answers');
          answers.style.pointerEvents = 'none';

          var signos = document.getElementById('signos');
          signos.style.opacity = '0.3';
          signos.style.pointerEvents = 'none';
        }
      }
    }
  }



  resetear(show) {
    this.cont = 0;
    this.win = 0;
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

    this.signo1.pop();
    this.signo2.pop();
    this.signo3.pop();
    this.signo4.pop();
    this.signo5.pop();
    this.signo6.pop();

    setTimeout(() => {
      var answers = document.getElementById('answers');
      answers.style.opacity = '1';
      answers.style.pointerEvents = 'inherit';

      var signos = document.getElementById('signos');
      signos.style.opacity = '1';
      signos.style.pointerEvents = 'inherit';
    }, 500);

    if (show === 'Nivel 1') {
      this.habilitar = 1;

    } else if (show === 'Nivel 2') {
      this.habilitar = 2;

    } else if (show === 'Nivel 3') {
      this.habilitar = 3;

    }
  }
}
