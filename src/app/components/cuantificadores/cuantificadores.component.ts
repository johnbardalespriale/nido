import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cuantificadores',
  templateUrl: './cuantificadores.component.html',
  styleUrls: ['./cuantificadores.component.sass'],
})
export class CuantificadoresComponent implements OnInit {
  nivels: any[];
  selectedNivel: string;
  habilitar: number;
  nivel1: any[];
  nivel2: any[];
  nivel3: any[];
  nivel4: any[];

  constructor() { }

  ngOnInit(): void {
    this.nivels = [
      { nivel: 'Nivel 1', selected: false },
      { nivel: 'Nivel 2', selected: false },
      { nivel: 'Nivel 3', selected: false },
    ];

    this.nivel1 = [
      { imagen: 'assets/Img/poco_crayon.png', name: 'crayon' },
      { imagen: 'assets/Img/mucho_lapices.png', name: 'lapices' },
      { imagen: 'assets/Img/poco_borrador.png', name: 'borrador' },
      { imagen: 'assets/Img/poco_tijera.png', name: 'tijera' },
    ];

    this.nivel2 = [
      { imagen: 'assets/Img/mucho_manzanas.png', name: 'manzanas' },
      { imagen: 'assets/Img/mucho_fresas.png', name: 'fresas' },
      { imagen: 'assets/Img/mucho_platanos.png', name: 'platanos' },
      { imagen: 'assets/Img/poco_frutas.png', name: 'frutas' },
    ];

    this.nivel3 = [
      { imagen: 'assets/Img/unica_jirafa.png', name: 'jirafa' },
      { imagen: 'assets/Img/mucho_ovejas.png', name: 'ovejas' },
      { imagen: 'assets/Img/mucho_palomas.png', name: 'palomas' },
      { imagen: 'assets/Img/mucho_leones.png', name: 'leones' },
    ];

    this.nivel4 = [
      { imagen: 'assets/Img/mucho_flores.png', name: 'flores' },
      { imagen: 'assets/Img/mucho_vegetales.png', name: 'vegetales' },
      { imagen: 'assets/Img/vacia_cesta.png', name: 'cesta' },
      { imagen: 'assets/Img/mucho_panes.png', name: 'panes' },
    ];

    this.nivel1.sort(function () {
      return Math.random() - 0.5;
    });
    this.nivel2.sort(function () {
      return Math.random() - 0.5;
    });
    this.nivel3.sort(function () {
      return Math.random() - 0.5;
    });
    this.nivel4.sort(function () {
      return Math.random() - 0.5;
    });
  }

  choice(name) {
    if (name === 'lapices') {
      Swal.fire({
        title: '¡EXCELENTE!',
        text: 'Respuesta correcta',
      });
      var nivel = document.getElementById('nivel1');
      nivel.style.pointerEvents = 'none';
      nivel.style.opacity = '0.3';
    } else if (name === 'frutas') {
      Swal.fire({
        title: '¡EXCELENTE!',
        text: 'Respuesta correcta',
      });
      var nivel = document.getElementById('nivel2');
      nivel.style.pointerEvents = 'none';
      nivel.style.opacity = '0.3';
    } else if (name === 'jirafa') {
      Swal.fire({
        title: '¡EXCELENTE!',
        text: 'Respuesta correcta',
      });
      var nivel = document.getElementById('nivel3');
      nivel.style.pointerEvents = 'none';
      nivel.style.opacity = '0.3';
    } else if (name === 'cesta') {
      Swal.fire({
        title: '¡EXCELENTE!',
        text: 'Respuesta correcta',
      });
      var nivel = document.getElementById('nivel4');
      nivel.style.pointerEvents = 'none';
      nivel.style.opacity = '0.3';
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Respuesta incorrecta',
        text: 'Intentalo de nuevo, ¡tu puedes lograrlo!',
      });
    }
  }
}
