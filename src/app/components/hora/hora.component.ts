import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-hora',
  templateUrl: './hora.component.html',
  styleUrls: ['./hora.component.sass'],
})
export class HoraComponent implements OnInit {
  nivels: any[];
  cont: number;
  cont2: number;
  cont3: number;
  selectedNivel: string;
  horaNivel1_1: any[];
  horaNivel1_2: any[];
  horaNivel1_3: any[];
  horaNivel2_1: any[];
  horaNivel2_2: any[];
  horaNivel2_3: any[];
  horaNivel3_1: any[];
  horaNivel3_2: any[];
  horaNivel3_3: any[];
  habilitar: number;
  win:number;

  constructor() {}

  ngOnInit(): void {
    this.cont = 0;
    this.cont2 = 0;
    this.cont3 = 0;
    this.win = 0;

    this.nivels = [
      { nivel: 'Nivel 1', selected: false },
      { nivel: 'Nivel 2', selected: false },
      { nivel: 'Nivel 3', selected: false },
    ];

    this.horaNivel1_1 = [
      { imagen: 'assets/Img/hora_5.png', answer: 5 },
      { imagen: 'assets/Img/hora_12.png', answer: 12 },
      { imagen: 'assets/Img/hora_2.png', answer: 2 },
    ];

    this.horaNivel1_2 = [
      { imagen: 'assets/Img/hora_6.png', answer: 6 },
      { imagen: 'assets/Img/hora_7.png', answer: 7 },
      { imagen: 'assets/Img/hora_10.png', answer: 10 },
    ];

    this.horaNivel1_3 = [
      { imagen: 'assets/Img/hora_1_1.png', answer: 1 },
      { imagen: 'assets/Img/hora_8.png', answer: 8 },
      { imagen: 'assets/Img/hora_9.png', answer: 9 },
    ];

    this.horaNivel2_1 = [
      { imagen: 'assets/Img/hora_media_2.png', answer: 2.3 },
      { imagen: 'assets/Img/hora_media_8.png', answer: 8.3 },
      { imagen: 'assets/Img/hora_media_9.png', answer: 9.3 },
    ];

    this.horaNivel2_2 = [
      { imagen: 'assets/Img/hora_media_5.png', answer: 5.3 },
      { imagen: 'assets/Img/hora_media_10.png', answer: 10.3 },
      { imagen: 'assets/Img/hora_media_3.png', answer: 3.3 },
    ];

    this.horaNivel2_3 = [
      { imagen: 'assets/Img/hora_media_1.png', answer: 1.3 },
      { imagen: 'assets/Img/hora_media_4.png', answer: 4.3 },
      { imagen: 'assets/Img/hora_media_12.png', answer: 12.3 },
    ];

    this.horaNivel3_1 = [
      { imagen: 'assets/Img/hora_cuarto_4.png', answer: 4.15 },
      { imagen: 'assets/Img/hora_cuarto_5.png', answer: 5.15 },
      { imagen: 'assets/Img/hora_cuarto_12.png', answer: 12.15 },
    ];

    this.horaNivel3_2 = [
      { imagen: 'assets/Img/hora_cuarto_10.png', answer: 10.15 },
      { imagen: 'assets/Img/hora_cuarto_3.png', answer: 3.15 },
      { imagen: 'assets/Img/hora_cuarto_11.png', answer: 11.15 },
    ];

    this.horaNivel3_3 = [
      { imagen: 'assets/Img/hora_cuarto_8.png', answer: 8.3 },
      { imagen: 'assets/Img/hora_cuarto_1.png', answer: 1.15 },
      { imagen: 'assets/Img/hora_cuarto_6.png', answer: 6.15 },
    ];

    this.mixHours();
  }

  mixHours() {
    this.horaNivel1_1.sort(function () {
      return Math.random() - 0.5;
    });
    this.horaNivel1_2.sort(function () {
      return Math.random() - 0.5;
    });
    this.horaNivel1_3.sort(function () {
      return Math.random() - 0.5;
    });
    this.horaNivel2_1.sort(function () {
      return Math.random() - 0.5;
    });
    this.horaNivel2_2.sort(function () {
      return Math.random() - 0.5;
    });
    this.horaNivel2_3.sort(function () {
      return Math.random() - 0.5;
    });
    this.horaNivel3_1.sort(function () {
      return Math.random() - 0.5;
    });
    this.horaNivel3_2.sort(function () {
      return Math.random() - 0.5;
    });
    this.horaNivel3_3.sort(function () {
      return Math.random() - 0.5;
    });
  }

  answerCorrect(hora) {
    if (hora === 12) {
      Swal.fire({
        html: "<h1 style='color:#1db31d;'>¡EXCELENTE!</h1> <br> Respuesta correcta"
      });
      var setCard1 = document.getElementById('setCard1');
      setCard1.style.opacity = '0.3';
      setCard1.style.pointerEvents = 'none';
      this.cont++;
    } else if (hora === 6) {
      Swal.fire({
        html: "<h1 style='color:#1db31d;'>¡EXCELENTE!</h1> <br> Respuesta correcta"
      });
      var setCard1 = document.getElementById('setCard2');
      setCard1.style.opacity = '0.3';
      setCard1.style.pointerEvents = 'none';
      this.cont++;
    } else if (hora === 9) {
      Swal.fire({
        html: "<h1 style='color:#1db31d;'>¡EXCELENTE!</h1> <br> Respuesta correcta"
      });
      var setCard1 = document.getElementById('setCard3');
      setCard1.style.opacity = '0.3';
      setCard1.style.pointerEvents = 'none';
      this.cont++;
    } else if (hora === 2.3) {
      Swal.fire({
        html: "<h1 style='color:#1db31d;'>¡EXCELENTE!</h1> <br> Respuesta correcta"
      });
      var set2Card1 = document.getElementById('set2Card1');
      set2Card1.style.opacity = '0.3';
      set2Card1.style.pointerEvents = 'none';
      this.cont2++;
    } else if (hora === 10.3) {
      Swal.fire({
        html: "<h1 style='color:#1db31d;'>¡EXCELENTE!</h1> <br> Respuesta correcta"
      });
      var set2Card2 = document.getElementById('set2Card2');
      set2Card2.style.opacity = '0.3';
      set2Card2.style.pointerEvents = 'none';
      this.cont2++;
    } else if (hora === 12.3) {
      Swal.fire({
        html: "<h1 style='color:#1db31d;'>¡EXCELENTE!</h1> <br> Respuesta correcta"
      });
      var set2Card3 = document.getElementById('set2Card3');
      set2Card3.style.opacity = '0.3';
      set2Card3.style.pointerEvents = 'none';
      this.cont2++;
    } else if (hora === 4.15) {
      Swal.fire({
        html: "<h1 style='color:#1db31d;'>¡EXCELENTE!</h1> <br> Respuesta correcta"
      });
      var set3Card1 = document.getElementById('set3Card1');
      set3Card1.style.opacity = '0.3';
      set3Card1.style.pointerEvents = 'none';
      this.cont3++;
    } else if (hora === 11.15) {
      Swal.fire({
        html: "<h1 style='color:#1db31d;'>¡EXCELENTE!</h1> <br> Respuesta correcta"
      });
      var set3Card2 = document.getElementById('set3Card2');
      set3Card2.style.opacity = '0.3';
      set3Card2.style.pointerEvents = 'none';
      this.cont3++;
    } else if (hora === 1.15) {
      Swal.fire({
        html: "<h1 style='color:#1db31d;'>¡EXCELENTE!</h1> <br> Respuesta correcta"
      });
      var set3Card3 = document.getElementById('set3Card3');
      set3Card3.style.opacity = '0.3';
      set3Card3.style.pointerEvents = 'none';
      this.cont3++;
    } else {
      Swal.fire({
        html: "<img src='assets/Img/carita_triste.jpg' style='width:100px;'> <br> <p style='margin-top:25px;'>Respuesta incorrecta, vuelva a intentarlo</p>",
      });
    }

    if (this.cont === 3 && this.selectedNivel === 'Nivel 1') {
      Swal.fire({
        html: "<h1 style='color:#1db31d;'>¡GANASTE!</h1> <br> Juego terminado"
      });
      this.win = 1;
    } else if (this.cont2 === 3 && this.selectedNivel === 'Nivel 2') {
      Swal.fire({
        html: "<h1 style='color:#1db31d;'>¡GANASTE!</h1> <br> Juego terminado"
      });
      this.win = 1;
    } else if (this.cont3 === 3 && this.selectedNivel === 'Nivel 3') {
      Swal.fire({
        html: "<h1 style='color:#1db31d;'>¡GANASTE!</h1> <br> Juego terminado"
      });
      this.win = 1;
    }
  }

  resetear(show) {
    this.win = 0;
    this.mixHours();
    if (show === 'Nivel 1') {
      this.habilitar = 1;
      var setCard1 = document.getElementById('setCard1');
      setCard1.style.opacity = '1';
      setCard1.style.pointerEvents = 'inherit';
      var setCard1 = document.getElementById('setCard2');
      setCard1.style.opacity = '1';
      setCard1.style.pointerEvents = 'inherit';
      var setCard1 = document.getElementById('setCard3');
      setCard1.style.opacity = '1';
      setCard1.style.pointerEvents = 'inherit';
    } else if (show === 'Nivel 2') {
      this.habilitar = 2;
      var set2Card1 = document.getElementById('set2Card1');
      set2Card1.style.opacity = '1';
      set2Card1.style.pointerEvents = 'inherit';
      var set2Card2 = document.getElementById('set2Card2');
      set2Card2.style.opacity = '1';
      set2Card2.style.pointerEvents = 'inherit';
      var set2Card3 = document.getElementById('set2Card3');
      set2Card3.style.opacity = '1';
      set2Card3.style.pointerEvents = 'inherit';
    } else if (show === 'Nivel 3') {
      this.habilitar = 3;
      var set3Card1 = document.getElementById('set3Card1');
      set3Card1.style.opacity = '1';
      set3Card1.style.pointerEvents = 'inherit';
      var set3Card2 = document.getElementById('set3Card2');
      set3Card2.style.opacity = '1';
      set3Card2.style.pointerEvents = 'inherit';
      var set3Card3 = document.getElementById('set3Card3');
      set3Card3.style.opacity = '1';
      set3Card3.style.pointerEvents = 'inherit';
    } else {
      this.habilitar = 3;
    }
  }
}
