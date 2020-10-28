import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-diferente',
  templateUrl: './diferente.component.html',
  styleUrls: ['./diferente.component.sass'],
})
export class DiferenteComponent implements OnInit {
  nivel1: any[];
  nivel2: any[];
  nivel3: any[];
  nivel4: any[];
  cont: number;

  constructor() {}

  ngOnInit(): void {
    this.cont = 0;

    this.nivel1 = [
      { imagen: 'assets/Img/alpaca.png', name: 'alpaca' },
      { imagen: 'assets/Img/alpaca.png', name: 'alpaca' },
      { imagen: 'assets/Img/alpaca.png', name: 'alpaca' },
      { imagen: 'assets/Img/llama.png', name: 'llama' },
      { imagen: 'assets/Img/alpaca.png', name: 'alpaca' },
      { imagen: 'assets/Img/alpaca.png', name: 'alpaca' },
    ];

    this.nivel2 = [
      { imagen: 'assets/Img/conejo.png', name: 'conejo' },
      { imagen: 'assets/Img/cuy.png', name: 'cuy' },
      { imagen: 'assets/Img/conejo.png', name: 'conejo' },
      { imagen: 'assets/Img/conejo.png', name: 'conejo' },
      { imagen: 'assets/Img/conejo.png', name: 'conejo' },
      { imagen: 'assets/Img/conejo.png', name: 'conejo' },
    ];

    this.nivel3 = [
      { imagen: 'assets/Img/oso.png', name: 'oso_diferente' },
      { imagen: 'assets/Img/oso.png', name: 'oso_diferente' },
      { imagen: 'assets/Img/oso.png', name: 'oso_diferente' },
      { imagen: 'assets/Img/oso.png', name: 'oso_diferente' },
      { imagen: 'assets/Img/oso.png', name: 'oso_diferente' },
      { imagen: 'assets/Img/jirafa.png', name: 'jirafa' },
    ];

    this.nivel4 = [
      { imagen: 'assets/Img/serpiente.png', name: 'serpiente' },
      { imagen: 'assets/Img/serpiente.png', name: 'serpiente' },
      { imagen: 'assets/Img/serpiente.png', name: 'serpiente' },
      { imagen: 'assets/Img/serpiente.png', name: 'serpiente' },
      { imagen: 'assets/Img/oso.png', name: 'oso' },
      { imagen: 'assets/Img/serpiente.png', name: 'serpiente' },
    ];

    this.mixSet();
  }

  mixSet() {
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

  correctChoice(name) {
    this.mixSet();

    if (name === 'llama') {
      Swal.fire({
        html: "<h1 style='color:#1db31d;'>¡LO ENCONTRASTE!</h1> Encontraste la figura diferente "
      });
      var nivel1 = document.getElementById('nivel1');
      nivel1.style.opacity = '0.3';
      nivel1.style.pointerEvents = 'none';
      this.cont++;
    } else if (name === 'cuy') {
      Swal.fire({
        html: "<h1 style='color:#1db31d;'>¡LO ENCONTRASTE!</h1> Encontraste la figura diferente "
      });
      var nivel2 = document.getElementById('nivel2');
      nivel2.style.opacity = '0.3';
      nivel2.style.pointerEvents = 'none';
      this.cont++;
    } else if (name === 'jirafa') {
      Swal.fire({
        html: "<h1 style='color:#1db31d;'>¡LO ENCONTRASTE!</h1> Encontraste la figura diferente "
      });
      var nivel3 = document.getElementById('nivel3');
      nivel3.style.opacity = '0.3';
      nivel3.style.pointerEvents = 'none';
      this.cont++;
    } else if (name === 'oso') {
      Swal.fire({
        html: "<h1 style='color:#1db31d;'>¡LO ENCONTRASTE!</h1> Encontraste la figura diferente "
      });
      var nivel4 = document.getElementById('nivel4');
      nivel4.style.opacity = '0.3';
      nivel4.style.pointerEvents = 'none';
      this.cont++;
    }

    if (this.cont === 4) {
      Swal.fire({
        html: "<h1 style='color:#1db31d;'>¡GANASTE!</h1> Juego terminado "
      });
    }
  }
}
