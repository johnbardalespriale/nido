import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'jqueryui';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contabilidad-numerica',
  templateUrl: './contabilidad-numerica.component.html',
  styleUrls: ['./contabilidad-numerica.component.sass'],
})
export class ContabilidadNumericaComponent implements OnInit {
  nivels: any[];
  selectedNivel: string;
  habilitar: number;
  nivel1: any[];
  nivel2: any[];
  nivel3: any[];
  win: number;
  private currentImage: any;
  private currentImage2: any;
  private currentImage3: any;
  private answerImage: any;
  private answerImage2: any;
  private answerImage3: any;

  javascript() {

    const canvasEle =  <HTMLCanvasElement> document.getElementById('drawContainer');
    const context = canvasEle.getContext('2d');
    let startPosition = {x: 0, y: 0};
    let lineCoordinates = {x: 0, y: 0};
    let isDrawStart = false;
    
    const getClientOffset = (event) => {
        const {pageX, pageY} = event.touches ? event.touches[0] : event;
        const resto = ((pageY-600)*0.125) + 460;
        const x = pageX - 549;
        const y = pageY - resto;
        return {
           x,
           y
        } 
    }
    
    const drawLine = () => {
      context.beginPath();
      context.moveTo(startPosition.x, startPosition.y);
      context.lineTo(lineCoordinates.x, lineCoordinates.y);
      context.stroke();
    }
    
    const mouseDownListener = (event) => {
       startPosition = getClientOffset(event);
       isDrawStart = true;
    }
    
    const mouseMoveListener = (event) => {
      if(!isDrawStart) return;
      lineCoordinates = getClientOffset(event);
      clearCanvas();
      drawLine();
    }
    
    const mouseupListener = (event) => {
      isDrawStart = false;
    }
    
    const clearCanvas = () => {
       context.clearRect(0, 0, canvasEle.width, canvasEle.height);
    }

    canvasEle.addEventListener('mousedown', mouseDownListener);
    canvasEle.addEventListener('mousemove', mouseMoveListener);
    canvasEle.addEventListener('mouseup', mouseupListener);

    /*canvasEle.addEventListener('touchstart', mouseDownListener);
    canvasEle.addEventListener('touchmove', mouseMoveListener);
    canvasEle.addEventListener('touchend', mouseupListener);*/
  }

  answer: number;
  constructor() {
    this.answer = 0;
  }

  ngOnInit(): void {
    this.win = 0;

    this.nivels = [
      { nivel: 'Nivel 1', selected: false },
      { nivel: 'Nivel 2', selected: false },
      { nivel: 'Nivel 3', selected: false },
    ];

    this.nivel1 = [
      { imagen: 'assets/Img/contar_ovejas.png', number: 6 },
      { imagen: 'assets/Img/contar_ovejas_3.png', number: 3 },
      { imagen: 'assets/Img/contar_ovejas_5.png', number: 5 },
      { imagen: 'assets/Img/contar_ovejas_3.png', number: 3 },
      { imagen: 'assets/Img/contar_ovejas_5.png', number: 5 },
    ];

    this.nivel2 = [
      { imagen: 'assets/Img/contar_pajaros.png', number: 8 },
      { imagen: 'assets/Img/contar_pajaros_4.png', number: 4 },
      { imagen: 'assets/Img/contar_pajaros_2.png', number: 2 },
      { imagen: 'assets/Img/contar_pajaros_4.png', number: 4 },
      { imagen: 'assets/Img/contar_pajaros_2.png', number: 2 },
    ];

    this.nivel3 = [
      { imagen: 'assets/Img/contar_peces.png', number: 7 },
      { imagen: 'assets/Img/contar_peces_5.png', number: 6 },
      { imagen: 'assets/Img/contar_peces_3.png', number: 3 },
      { imagen: 'assets/Img/contar_peces_5.png', number: 5 },
      { imagen: 'assets/Img/contar_peces_3.png', number: 6 },
    ];
  }

   updateRandomImage() {
    const r = Math.floor(Math.random() * (this.nivel1.length - 1)) + 0;
    return this.nivel1[r];
  }

  updateRandomImage2() {
    const p = Math.floor(Math.random() * (this.nivel2.length - 1)) + 0;
    return this.nivel2[p];
  }

  updateRandomImage3() {
    const q = Math.floor(Math.random() * (this.nivel3.length - 1)) + 0;
    return this.nivel3[q];
  }

  getImage() {
    return this.currentImage.imagen;
  }

  getImage2() {
    return this.currentImage2.imagen;
  }

  getImage3() {
    return this.currentImage3.imagen;
  }

  getNumberImage() {
    return this.currentImage.number;
  }

  getNumberImage2() {
    return this.currentImage2.number;
  }

  getNumberImage3() {
    return this.currentImage3.number;
  }

  match(number) {
    this.answer = number;
  }

  matchCorrect(answer) {
    if (this.answer === answer) {
      Swal.fire({
        title: '¡EXCELENTE!',
        text: 'Respuesta correcta',
      });

    } else if (this.answer != 0) {
      Swal.fire({
        html: "<img src='assets/Img/carita_triste.jpg' style='width:100px;'> <p style='margin-top:25px;'>Respuesta erronea, vuelva a iniciar el juego</p>",
      });
    }
  }

  errorChoice() {
    Swal.fire({
      icon: 'error',
      text: 'Respuesta errónea',
    });
  }

  correctChoice(id, opcion) {
    if (this.answerImage === id && this.selectedNivel === 'Nivel 1' && opcion === 'opcion1') {
      Swal.fire({
        html: "<h1 style='color:#1db31d;'>¡EXCELENTE!</h1> Identificaste la cantidad de elementos correctamente"
      });
      this.win++;
      var numbers = document.getElementById('numbers');
      numbers.style.pointerEvents = 'none';
      numbers.style.opacity = '0.3';
    } else if (this.answerImage2 === id && this.selectedNivel === 'Nivel 1' && opcion === 'opcion2') {
      Swal.fire({
        html: "<h1 style='color:#1db31d;'>¡EXCELENTE!</h1> Identificaste la cantidad de elementos correctamente"
      });
      this.win++;
      var numbers = document.getElementById('numbers2');
      numbers.style.pointerEvents = 'none';
      numbers.style.opacity = '0.3';
    } else if (this.answerImage3 === id && this.selectedNivel === 'Nivel 1' && opcion === 'opcion3') {
      Swal.fire({
        html: "<h1 style='color:#1db31d;'>¡EXCELENTE!</h1> Identificaste la cantidad de elementos correctamente"
      });
      this.win++;
      var numbers = document.getElementById('numbers3');
      numbers.style.pointerEvents = 'none';
      numbers.style.opacity = '0.3';
    } else {
      Swal.fire({
        html: "<img src='assets/Img/carita_triste.jpg' style='width:100px;'> <p style='margin-top:25px;'>Respuesta incorrecta, vuelve a intentarlo</p>",
      });
    }
  }

  resetear(show) {
    this.answer = 0;
    this.win = 0;

    setTimeout(() => {
      this.currentImage = this.updateRandomImage();
      this.currentImage2 = this.updateRandomImage2();
      this.currentImage3 = this.updateRandomImage3();
      this.answerImage = this.getNumberImage();
      this.answerImage2 = this.getNumberImage2();
      this.answerImage3 = this.getNumberImage3();
    }, 1000);

    if (show === 'Nivel 1') {
      this.habilitar = 1;
      var numbers = document.getElementById('numbers');
      numbers.style.pointerEvents = 'inherit';
      numbers.style.opacity = '1';

      var numbers2 = document.getElementById('numbers2');
      numbers2.style.pointerEvents = 'inherit';
      numbers2.style.opacity = '1';

      var numbers3 = document.getElementById('numbers3');
      numbers3.style.pointerEvents = 'inherit';
      numbers3.style.opacity = '1';
    } else if (show === 'Nivel 2') {
      this.habilitar = 0;

      setTimeout(() => {
        this.habilitar = 2;
      }, 500);

      setTimeout(() => {
        this.javascript();
      }, 1000);

    } else {
      this.habilitar = 0;
      setTimeout(() => {
        this.habilitar = 3;
      }, 500);
      setTimeout(() => {
        this.javascript();
      }, 1000);
    }
  }
}
