import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-igual-diferente',
  templateUrl: './igual-diferente.component.html',
  styleUrls: ['./igual-diferente.component.sass'],
})
export class IgualDiferenteComponent implements OnInit {
  flipped = false;
  habilitar1: string;
  habilitar2: string;
  habilitar3: string;
  habilitar4: string;
  choice: boolean;
  nivel2: any;
  constructor() {}

  ngOnInit(): void {
    this.choice = false;
  }

  flipIt(name) {
    this.flipped = true;

    if (name === 'perrito') {
      this.habilitar1 = 'perrito';
      var perrito = document.getElementById('nivel1');
      perrito.style.pointerEvents = 'none';
    } else if (name === 'hipopotamo') {
      this.habilitar2 = 'hipopotamo';
      var hipopotamo = document.getElementById('nivel2');
      hipopotamo.style.pointerEvents = 'none';
    } else if (name === 'loro') {
      this.habilitar3 = 'loro';
      var loro = document.getElementById('nivel3');
      loro.style.pointerEvents = 'none';
    } else if (name === 'pulpo') {
      this.habilitar4 = 'pulpo';
      var pulpo = document.getElementById('nivel4');
      pulpo.style.pointerEvents = 'none';
    }

    setTimeout(() => {
      Swal.fire({
        title: '¡FELICIDADES!',
        text: 'Encontraste la figura semejante',
      });
    }, 1000);
  }

  errorChoice() {
    Swal.fire({
      html: "<img src='assets/Img/carita_triste.jpg' style='width:100px;'> <br> <p style='margin-top:25px;'>Esa no es la figura. ¡Intentalo de nuevo!</p>",
    });
  }
}
