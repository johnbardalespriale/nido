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
  cont2: number;
  cont3: number;

  constructor() { }

  ngOnInit(): void {

    this.nivels = [
      { nivel: 'Nivel 1', selected: false },
      { nivel: 'Nivel 2', selected: false },
      { nivel: 'Nivel 3', selected: false },
    ];
  }

  answer(value) {
    Swal.fire({
      text: 'Enconstraste la figura absurda',
    });
    if (value === 1) {
      this.cont++;
    } else if (value === 2) {
      this.cont2++;
    } else if (value === 3) {
      this.cont3++;
    }


  }

  errorChoice(element) {
    if (element === 'carro') {
      this.answer(1);
      var carro = document.getElementById(element);
      carro.style.opacity = '0.4';
      carro.style.border = '4px solid black';
      carro.style.borderRadius = '41px';
      var wrapperCarro = document.getElementById('wrapper-carro');
      wrapperCarro.style.pointerEvents = 'none';
    }

    if (element === 'gorro') {
      this.answer(1);
      var gorro = document.getElementById(element);
      gorro.style.opacity = '0.4';
      gorro.style.border = '4px solid black';
      gorro.style.borderRadius = '41px';
      var wrapperGorro = document.getElementById('wrapper-gorro');
      wrapperGorro.style.pointerEvents = 'none';
    }

    if (element === 'cuchara') {
      this.answer(1);
      var cuchara = document.getElementById(element);
      cuchara.style.opacity = '0.4';
      cuchara.style.border = '4px solid black';
      cuchara.style.borderRadius = '41px';
      var wrapperCuchara = document.getElementById('wrapper-cuchara');
      wrapperCuchara.style.pointerEvents = 'none';
    }

    if (element === 'cafe') {
      this.answer(1);
      var cafe = document.getElementById(element);
      cafe.style.opacity = '0.4';
      cafe.style.border = '4px solid black';
      cafe.style.borderRadius = '41px';
      var wrapperCafe = document.getElementById('wrapper-cafe');
      wrapperCafe.style.pointerEvents = 'none';
    }

    if (element === 'zapato') {
      this.answer(1);
      var zapato = document.getElementById(element);
      zapato.style.opacity = '0.4';
      zapato.style.border = '4px solid black';
      zapato.style.borderRadius = '41px';
      var wrapperZapato = document.getElementById('wrapper-zapato');
      wrapperZapato.style.pointerEvents = 'none';
    }

    if (element === 'sol') {
      this.answer(2);
      var sol = document.getElementById(element);
      sol.style.opacity = '0.4';
      sol.style.border = '3px solid black';
      sol.style.borderRadius = '41px';
      var wrapperSol = document.getElementById('wrapper-sol');
      wrapperSol.style.pointerEvents = 'none';
    }

    if (element === 'pez') {
      this.answer(2);
      var pez = document.getElementById(element);
      pez.style.opacity = '0.4';
      pez.style.border = '3px solid black';
      pez.style.borderRadius = '41px';
      var wrapperPez = document.getElementById('wrapper-pez');
      wrapperPez.style.pointerEvents = 'none';
    }

    if (element === 'volador') {
      this.answer(2);
      var volador = document.getElementById(element);
      volador.style.opacity = '0.4';
      volador.style.border = '3px solid black';
      volador.style.borderRadius = '41px';
      var wrapperVolador = document.getElementById('wrapper-volador');
      wrapperVolador.style.pointerEvents = 'none';
    }

    if (element === 'luna') {
      this.answer(2);
      var luna = document.getElementById(element);
      luna.style.opacity = '0.4';
      luna.style.border = '3px solid black';
      luna.style.borderRadius = '41px';
      var wrapperLuna = document.getElementById('wrapper-luna');
      wrapperLuna.style.pointerEvents = 'none';
    }

    if (element === 'conejo') {
      this.answer(2);
      var conejo = document.getElementById(element);
      conejo.style.opacity = '0.4';
      conejo.style.border = '3px solid black';
      conejo.style.borderRadius = '41px';
      var wrapperConejo = document.getElementById('wrapper-conejo');
      wrapperConejo.style.pointerEvents = 'none';
    }

    if (element === 'perro') {
      this.answer(2);
      var perro = document.getElementById(element);
      perro.style.opacity = '0.4';
      perro.style.border = '3px solid black';
      perro.style.borderRadius = '41px';
      var wrapperPerro = document.getElementById('wrapper-perro');
      wrapperPerro.style.pointerEvents = 'none';
    }

    if (element === 'patineta') {
      this.answer(2);
      var patineta = document.getElementById(element);
      patineta.style.opacity = '0.4';
      patineta.style.border = '3px solid black';
      patineta.style.borderRadius = '41px';
      var wrapperPatineta = document.getElementById('wrapper-patineta');
      wrapperPatineta.style.pointerEvents = 'none';
    }

    if (element === 'cerdo') {
      this.answer(2);
      var cerdo = document.getElementById(element);
      cerdo.style.opacity = '0.4';
      cerdo.style.border = '3px solid black';
      cerdo.style.borderRadius = '41px';
      var wrapperCerdo = document.getElementById('wrapper-cerdo');
      wrapperCerdo.style.pointerEvents = 'none';
    }

    if (element === 'muneca') {
      this.answer(2);
      var muneca = document.getElementById(element);
      muneca.style.opacity = '0.4';
      muneca.style.border = '3px solid black';
      muneca.style.borderRadius = '41px';
      var wrapperMuneca = document.getElementById('wrapper-muneca');
      wrapperMuneca.style.pointerEvents = 'none';
    }

    if (element === 'gato') {
      this.answer(2);
      var gato = document.getElementById(element);
      gato.style.opacity = '0.4';
      gato.style.border = '3px solid black';
      gato.style.borderRadius = '41px';
      var wrapperGato = document.getElementById('wrapper-gato');
      wrapperGato.style.pointerEvents = 'none';
    }

    if (element === 'ardilla') {
      this.answer(3);
      var ardilla = document.getElementById(element);
      ardilla.style.opacity = '0.4';
      ardilla.style.border = '3px solid black';
      ardilla.style.borderRadius = '41px';
      var wrapperArdilla = document.getElementById('wrapper-ardilla');
      wrapperArdilla.style.pointerEvents = 'none';
    }

    if (element === 'buho') {
      this.answer(3);
      var buho = document.getElementById(element);
      buho.style.opacity = '0.4';
      buho.style.border = '3px solid black';
      buho.style.borderRadius = '41px';
      var wrapperBuho = document.getElementById('wrapper-buho');
      wrapperBuho.style.pointerEvents = 'none';
    }

    if (element === 'patinador') {
      this.answer(3);
      var patinador = document.getElementById(element);
      patinador.style.opacity = '0.4';
      patinador.style.border = '3px solid black';
      patinador.style.borderRadius = '41px';
      var wrapperPatinador = document.getElementById('wrapper-patinador');
      wrapperPatinador.style.pointerEvents = 'none';
    }

    if (element === 'reno') {
      this.answer(3);
      var reno = document.getElementById(element);
      reno.style.opacity = '0.4';
      reno.style.border = '3px solid black';
      reno.style.borderRadius = '41px';
      var wrapperReno = document.getElementById('wrapper-reno');
      wrapperReno.style.pointerEvents = 'none';
    }

    if (element === 'esqui') {
      this.answer(3);
      var esqui = document.getElementById(element);
      esqui.style.opacity = '0.4';
      esqui.style.border = '3px solid black';
      esqui.style.borderRadius = '41px';
      var wrapperEsqui = document.getElementById('wrapper-esqui');
      wrapperEsqui.style.pointerEvents = 'none';
    }

    if (element === 'idrante') {
      this.answer(3);
      var idrante = document.getElementById(element);
      idrante.style.opacity = '0.4';
      idrante.style.border = '3px solid black';
      idrante.style.borderRadius = '41px';
      var wrapperIdrante = document.getElementById('wrapper-idrante');
      wrapperIdrante.style.pointerEvents = 'none';
    }

    if (element === 'hielo') {
      this.answer(3);
      var hielo = document.getElementById(element);
      hielo.style.opacity = '0.4';
      hielo.style.border = '3px solid black';
      hielo.style.borderRadius = '41px';
      var wrapperHielo = document.getElementById('wrapper-hielo');
      wrapperHielo.style.pointerEvents = 'none';
    }

    if (element === 'aspiradora') {
      this.answer(3);
      var aspiradora = document.getElementById(element);
      aspiradora.style.opacity = '0.4';
      aspiradora.style.border = '3px solid black';
      aspiradora.style.borderRadius = '41px';
      var wrapperAspiradora = document.getElementById('wrapper-aspiradora');
      wrapperAspiradora.style.pointerEvents = 'none';
    }

    if (element === 'payaso') {
      this.answer(3);
      var payaso = document.getElementById(element);
      payaso.style.opacity = '0.4';
      payaso.style.border = '3px solid black';
      payaso.style.borderRadius = '41px';
      var wrapperPayaso = document.getElementById('wrapper-payaso');
      wrapperPayaso.style.pointerEvents = 'none';
    }

    if (element === 'chica') {
      this.answer(3);
      var chica = document.getElementById(element);
      chica.style.opacity = '0.4';
      chica.style.border = '3px solid black';
      chica.style.borderRadius = '41px';
      var wrapperChica = document.getElementById('wrapper-chica');
      wrapperChica.style.pointerEvents = 'none';
    }

    if (element === 'bus') {
      this.answer(3);
      var bus = document.getElementById(element);
      bus.style.opacity = '0.4';
      bus.style.border = '3px solid black';
      bus.style.borderRadius = '41px';
      var wrapperBus = document.getElementById('wrapper-bus');
      wrapperBus.style.pointerEvents = 'none';
    }

    if (element === 'dormir') {
      this.answer(3);
      var dormir = document.getElementById(element);
      dormir.style.opacity = '0.4';
      dormir.style.border = '3px solid black';
      dormir.style.borderRadius = '41px';
      var wrapperDormir = document.getElementById('wrapper-dormir');
      wrapperDormir.style.pointerEvents = 'none';
    }

    if (element === 'dona') {
      this.answer(3);
      var dona = document.getElementById(element);
      dona.style.opacity = '0.4';
      dona.style.border = '3px solid black';
      dona.style.borderRadius = '41px';
      var wrapperDona = document.getElementById('wrapper-dona');
      wrapperDona.style.pointerEvents = 'none';
    }

    if (element === 'amigos') {
      this.answer(3);
      var amigos = document.getElementById(element);
      amigos.style.opacity = '0.4';
      amigos.style.border = '3px solid black';
      amigos.style.borderRadius = '41px';
      var wrapperAmigos = document.getElementById('wrapper-amigos');
      wrapperAmigos.style.pointerEvents = 'none';
    }

    if (this.cont === 5) {
      Swal.fire({
        title: 'GANASTE',
        text: '¡Identificaste todos los elementos absurdos!!',
      });
    }

    if (this.cont2 === 10) {
      Swal.fire({
        title: 'GANASTE',
        text: '¡Identificaste todos los elementos absurdos!!',
      });
    }

    if (this.cont3 === 14) {
      Swal.fire({
        title: 'GANASTE',
        text: '¡Identificaste todos los elementos absurdos!!',
      });
    }
  }

  resetear(show) {
    this.cont = 0;
    this.cont2 = 0;
    this.cont3 = 0;

    if (show === 'Nivel 1') {
      this.nivel = 'Nivel 1';

      var carro = document.getElementById('carro');
      carro.style.opacity = '1';
      carro.style.border = 'none';
      var gorro = document.getElementById('gorro');
      gorro.style.opacity = '1';
      gorro.style.border = 'none';
      var cuchara = document.getElementById('cuchara');
      cuchara.style.opacity = '1';
      cuchara.style.border = 'none';
      var cafe = document.getElementById('cafe');
      cafe.style.opacity = '1';
      cafe.style.border = 'none';
      var zapato = document.getElementById('zapato');
      zapato.style.opacity = '1';
      zapato.style.border = 'none';

      var wrapperCarro = document.getElementById('wrapper-carro');
      wrapperCarro.style.pointerEvents = 'inherit';
      var wrapperGorro = document.getElementById('wrapper-gorro');
      wrapperGorro.style.pointerEvents = 'inherit';
      var wrapperCuchara = document.getElementById('wrapper-cuchara');
      wrapperCuchara.style.pointerEvents = 'inherit';
      var wrapperCafe = document.getElementById('wrapper-cafe');
      wrapperCafe.style.pointerEvents = 'inherit';
      var wrapperZapato = document.getElementById('wrapper-zapato');
      wrapperZapato.style.pointerEvents = 'inherit';

    } else if (show === 'Nivel 2') {
      this.nivel = 'Nivel 2';

      var sol = document.getElementById('sol');
      sol.style.opacity = '1';
      sol.style.border = 'none';
      var pez = document.getElementById('pez');
      pez.style.opacity = '1';
      pez.style.border = 'none';
      var volador = document.getElementById('volador');
      volador.style.opacity = '1';
      volador.style.border = 'none';
      var luna = document.getElementById('luna');
      luna.style.opacity = '1';
      luna.style.border = 'none';
      var conejo = document.getElementById('conejo');
      conejo.style.opacity = '1';
      conejo.style.border = 'none';
      var perro = document.getElementById('perro');
      perro.style.opacity = '1';
      perro.style.border = 'none';
      var patineta = document.getElementById('patineta');
      patineta.style.opacity = '1';
      patineta.style.border = 'none';
      var cerdo = document.getElementById('cerdo');
      cerdo.style.opacity = '1';
      cerdo.style.border = 'none';
      var muneca = document.getElementById('muneca');
      muneca.style.opacity = '1';
      muneca.style.border = 'none';
      var gato = document.getElementById('gato');
      gato.style.opacity = '1';
      gato.style.border = 'none';

      var wrapperSol = document.getElementById('wrapper-sol');
      wrapperSol.style.pointerEvents = 'inherit';
      var wrapperPez = document.getElementById('wrapper-pez');
      wrapperPez.style.pointerEvents = 'inherit';
      var wrapperVolador = document.getElementById('wrapper-volador');
      wrapperVolador.style.pointerEvents = 'inherit';
      var wrapperLuna = document.getElementById('wrapper-luna');
      wrapperLuna.style.pointerEvents = 'inherit';
      var wrapperConejo = document.getElementById('wrapper-conejo');
      wrapperConejo.style.pointerEvents = 'inherit';
      var wrapperPerro = document.getElementById('wrapper-perro');
      wrapperPerro.style.pointerEvents = 'inherit';
      var wrapperPatineta = document.getElementById('wrapper-patineta');
      wrapperPatineta.style.pointerEvents = 'inherit';
      var wrapperCerdo = document.getElementById('wrapper-cerdo');
      wrapperCerdo.style.pointerEvents = 'inherit';
      var wrapperMuneca = document.getElementById('wrapper-muneca');
      wrapperMuneca.style.pointerEvents = 'inherit';
      var wrapperGato = document.getElementById('wrapper-gato');
      wrapperGato.style.pointerEvents = 'inherit';
    } else {
      this.nivel = 'Nivel 3';

      var ardilla = document.getElementById('ardilla');
      ardilla.style.opacity = '1';
      ardilla.style.border = 'none';
      var buho = document.getElementById('buho');
      buho.style.opacity = '1';
      buho.style.border = 'none';
      var patinador = document.getElementById('patinador');
      patinador.style.opacity = '1';
      patinador.style.border = 'none';
      var reno = document.getElementById('reno');
      reno.style.opacity = '1';
      reno.style.border = 'none';
      var esqui = document.getElementById('esqui');
      esqui.style.opacity = '1';
      esqui.style.border = 'none';
      var hielo = document.getElementById('hielo');
      hielo.style.opacity = '1';
      hielo.style.border = 'none';
      var idrante = document.getElementById('idrante');
      idrante.style.opacity = '1';
      idrante.style.border = 'none';
      var aspiradora = document.getElementById('aspiradora');
      aspiradora.style.opacity = '1';
      aspiradora.style.border = 'none';
      var payaso = document.getElementById('payaso');
      payaso.style.opacity = '1';
      payaso.style.border = 'none';
      var chica = document.getElementById('chica');
      chica.style.opacity = '1';
      chica.style.border = 'none';
      var bus = document.getElementById('bus');
      bus.style.opacity = '1';
      bus.style.border = 'none';
      var dormir = document.getElementById('dormir');
      dormir.style.opacity = '1';
      dormir.style.border = 'none';
      var dona = document.getElementById('dona');
      dona.style.opacity = '1';
      dona.style.border = 'none';
      var amigos = document.getElementById('amigos');
      amigos.style.opacity = '1';
      amigos.style.border = 'none';

      var wrapperArdilla = document.getElementById('wrapper-ardilla');
      wrapperArdilla.style.pointerEvents = 'inherit';
      var wrapperBuho = document.getElementById('wrapper-buho');
      wrapperBuho.style.pointerEvents = 'inherit';
      var wrapperPatinador = document.getElementById('wrapper-patinador');
      wrapperPatinador.style.pointerEvents = 'inherit';
      var wrapperReno = document.getElementById('wrapper-reno');
      wrapperReno.style.pointerEvents = 'inherit';
      var wrapperEsqui = document.getElementById('wrapper-esqui');
      wrapperEsqui.style.pointerEvents = 'inherit';
      var wrapperHielo = document.getElementById('wrapper-hielo');
      wrapperHielo.style.pointerEvents = 'inherit';
      var wrapperIdrante = document.getElementById('wrapper-idrante');
      wrapperIdrante.style.pointerEvents = 'inherit';
      var wrapperAspiradora = document.getElementById('wrapper-aspiradora');
      wrapperAspiradora.style.pointerEvents = 'inherit';
      var wrapperPayaso = document.getElementById('wrapper-payaso');
      wrapperPayaso.style.pointerEvents = 'inherit';
      var wrapperChica = document.getElementById('wrapper-chica');
      wrapperChica.style.pointerEvents = 'inherit';
      var wrapperBus = document.getElementById('wrapper-bus');
      wrapperBus.style.pointerEvents = 'inherit';
      var wrapperDormir = document.getElementById('wrapper-dormir');
      wrapperDormir.style.pointerEvents = 'inherit';
      var wrapperDona = document.getElementById('wrapper-dona');
      wrapperDona.style.pointerEvents = 'inherit';
      var wrapperAmigos = document.getElementById('wrapper-amigos');
      wrapperAmigos.style.pointerEvents = 'inherit';
    }
  }
}
