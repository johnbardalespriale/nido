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

  constructor() { }

  ngOnInit(): void {

    this.cartas = [
      {nombre: '1', seleccion: false, card: "assets/Img/Pioneras-01.jpg"},
      {nombre: '2', seleccion: false, card: "assets/Img/Pioneras-02.jpg"},
      {nombre: '3', seleccion: false, card: "assets/Img/Pioneras-03.jpg"},
      {nombre: '4', seleccion: false, card: "assets/Img/Pioneras-04.jpg"},
      {nombre: '5', seleccion: false, card: "assets/Img/Pioneras-05.jpg"},
      {nombre: '6', seleccion: false, card: "assets/Img/Pioneras-06.jpg"},
      {nombre: '7', seleccion: false, card: "assets/Img/Pioneras-07.jpg"},
      {nombre: '8', seleccion: false, card: "assets/Img/Pioneras-08.jpg"},
      {nombre: '1', seleccion: false, card: "assets/Img/Pioneras-01.jpg"},
      {nombre: '2', seleccion: false, card: "assets/Img/Pioneras-02.jpg"},
      {nombre: '3', seleccion: false, card: "assets/Img/Pioneras-03.jpg"},
      {nombre: '4', seleccion: false, card: "assets/Img/Pioneras-04.jpg"},
      {nombre: '5', seleccion: false, card: "assets/Img/Pioneras-05.jpg"},
      {nombre: '6', seleccion: false, card: "assets/Img/Pioneras-06.jpg"},
      {nombre: '7', seleccion: false, card: "assets/Img/Pioneras-07.jpg"},
      {nombre: '8', seleccion: false, card: "assets/Img/Pioneras-08.jpg"}
    ];
        
    this.valorDeLaJugada1 = "";
    this.valorDeLaJugada2 = "";
    this.idDeLaJugada1 = "";
    this.idDeLaJugada2 = "";
    this.intentos = 0;

  }

   iniciarJuego() {
    //Nos traemos el elemento que vendría siendo el div con el id juego
    var juego = document.getElementById("juego");
    juego.style.opacity = "1";
  
    //Ordenamos las cartas de manera aleatoria
    this.cartas.sort(function() {return Math.random() - 0.5});
  
    //Este for se encarga de asignarles las imagenes aleatorias para comenzar con el juego
    for ( var i = 0; i < 16 ; i++ ) {
      var carta = this.cartas[i].nombre;
      juego = document.getElementById( i.toString() );
      juego.dataset.valor = carta;
    }
  };

  //Reinicia el juego
  resetearJuego(){
    console.log("usado");
    this.intentos =0;
    this.cartas.sort(function() {return Math.random() - 0.5});
    //Vuelve a asignar de manera aleatoria las cartas
    for ( var i = 0 ; i < 16; i++ ) {
      var carta = this.cartas[i].nombre;
      this.cartas[i].seleccion = false;
      var dato = document.getElementById( i.toString() );
      dato.dataset.valor = carta;
      //Voltea las cartas
      this.reemplazarImagenDeLaCarta(i, "assets/Img/Pioneras-00.jpg");
    }	
  }

   girarCarta () {
    console.log("usado");
   // Hacer clic y pulsar teclas son eventos.
      var evento = window.event;
  
    if ( this.valorDeLaJugada1 === "" ) {
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
  //Cuenta cuántos aciertos llevan
  for( var i = 0 ; i < 16 ; i++ ){
    if ( this.cartas[i].seleccion === true ) {
      aciertos ++;
    }
  }

  //Muestra el mensaje de victoria
  if(aciertos === 16){
    alert("Tuviste "+this.intentos+" intentos. ¡Que bien! ganaste ;)");
  }
}
  

}
