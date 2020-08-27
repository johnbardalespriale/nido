import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-absurdos',
  templateUrl: './absurdos.component.html',
  styleUrls: ['./absurdos.component.sass'],
})
export class AbsurdosComponent implements OnInit {
  nivels: any[];
  nivel: String;
  selectedNivel: string;
  cont: number;
  habilitar: number;
  habilitar1: number;
  habilitar2: number;
  habilitar3: number;
  habilitar4: number;

  constructor() {}

  ngOnInit(): void {
    this.toAble();

    this.nivels = [
      { nivel: 'Nivel 1', selected: false },
      { nivel: 'Nivel 2', selected: false },
      { nivel: 'Nivel 3', selected: false },
    ];
  }

  toAble() {
    this.habilitar = 0;
    this.habilitar1 = 0;
    this.habilitar2 = 0;
    this.habilitar3 = 0;
    this.habilitar4 = 0;
  }

  answer() {
    Swal.fire({
      text: 'Enconstraste la figura absurda',
    });
    this.cont++;
  }

  errorChoice(element) {
    if (element === 'carro') {
      if (this.habilitar === 0) {
        this.answer();
        this.habilitar = 1;
      }
    }

    if (element === 'gorro') {
      if (this.habilitar1 === 0) {
        this.answer();
        this.habilitar1 = 1;
      }
    }

    if (element === 'cuchara') {
      if (this.habilitar2 === 0) {
        this.answer();
        this.habilitar2 = 1;
      }
    }

    if (element === 'cafe') {
      if (this.habilitar3 === 0) {
        this.answer();
        this.habilitar3 = 1;
      }
    }

    if (element === 'zapato') {
      if (this.habilitar4 === 0) {
        this.answer();
        this.habilitar4 = 1;
      }
    }

    if (this.cont === 5) {
      Swal.fire({
        title: 'GANASTE',
        text: '¡Identificaste todos los elementos absurdos!!',
      });
      var Nivel1 = document.getElementById('Nivel1');
      Nivel1.style.opacity = '0.3';
      Nivel1.style.pointerEvents = 'none';
    }
  }

  resetear(show) {
    this.cont = 0;
    this.toAble();
    if (show === 'Nivel 1') {
      this.nivel = 'Nivel 1';
      var Nivel1 = document.getElementById('Nivel1');
      Nivel1.style.opacity = '1';
      Nivel1.style.pointerEvents = 'inherit';
    } else if (show === 'Nivel 2') {
      this.nivel = 'Nivel 2';
    } else {
      this.nivel = 'Nivel 3';
    }
  }
}
