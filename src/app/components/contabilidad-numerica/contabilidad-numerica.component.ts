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
    $('.anchor').on('click', function () {
      var width = parseInt($(this).parent().css('width'));
      if (width == 10) {
        $(this).parent().css('width', '20%');
        $('#canvas').css('width', '60%');
      } else {
        $(this).parent().css('width', '10px');
        $('#canvas').css('width', 'calc( 80% - 10px)');
      }
    });

    (<any>$('.ui-item')).draggable({
      drag: function (event, ui) {
        var lines = $(this).data('lines');
        var con_item = $(this).data('connected-item');
        var con_lines = $(this).data('connected-lines');

        if (lines) {
          lines.forEach(
            function (line, id) {
              $(line)
                .attr('x1', $(this).position().left)
                .attr('y1', $(this).position().top + 1);
            }.bind(this)
          );
        }

        if (con_lines) {
          con_lines.forEach(
            function (con_line, id) {
              $(con_line)
                .attr('x2', $(this).position().left)
                .attr(
                  'y2',
                  $(this).position().top +
                  parseInt($(this).css('height')) / 2 +
                  id * 5
                );
            }.bind(this)
          );
        }
      },
    });

    (<any>$('.ui-item')).droppable({
      accept: '.con_anchor',
      drop: function (event, ui) {
        var item = ui.draggable.closest('.ui-item');
        $(this).data('connected-item', item);
        ui.draggable.css({ top: -2, left: -2 });
        item.data('lines').push(item.data('line'));

        if ($(this).data('connected-lines')) {
          $(this).data('connected-lines').push(item.data('line'));

          var y2_ = parseInt(item.data('line').attr('y2'));
          item
            .data('line')
            .attr('y2', y2_ + $(this).data('connected-lines').length * 5);
        } else $(this).data('connected-lines', [item.data('line')]);

        item.data('line', null);
        console.log('dropped');
      },
    });

    (<any>$('.con_anchor')).draggable({
      drag: function (event, ui) {
        var _end = $(event.target).parent().position();
        var end = $(event.target).position();
        if (_end && end)
          $(event.target)
            .parent()
            .data('line')
            .attr('x2', end.left + _end.left + 5)
            .attr('y2', end.top + _end.top + 2);
      },
      stop: function (event, ui) {
        if (!ui.helper.closest('.ui-item').data('line')) return;
        ui.helper.css({ top: -2, left: -2 });
        ui.helper.closest('.ui-item').data('line').remove();
        ui.helper.closest('.ui-item').data('line', null);
        console.log('stopped');
      },
    });

    $('.con_anchor').on('mousedown', function (e) {
      var cur_ui_item = $(this).closest('.ui-item');
      var connector = $('#connector_canvas');
      var cur_con;

      if (!$(cur_ui_item).data('lines')) $(cur_ui_item).data('lines', []);

      if (!$(cur_ui_item).data('line')) {
        cur_con = $(
          document.createElementNS('http://www.w3.org/2000/svg', 'line')
        );
        cur_ui_item.data('line', cur_con);
      } else cur_con = cur_ui_item.data('line');

      connector.append(cur_con);
      var start = cur_ui_item.position();
      cur_con.attr('x1', start.left + 200).attr('y1', start.top + 33);
      cur_con.attr('x2', start.left + 200).attr('y2', start.top + 33);
    });
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
      { imagen: 'assets/Img/contar_peces_5.png', number: 5 },
      { imagen: 'assets/Img/contar_peces_3.png', number: 3 },
      { imagen: 'assets/Img/contar_peces_5.png', number: 5 },
      { imagen: 'assets/Img/contar_peces_3.png', number: 3 },
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
        html: "<img src='assets/Img/carita_triste.jpg' style='width:100px;'> <br> <p style='margin-top:25px;'>Respuesta erronea, vuelva a iniciar el juego</p>",
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
    console.log(this.answerImage, "imagenId");
    console.log(id, "Id");
    console.log(this.answerImage2, "imagenId2");
    console.log(this.answerImage3, "imagenId3");

    if (this.answerImage === id && this.selectedNivel === 'Nivel 1' && opcion === 'opcion1') {
      Swal.fire({
        title: '¡EXCELENTE!',
        text: 'Respuesta correcta',
      });
      this.win++;
      var numbers = document.getElementById('numbers');
      numbers.style.pointerEvents = 'none';
      numbers.style.opacity = '0.3';
    } else if (this.answerImage2 === id && this.selectedNivel === 'Nivel 1' && opcion === 'opcion2') {
      Swal.fire({
        title: '¡EXCELENTE!',
        text: 'Respuesta correcta',
      });
      this.win++;
      var numbers = document.getElementById('numbers2');
      numbers.style.pointerEvents = 'none';
      numbers.style.opacity = '0.3';
    } else if (this.answerImage3 === id && this.selectedNivel === 'Nivel 1' && opcion === 'opcion3') {
      Swal.fire({
        title: '¡EXCELENTE!',
        text: 'Respuesta correcta',
      });
      this.win++;
      var numbers = document.getElementById('numbers3');
      numbers.style.pointerEvents = 'none';
      numbers.style.opacity = '0.3';
    } else {
      Swal.fire({
        html: "<img src='assets/Img/carita_triste.jpg' style='width:100px;'> <br> <p style='margin-top:25px;'>Respuesta incorrecta, vuelve a intentarlo</p>",
      });
    }
  }

  resetear(show) {
    this.answer = 0;

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
