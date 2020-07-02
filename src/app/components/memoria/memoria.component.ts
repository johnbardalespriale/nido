import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memoria',
  templateUrl: './memoria.component.html',
  styleUrls: ['./memoria.component.sass']
})
export class MemoriaComponent implements OnInit {
  cartas: any;
  intentos: number;
  valorDeLaJugada1: string;
  valorDeLaJugada2: string;
  idDeLaJugada1: string;
  idDeLaJugada2: string;
  habilitar: number;
  favoriteSeason: any;
  nivels: any[];
  nivel1:any;
  nivel2:any;
  nivel3;
  constructor() { }

  ngOnInit(): void {

    this.nivel1 = [
      {nombre: '1', seleccion: false, card: "assets/Img/oso.png"},
      {nombre: '2', seleccion: false, card: "assets/Img/mono.png"},
      {nombre: '3', seleccion: false, card: "assets/Img/cuy.png"},
      {nombre: '4', seleccion: false, card: "assets/Img/gato.png"},
      {nombre: '5', seleccion: false, card: "assets/Img/loro.png"},
      {nombre: '6', seleccion: false, card: "assets/Img/alpaca.png"},
      {nombre: '1', seleccion: false, card: "assets/Img/oso.png"},
      {nombre: '2', seleccion: false, card: "assets/Img/mono.png"},
      {nombre: '3', seleccion: false, card: "assets/Img/cuy.png"},
      {nombre: '4', seleccion: false, card: "assets/Img/gato.png"},
      {nombre: '5', seleccion: false, card: "assets/Img/loro.png"},
      {nombre: '6', seleccion: false, card: "assets/Img/alpaca.png"}
    ];

    this.nivel2 = [
      {nombre: '1', seleccion: false, card: "assets/Img/oso.png"},
      {nombre: '2', seleccion: false, card: "assets/Img/mono.png"},
      {nombre: '3', seleccion: false, card: "assets/Img/cuy.png"},
      {nombre: '4', seleccion: false, card: "assets/Img/gato.png"},
      {nombre: '5', seleccion: false, card: "assets/Img/loro.png"},
      {nombre: '6', seleccion: false, card: "assets/Img/alpaca.png"},
      {nombre: '7', seleccion: false, card: "assets/Img/perro.png"},
      {nombre: '8', seleccion: false, card: "assets/Img/leon.png"},
      {nombre: '1', seleccion: false, card: "assets/Img/oso.png"},
      {nombre: '2', seleccion: false, card: "assets/Img/mono.png"},
      {nombre: '3', seleccion: false, card: "assets/Img/cuy.png"},
      {nombre: '4', seleccion: false, card: "assets/Img/gato.png"},
      {nombre: '5', seleccion: false, card: "assets/Img/loro.png"},
      {nombre: '6', seleccion: false, card: "assets/Img/alpaca.png"},
      {nombre: '7', seleccion: false, card: "assets/Img/perro.png"},
      {nombre: '8', seleccion: false, card: "assets/Img/leon.png"}
    ];

    this.nivel3 = [
      {nombre: '1', seleccion: false, card: "assets/Img/oso.png"},
      {nombre: '2', seleccion: false, card: "assets/Img/mono.png"},
      {nombre: '3', seleccion: false, card: "assets/Img/cuy.png"},
      {nombre: '4', seleccion: false, card: "assets/Img/gato.png"},
      {nombre: '5', seleccion: false, card: "assets/Img/loro.png"},
      {nombre: '6', seleccion: false, card: "assets/Img/alpaca.png"},
      {nombre: '7', seleccion: false, card: "assets/Img/perro.png"},
      {nombre: '8', seleccion: false, card: "assets/Img/leon.png"},
      {nombre: '9', seleccion: false, card: "assets/Img/hipopotamo.png"},
      {nombre: '10', seleccion: false, card: "assets/Img/elefante.png"},
      {nombre: '1', seleccion: false, card: "assets/Img/oso.png"},
      {nombre: '2', seleccion: false, card: "assets/Img/mono.png"},
      {nombre: '3', seleccion: false, card: "assets/Img/cuy.png"},
      {nombre: '4', seleccion: false, card: "assets/Img/gato.png"},
      {nombre: '5', seleccion: false, card: "assets/Img/loro.png"},
      {nombre: '6', seleccion: false, card: "assets/Img/alpaca.png"},
      {nombre: '7', seleccion: false, card: "assets/Img/perro.png"},
      {nombre: '8', seleccion: false, card: "assets/Img/leon.png"},
      {nombre: '9', seleccion: false, card: "assets/Img/hipopotamo.png"},
      {nombre: '10', seleccion: false, card: "assets/Img/elefante.png"}
    ];

    this.nivels = [
      {nivel:'Nivel 1', selected: true},
      {nivel:'Nivel 2', selected: false}, 
      {nivel:'Nivel 3', selected: false}
    ];

    this.valorDeLaJugada1 = "";
    this.valorDeLaJugada2 = "";
    this.idDeLaJugada1 = "";
    this.idDeLaJugada2 = "";
    this.intentos = 0;

  }

   iniciarJuego() {
    this.habilitar = 1;
    var juego = document.getElementById("juego");
    juego.style.opacity = "1";
    //Nos traemos el elemento que vendría siendo el div con el id juego
    if(this.favoriteSeason === "Nivel 1"){
      this.cartas = this.nivel1;
      //Ordenamos las cartas de manera aleatoria
      this.cartas.sort(function() {return Math.random() - 0.5});
      //Este for se encarga de asignarles las imagenes aleatorias para comenzar con el juego
      for ( var i = 0; i < 12 ; i++ ) {
        var carta = this.cartas[i].nombre;
        juego = document.getElementById( i.toString() );
        juego.dataset.valor = carta;
      }
    }else if(this.favoriteSeason === "Nivel 2"){
      this.cartas = this.nivel2;
      //Ordenamos las cartas de manera aleatoria
      this.cartas.sort(function() {return Math.random() - 0.5});
      //Este for se encarga de asignarles las imagenes aleatorias para comenzar con el juego
      for ( var i = 0; i < 16 ; i++ ) {
        var carta = this.cartas[i].nombre;
        juego = document.getElementById( i.toString() );
        juego.dataset.valor = carta;
      }
    } else {
      this.cartas = this.nivel3;
      //Ordenamos las cartas de manera aleatoria
      this.cartas.sort(function() {return Math.random() - 0.5});
      //Este for se encarga de asignarles las imagenes aleatorias para comenzar con el juego
      for ( var i = 0; i < 20 ; i++ ) {
        var carta = this.cartas[i].nombre;
        juego = document.getElementById( i.toString() );
        juego.dataset.valor = carta;
      }
    }
  };

  //Reinicia el juego
  resetearJuego(){
    this.habilitar = 0;
    var juego = document.getElementById("juego");
    juego.style.opacity = "0.3";
    this.intentos =0;
    this.cartas.sort(function() {return Math.random() - 0.5});

    if(this.favoriteSeason === "Nivel 1"){
      //Vuelve a asignar de manera aleatoria las cartas
      for ( var i = 0 ; i < 12; i++ ) {
        var carta = this.cartas[i].nombre;
        this.cartas[i].seleccion = false;
        var dato = document.getElementById( i.toString() );
        dato.dataset.valor = carta;
        //Voltea las cartas
        this.reemplazarImagenDeLaCarta(i, "assets/Img/Pioneras-00.jpg");
      }
    }else if(this.favoriteSeason === "Nivel 2"){
      for ( var i = 0 ; i < 16; i++ ) {
        var carta = this.cartas[i].nombre;
        this.cartas[i].seleccion = false;
        var dato = document.getElementById( i.toString() );
        dato.dataset.valor = carta;
        //Voltea las cartas
        this.reemplazarImagenDeLaCarta(i, "assets/Img/Pioneras-00.jpg");
      }
    }else{
      for ( var i = 0 ; i < 20; i++ ) {
        var carta = this.cartas[i].nombre;
        this.cartas[i].seleccion = false;
        var dato = document.getElementById( i.toString() );
        dato.dataset.valor = carta;
        //Voltea las cartas
        this.reemplazarImagenDeLaCarta(i, "assets/Img/Pioneras-00.jpg");
      }
    }
  }

   girarCarta () {
   // Hacer clic y pulsar teclas son eventos.
      var evento = window.event;
    if(this.habilitar === 1){
      if( this.valorDeLaJugada1 === "" ) {
        ++this.intentos;
    
        //Extraemos el valor de la carta
        const target = evento.target as HTMLTextAreaElement;
        this.valorDeLaJugada1 = target.dataset.valor;
        this.idDeLaJugada1 = target.id;
        this.reemplazarImagenDeLaCarta(this.idDeLaJugada1, this.cartas[parseInt(this.idDeLaJugada1)].card);
    
      } else {
        const target = evento.target as HTMLTextAreaElement;
        this.valorDeLaJugada2 = target.dataset.valor 
        this.idDeLaJugada2 = target.id;
        this.reemplazarImagenDeLaCarta(this.idDeLaJugada2, this.cartas[parseInt(this.idDeLaJugada2)].card);
        this.validarSiLasCartasSonDiferentes();
        this.validarSiLasCartasSonIguales();
        this.comprobarSiHaGanadoElJuego();
    
      }
   }
  }
   validarSiLasCartasSonDiferentes () {
    //Verificamos si ya hay 2 cartas seleccionadas y si son iguales
    if ( this.valorDeLaJugada1 !== this.valorDeLaJugada2 ) {
    setTimeout(() => {
      this.reemplazarImagenDeLaCarta(this.idDeLaJugada1, "assets/Img/Pioneras-00.jpg")
      this.reemplazarImagenDeLaCarta(this.idDeLaJugada2, "assets/Img/Pioneras-00.jpg")
      this.vaciar();
    },600);
  }
}

validarSiLasCartasSonIguales () {
  if ( 
    this.valorDeLaJugada1 === this.valorDeLaJugada2 
      && this.cartas[parseInt(this.idDeLaJugada1)].seleccion === false
      && this.cartas[parseInt(this.idDeLaJugada2)].seleccion === false
    ) {
      this.cartas[parseInt(this.idDeLaJugada1)].seleccion = true;
      this.cartas[parseInt(this.idDeLaJugada2)].seleccion = true;
      this.vaciar();
    }
}

//Deseleccionamos las cartas
vaciar ()  {
  this.valorDeLaJugada1 = "";	
  this.valorDeLaJugada2 = "";	

  this.idDeLaJugada1 = "";
  this.idDeLaJugada2 = "";
}

//Para mostrar o ocultar las cartas
reemplazarImagenDeLaCarta(idDeLaCarta, nuevaImagenDeLaCarta) {
  (<HTMLImageElement>document.getElementById(idDeLaCarta.toString())).src = nuevaImagenDeLaCarta;
}	

//Comprobamos si ya se finalizó el juego para mostrar el mensaje que ganaron
comprobarSiHaGanadoElJuego () {
    var aciertos = 0;
    if(this.favoriteSeason === "Nivel 1"){
      //Cuenta cuántos aciertos llevan
      for( var i = 0 ; i < 12 ; i++ ){
        if ( this.cartas[i].seleccion === true ) {
          aciertos ++;
        }
      }
      //Muestra el mensaje de victoria
        if(aciertos === 12){
          alert("Tuviste "+this.intentos+" intentos. ¡Que bien! ganaste ;)");
        }
    }else{
      //Cuenta cuántos aciertos llevan
      for( var i = 0 ; i < 16 ; i++ ){
        if ( this.cartas[i].seleccion === true ) {
          aciertos ++;
        }
      }
    }
    //Muestra el mensaje de victoria
    if(aciertos === 16){
      alert("Tuviste "+this.intentos+" intentos. ¡Que bien! ganaste ;)");
    }
  }
}
