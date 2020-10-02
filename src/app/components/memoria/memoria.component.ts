import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-memoria',
  templateUrl: './memoria.component.html',
  styleUrls: ['./memoria.component.sass'],
})
export class MemoriaComponent implements OnInit {
  aciertos: number;
  cartas: any;
  intentos: number;
  validator: number;
  valorDeLaJugada1: string;
  valorDeLaJugada2: string;
  idDeLaJugada1: string;
  idDeLaJugada2: string;
  habilitar: number;
  favoriteSeason: any;
  nivels: any[];
  nivel1: any;
  nivel2: any;
  nivel3;

  constructor() { }

  ngOnInit(): void {
    this.nivel1 = [
      { nombre: '1', seleccion: false, card: 'assets/Img/oso.png' },
      { nombre: '2', seleccion: false, card: 'assets/Img/mono.png' },
      { nombre: '3', seleccion: false, card: 'assets/Img/cuy.png' },
      { nombre: '4', seleccion: false, card: 'assets/Img/gato.png' },
      { nombre: '5', seleccion: false, card: 'assets/Img/loro.png' },
      { nombre: '6', seleccion: false, card: 'assets/Img/alpaca.png' },
      { nombre: '1', seleccion: false, card: 'assets/Img/oso.png' },
      { nombre: '2', seleccion: false, card: 'assets/Img/mono.png' },
      { nombre: '3', seleccion: false, card: 'assets/Img/cuy.png' },
      { nombre: '4', seleccion: false, card: 'assets/Img/gato.png' },
      { nombre: '5', seleccion: false, card: 'assets/Img/loro.png' },
      { nombre: '6', seleccion: false, card: 'assets/Img/alpaca.png' },
    ];

    this.nivel2 = [
      { nombre: '1', seleccion: false, card: 'assets/Img/oso.png' },
      { nombre: '2', seleccion: false, card: 'assets/Img/mono.png' },
      { nombre: '3', seleccion: false, card: 'assets/Img/cuy.png' },
      { nombre: '4', seleccion: false, card: 'assets/Img/gato.png' },
      { nombre: '5', seleccion: false, card: 'assets/Img/loro.png' },
      { nombre: '6', seleccion: false, card: 'assets/Img/alpaca.png' },
      { nombre: '7', seleccion: false, card: 'assets/Img/perro.png' },
      { nombre: '8', seleccion: false, card: 'assets/Img/leon.png' },
      { nombre: '1', seleccion: false, card: 'assets/Img/oso.png' },
      { nombre: '2', seleccion: false, card: 'assets/Img/mono.png' },
      { nombre: '3', seleccion: false, card: 'assets/Img/cuy.png' },
      { nombre: '4', seleccion: false, card: 'assets/Img/gato.png' },
      { nombre: '5', seleccion: false, card: 'assets/Img/loro.png' },
      { nombre: '6', seleccion: false, card: 'assets/Img/alpaca.png' },
      { nombre: '7', seleccion: false, card: 'assets/Img/perro.png' },
      { nombre: '8', seleccion: false, card: 'assets/Img/leon.png' },
    ];

    this.nivel3 = [
      { nombre: '1', seleccion: false, card: 'assets/Img/oso.png' },
      { nombre: '2', seleccion: false, card: 'assets/Img/mono.png' },
      { nombre: '3', seleccion: false, card: 'assets/Img/cuy.png' },
      { nombre: '4', seleccion: false, card: 'assets/Img/gato.png' },
      { nombre: '5', seleccion: false, card: 'assets/Img/loro.png' },
      { nombre: '6', seleccion: false, card: 'assets/Img/alpaca.png' },
      { nombre: '7', seleccion: false, card: 'assets/Img/perro.png' },
      { nombre: '8', seleccion: false, card: 'assets/Img/leon.png' },
      { nombre: '9', seleccion: false, card: 'assets/Img/hipopotamo.png' },
      { nombre: '10', seleccion: false, card: 'assets/Img/elefante.png' },
      { nombre: '1', seleccion: false, card: 'assets/Img/oso.png' },
      { nombre: '2', seleccion: false, card: 'assets/Img/mono.png' },
      { nombre: '3', seleccion: false, card: 'assets/Img/cuy.png' },
      { nombre: '4', seleccion: false, card: 'assets/Img/gato.png' },
      { nombre: '5', seleccion: false, card: 'assets/Img/loro.png' },
      { nombre: '6', seleccion: false, card: 'assets/Img/alpaca.png' },
      { nombre: '7', seleccion: false, card: 'assets/Img/perro.png' },
      { nombre: '8', seleccion: false, card: 'assets/Img/leon.png' },
      { nombre: '9', seleccion: false, card: 'assets/Img/hipopotamo.png' },
      { nombre: '10', seleccion: false, card: 'assets/Img/elefante.png' },
    ];

    this.nivels = [
      { nivel: 'Nivel 1', selected: true },
      { nivel: 'Nivel 2', selected: false },
      { nivel: 'Nivel 3', selected: false },
    ];

    this.valorDeLaJugada1 = '';
    this.valorDeLaJugada2 = '';
    this.idDeLaJugada1 = '';
    this.idDeLaJugada2 = '';
    this.intentos = 0;
    this.validator = 0;
    this.aciertos = 0;
  }

  iniciarJuego() {
    this.habilitar = 1;
    var juego = document.getElementById('juego');
    juego.style.opacity = '1';
    //Nos traemos el elemento que vendría siendo el div con el id juego
    if (this.favoriteSeason === 'Nivel 1') {
      this.cartas = this.nivel1;
      //Ordenamos las cartas de manera aleatoria
      this.cartas.sort(function () {
        return Math.random() - 0.5;
      });
      //Este for se encarga de asignarles las imagenes aleatorias para comenzar con el juego
      for (var i = 0; i < 12; i++) {
        var carta = this.cartas[i].nombre;
        juego = document.getElementById(i.toString());
        juego.dataset.valor = carta;
      }
    } else if (this.favoriteSeason === 'Nivel 2') {
      this.cartas = this.nivel2;
      //Ordenamos las cartas de manera aleatoria
      this.cartas.sort(function () {
        return Math.random() - 0.5;
      });
      //Este for se encarga de asignarles las imagenes aleatorias para comenzar con el juego
      for (var i = 0; i < 16; i++) {
        var carta = this.cartas[i].nombre;
        juego = document.getElementById(i.toString());
        juego.dataset.valor = carta;
      }
    } else {
      this.cartas = this.nivel3;
      //Ordenamos las cartas de manera aleatoria
      this.cartas.sort(function () {
        return Math.random() - 0.5;
      });
      //Este for se encarga de asignarles las imagenes aleatorias para comenzar con el juego
      for (var i = 0; i < 20; i++) {
        var carta = this.cartas[i].nombre;
        juego = document.getElementById(i.toString());
        juego.dataset.valor = carta;
      }
    }
  }

  iniciar() {
    this.resetearJuego();
  }

  estiloCarta() {
    var carta0 = document.getElementById('0');
    carta0.style.pointerEvents = 'inherit';
    var carta1 = document.getElementById('1');
    carta1.style.pointerEvents = 'inherit';
    var carta2 = document.getElementById('2');
    carta2.style.pointerEvents = 'inherit';
    var carta3 = document.getElementById('3');
    carta3.style.pointerEvents = 'inherit';
    var carta4 = document.getElementById('4');
    carta4.style.pointerEvents = 'inherit';
    var carta5 = document.getElementById('5');
    carta5.style.pointerEvents = 'inherit';
    var carta6 = document.getElementById('6');
    carta6.style.pointerEvents = 'inherit';
    var carta7 = document.getElementById('7');
    carta7.style.pointerEvents = 'inherit';
    var carta8 = document.getElementById('8');
    carta8.style.pointerEvents = 'inherit';
    var carta9 = document.getElementById('9');
    carta9.style.pointerEvents = 'inherit';
    var carta10 = document.getElementById('10');
    carta10.style.pointerEvents = 'inherit';
    var carta11 = document.getElementById('11');
    carta11.style.pointerEvents = 'inherit';
    var carta12 = document.getElementById('12');
    carta12.style.pointerEvents = 'inherit';
    var carta13 = document.getElementById('13');
    carta13.style.pointerEvents = 'inherit';
    var carta14 = document.getElementById('14');
    carta14.style.pointerEvents = 'inherit';
    var carta15 = document.getElementById('15');
    carta15.style.pointerEvents = 'inherit';
    var carta16 = document.getElementById('16');
    carta16.style.pointerEvents = 'inherit';
    var carta17 = document.getElementById('17');
    carta17.style.pointerEvents = 'inherit';
    var carta18 = document.getElementById('18');
    carta18.style.pointerEvents = 'inherit';
    var carta19 = document.getElementById('19');
    carta19.style.pointerEvents = 'inherit';
  }

  //Reinicia el juego
  resetearJuego() {
    setTimeout(() => {
      this.iniciarJuego();
      this.estiloCarta();
    }, 500);
    setTimeout(() => {
      this.estiloCarta();
    }, 1500);
    this.aciertos = 0;
    this.habilitar = 0;
    var juego = document.getElementById('juego');
    juego.style.opacity = '1';
    this.intentos = 0;
    this.validator = 0;
    this.cartas.sort(function () {
      return Math.random() - 0.5;
    });

    if (this.favoriteSeason === 'Nivel 1') {
      //Vuelve a asignar de manera aleatoria las cartas
      for (var i = 0; i < 12; i++) {
        var carta = this.cartas[i].nombre;
        this.cartas[i].seleccion = false;
        var dato = document.getElementById(i.toString());
        dato.dataset.valor = carta;
        //Voltea las cartas
        this.reemplazarImagenDeLaCarta(i, 'assets/Img/Pioneras-00.jpg');
      }
    } else if (this.favoriteSeason === 'Nivel 2') {
      for (var i = 0; i < 16; i++) {
        var carta = this.cartas[i].nombre;
        this.cartas[i].seleccion = false;
        var dato = document.getElementById(i.toString());
        dato.dataset.valor = carta;
        //Voltea las cartas
        this.reemplazarImagenDeLaCarta(i, 'assets/Img/Pioneras-00.jpg');
      }
    } else {
      for (var i = 0; i < 20; i++) {
        var carta = this.cartas[i].nombre;
        this.cartas[i].seleccion = false;
        var dato = document.getElementById(i.toString());
        dato.dataset.valor = carta;
        //Voltea las cartas
        this.reemplazarImagenDeLaCarta(i, 'assets/Img/Pioneras-00.jpg');
      }
    }
  }

  girarCarta(id) {
    // Hacer clic y pulsar teclas son eventos.
    var evento = window.event;
    this.validator++;
    if (
      this.habilitar === 1 &&
      (this.validator === 1 || this.validator === 2)
    ) {
      this.animacionVolteo(id);
      if (this.valorDeLaJugada1 === '') {
        ++this.intentos;

        //Extraemos el valor de la carta
        const target = evento.target as HTMLTextAreaElement;
        this.valorDeLaJugada1 = target.dataset.valor;
        this.idDeLaJugada1 = target.id;
        this.reemplazarImagenDeLaCarta(
          this.idDeLaJugada1,
          this.cartas[parseInt(this.idDeLaJugada1)].card
        );
      } else {
        const target = evento.target as HTMLTextAreaElement;
        this.valorDeLaJugada2 = target.dataset.valor;
        this.idDeLaJugada2 = target.id;
        this.reemplazarImagenDeLaCarta(
          this.idDeLaJugada2,
          this.cartas[parseInt(this.idDeLaJugada2)].card
        );
        this.validarSiLasCartasSonDiferentes();
        this.validarSiLasCartasSonIguales();
        this.comprobarSiHaGanadoElJuego();
      }
    }
  }

  validarSiLasCartasSonDiferentes() {
    //Verificamos si ya hay 2 cartas seleccionadas y si son iguales
    if (this.valorDeLaJugada1 !== this.valorDeLaJugada2) {
      this.validator = 0;
      setTimeout(() => {
        this.reemplazarImagenDeLaCarta(
          this.idDeLaJugada1,
          'assets/Img/Pioneras-00.jpg'
        );
        this.reemplazarImagenDeLaCarta(
          this.idDeLaJugada2,
          'assets/Img/Pioneras-00.jpg'
        );
        this.vaciar();
      }, 600);
    }
  }

  validarSiLasCartasSonIguales() {

    if (
      this.valorDeLaJugada1 === this.valorDeLaJugada2 &&
      this.cartas[parseInt(this.idDeLaJugada1)].seleccion === false &&
      this.cartas[parseInt(this.idDeLaJugada2)].seleccion === false
    ) {
      this.cartas[parseInt(this.idDeLaJugada1)].seleccion = true;
      this.cartas[parseInt(this.idDeLaJugada2)].seleccion = true;

      var carta1 = document.getElementById(this.idDeLaJugada1);
      carta1.style.pointerEvents = 'none';
      var carta2 = document.getElementById(this.idDeLaJugada2);
      carta2.style.pointerEvents = 'none';

      this.vaciar();
      this.validator = 0;
    }
  }

  //Deseleccionamos las cartas
  vaciar() {
    this.valorDeLaJugada1 = '';
    this.valorDeLaJugada2 = '';

    this.idDeLaJugada1 = '';
    this.idDeLaJugada2 = '';
  }

  //Para mostrar o ocultar las cartas
  reemplazarImagenDeLaCarta(idDeLaCarta, nuevaImagenDeLaCarta) {
    setTimeout(() => {
      (<HTMLImageElement>(
        document.getElementById(idDeLaCarta.toString())
      )).src = nuevaImagenDeLaCarta;
    }, 120);
  }

  //Comprobamos si ya se finalizó el juego para mostrar el mensaje que ganaron
  comprobarSiHaGanadoElJuego() {
    this.aciertos = 0;
    if (this.favoriteSeason === 'Nivel 1') {
      //Cuenta cuántos aciertos llevan
      for (var i = 0; i < 12; i++) {
        if (this.cartas[i].seleccion === true) {
          this.aciertos++;
        }
      }
      //Muestra el mensaje de victoria
      if (this.aciertos === 12) {
        /*this.toastr.success(
          'Tuviste ' + this.intentos + ' intentos. ¡Que bien! ganaste')*/
        Swal.fire({
          title: 'JUEGO TERMINADO',
          text: 'Tuviste ' + this.intentos + ' intentos. ¡Excelente!',
        });
      }
    } else {
      //Cuenta cuántos aciertos llevan
      for (var i = 0; i < 16; i++) {
        if (this.cartas[i].seleccion === true) {
          this.aciertos++;
        }
      }
    }
    //Muestra el mensaje de victoria
    if (this.aciertos === 16) {
      Swal.fire({
        title: 'GANASTE',
        text: 'Tuviste ' + this.intentos + ' intentos. ¡Excelente!',
      });
    }
  }

  animacionVolteo(id) {
    if (id === 'card1') {
      let answers = document.getElementById(id);
      answers.classList.add('flip-vertical-left');
      setTimeout(() => {
        answers.classList.remove('flip-vertical-left');
      }, 200);
    } else if (id === 'card2') {
      let answers = document.getElementById(id);
      answers.classList.add('flip-vertical-left');
      setTimeout(() => {
        answers.classList.remove('flip-vertical-left');
      }, 200);
    } else if (id == 'card3') {
      let answers = document.getElementById(id);
      answers.classList.add('flip-vertical-left');
      setTimeout(() => {
        answers.classList.remove('flip-vertical-left');
      }, 200);
    } else if (id == 'card4') {
      let answers = document.getElementById(id);
      answers.classList.add('flip-vertical-left');
      setTimeout(() => {
        answers.classList.remove('flip-vertical-left');
      }, 200);
    } else if (id == 'card5') {
      let answers = document.getElementById(id);
      answers.classList.add('flip-vertical-left');
      setTimeout(() => {
        answers.classList.remove('flip-vertical-left');
      }, 200);
    } else if (id == 'card6') {
      let answers = document.getElementById(id);
      answers.classList.add('flip-vertical-left');
      setTimeout(() => {
        answers.classList.remove('flip-vertical-left');
      }, 200);
    } else if (id == 'card7') {
      let answers = document.getElementById(id);
      answers.classList.add('flip-vertical-left');
      setTimeout(() => {
        answers.classList.remove('flip-vertical-left');
      }, 200);
    } else if (id == 'card8') {
      let answers = document.getElementById(id);
      answers.classList.add('flip-vertical-left');
      setTimeout(() => {
        answers.classList.remove('flip-vertical-left');
      }, 200);
    } else if (id == 'card9') {
      let answers = document.getElementById(id);
      answers.classList.add('flip-vertical-left');
      setTimeout(() => {
        answers.classList.remove('flip-vertical-left');
      }, 200);
    } else if (id == 'card10') {
      let answers = document.getElementById(id);
      answers.classList.add('flip-vertical-left');
      setTimeout(() => {
        answers.classList.remove('flip-vertical-left');
      }, 200);
    } else if (id == 'card11') {
      let answers = document.getElementById(id);
      answers.classList.add('flip-vertical-left');
      setTimeout(() => {
        answers.classList.remove('flip-vertical-left');
      }, 200);
    } else if (id == 'card12') {
      let answers = document.getElementById(id);
      answers.classList.add('flip-vertical-left');
      setTimeout(() => {
        answers.classList.remove('flip-vertical-left');
      }, 200);
    } else if (id == 'card13') {
      let answers = document.getElementById(id);
      answers.classList.add('flip-vertical-left');
      setTimeout(() => {
        answers.classList.remove('flip-vertical-left');
      }, 200);
    } else if (id == 'card14') {
      let answers = document.getElementById(id);
      answers.classList.add('flip-vertical-left');
      setTimeout(() => {
        answers.classList.remove('flip-vertical-left');
      }, 200);
    } else if (id == 'card15') {
      let answers = document.getElementById(id);
      answers.classList.add('flip-vertical-left');
      setTimeout(() => {
        answers.classList.remove('flip-vertical-left');
      }, 200);
    } else if (id == 'card16') {
      let answers = document.getElementById(id);
      answers.classList.add('flip-vertical-left');
      setTimeout(() => {
        answers.classList.remove('flip-vertical-left');
      }, 200);
    } else if (id == 'card17') {
      let answers = document.getElementById(id);
      answers.classList.add('flip-vertical-left');
      setTimeout(() => {
        answers.classList.remove('flip-vertical-left');
      }, 200);
    } else if (id == 'card18') {
      let answers = document.getElementById(id);
      answers.classList.add('flip-vertical-left');
      setTimeout(() => {
        answers.classList.remove('flip-vertical-left');
      }, 200);
    } else if (id == 'card19') {
      let answers = document.getElementById(id);
      answers.classList.add('flip-vertical-left');
      setTimeout(() => {
        answers.classList.remove('flip-vertical-left');
      }, 200);
    } else if (id == 'card20') {
      let answers = document.getElementById(id);
      answers.classList.add('flip-vertical-left');
      setTimeout(() => {
        answers.classList.remove('flip-vertical-left');
      }, 200);
    }
  }
}
