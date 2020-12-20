import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ServicioPalabrasService } from '../servicio-palabras.service';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.sass']
})
export class AhorcadoComponent implements OnInit {

  URL_IMAGENES_PRE = "assets/Img/"
  URL_IMAGENES_EXT = ".jpg"  
  
    nivel1 = ['perro', 'loro', 'gato', 'hamster', 'tortuga'];
    nivel2 = ['pera', 'manzana', 'papaya', 'chirimoya', 'ciruela'];
    nivel3 = ['pepino', 'poro', 'apio', 'brocoli', 'coliflor'];
    constructor(
      private servicioPalabras: ServicioPalabrasService
      ) {
  
       //Rellenamos en el constructor las letras que vamos a utilizar para el juego (minusculas de la a-z)
     for(let letter=0; letter<26; letter++) {
        this.abecedario[letter] = String.fromCharCode(97+letter)
      }     
     } 
  
     //Booleanos que controlan la aparicion o desaparicion de los botones de jugar y volver a intentar   
    
    juegoOn = true;
    juegoOff = !this.juegoOn;
  
    //Definimos las variables del scope que van a interactuar con el DOM por medio del bindeado
  
  palabraoculta: string; 
  mascara;
  nivels: any[];
  selectedNivel: string = 'Nivel 0';
  abecedario = [];
  vidas = 4;
  letrasUsadas = "";
  mensaje = "";
  selectedLetter;
  vidaImagen = this.URL_IMAGENES_PRE+"ahorcadoinicial"+this.URL_IMAGENES_EXT; //URL imagen cambiante durante los fallos en el juego
  
  
  // Cuenta atras del juego. Si la cuenta llega a cero, el juego se acaba. 
  
  timeLeft: number = 90;
  interval;
  
  ngOnInit() {   
    this.nivels = [
      { nivel: 'Nivel 1', selected: false },
      { nivel: 'Nivel 2', selected: false },
      { nivel: 'Nivel 3', selected: false },
    ];
 
  }
  
  //Creamos el método dibujar juego que, una vez elegida la palabra a adivinar, va a enmascararla y mostrarla oculta en el DOM
  
  dibujarJuego(elegida: string) {
    this.palabraoculta = elegida;
    let temp = [...elegida];  
    for (let i=0; i<elegida.length; i++) {   
     temp[i] = '-'
      }    
      this.mascara = temp.join("");
  }     
  
  //Metodo o función principal que se encarga de ejecutar todas las acciones del juego, una vez que pulsamos el boton de "probar suerte" (en el HTML)
  
    game(selectedLetter) {
      if(selectedLetter != undefined ){
        let temp = [...this.mascara];  //Creamos una array temporal que recibe el valor actual de la palabra oculta  
        //let character = 'o'
        let contador = temp.length; //creamos una variable que nos sirve para evaluar. Tambien podemos usar un boolean
    
        for (let i=0; i<temp.length; i++) { //Recorremos la mascara
          if(this.palabraoculta.charAt(i) ==selectedLetter) { //Si la palabra elegida en el comboBox resulta que existe en el bucle, se ejecuta la acción
          temp[i] = selectedLetter; //sustituimos el valor de la posición del array temporal por la palabra elegida
          contador--;       //Indicamos que hemos encontrado un valor correcto, disminuyendo el contador para que sea distinto al valor original 
            }
          } 
          if(contador == temp.length) { //Si el contador tiene un valor identico al original, significa que no hemos acertado letra, y por tanto perdemos vidas
            this.vidas--;
            this.lifes();
          }
          this.mascara = temp.join(""); // modificamos el valor de la mascara con el valor del array temporal, convirtiendolo en string por medio de join()
          this.letrasEmpleadas(selectedLetter);  //Insertamos la letra elegida en el array de letras empleadas
       
          if(this.mascara == this.palabraoculta) { //Si la palabra de la mascara coincide con la palabra oculta, significa que hemos ganado. ¡HURRA!       
          this.gameOver(); //En tal caso, ejecutariamos la función de fin de juego
          }  
      }
        
    }  
  
    // Metodo que rellena el array de letras utilizadas durante el juego
  
    letrasEmpleadas(selectedLetter) {
      let tempusadas = [...this.letrasUsadas];
      tempusadas[(tempusadas.length)] = selectedLetter+" ";
      this.letrasUsadas = tempusadas.join("");
    }
  
  
    //Metodo que contiene un switch que nos permite cambiar la imagen que se muestra durante el juego y determinar si el jugador ha perdido, por medio del contador de vidas. 
  
    lifes() {
  switch(this.vidas) {
    case 4:
        this.vidaImagen = this.URL_IMAGENES_PRE+"ahorcadoinicial"+this.URL_IMAGENES_EXT;    
      break;
      case 3:    
      this.vidaImagen = this.URL_IMAGENES_PRE+"ahorcadounfallo"+this.URL_IMAGENES_EXT;    
      break;
      case 2: 
      this.vidaImagen = this.URL_IMAGENES_PRE+"ahorcadodosfallos"+this.URL_IMAGENES_EXT;    
      break;
      case 1: 
      this.vidaImagen = this.URL_IMAGENES_PRE+"ahorcadotresfallos"+this.URL_IMAGENES_EXT;    
      break;
      case 0: 
       this.vidaImagen = this.URL_IMAGENES_PRE+"ahorcadocompleto"+this.URL_IMAGENES_EXT;    
      this.gameOver();
      break;   
  
      }
    }

    limpiar(){
      this.vidas = 4;
      this.letrasUsadas = "";
      this.lifes();
      this.getPalabras();
    }
  
    getPalabras() {
      var palabraElegida: string;

      if(this.selectedNivel === 'Nivel 1'){
        this.servicioPalabras.getPost().subscribe((
          words: string[] )=> {
    
        //Numero aleatorio que usa la longitud de la consulta para elaborar una posicion en el array
            //let aleatorio = (Math.floor(Math.random() * (words.length - 0 + 1)) + 0); 
            let aleatorio1 = Math.floor(Math.random() * (6 - 0)) + 0;
            this.mensaje = "El nombre de la mascota es: ";
            palabraElegida = this.nivel1[aleatorio1];
            
            this.dibujarJuego(palabraElegida); //Al iniciar, ejecutamos el metodo dibujar  
               
          }      
        )
      }if(this.selectedNivel === 'Nivel 2'){
        this.servicioPalabras.getPost().subscribe((
          words: string[] )=> {
    
        //Numero aleatorio que usa la longitud de la consulta para elaborar una posicion en el array
            //let aleatorio = (Math.floor(Math.random() * (words.length - 0 + 1)) + 0); 
            let aleatorio1 = Math.floor(Math.random() * (6 - 0)) + 0;
            this.mensaje = "El nombre de la fruta es: ";
            palabraElegida = this.nivel2[aleatorio1];
            
            this.dibujarJuego(palabraElegida); //Al iniciar, ejecutamos el metodo dibujar  
               
          }      
        )
      }if(this.selectedNivel === 'Nivel 3'){
        this.servicioPalabras.getPost().subscribe((
          words: string[] )=> {
    
        //Numero aleatorio que usa la longitud de la consulta para elaborar una posicion en el array
            //let aleatorio = (Math.floor(Math.random() * (words.length - 0 + 1)) + 0); 
            let aleatorio1 = Math.floor(Math.random() * (6 - 0)) + 0;
            this.mensaje = "El nombre del vegetal es: ";
            palabraElegida = this.nivel3[aleatorio1];
            
            this.dibujarJuego(palabraElegida); //Al iniciar, ejecutamos el metodo dibujar  
               
          }      
        )
      }
    }
  
  //Metodo que ejecutamos cuando el juego se termina, tanto si hemos perdido o ganado
  
    gameOver() {
       this.juegoOn = false;
    this.juegoOff = !this.juegoOn
      if(this.vidas==0){ //Evaluamos si hemos perdido por medio del marcador de vidas del jugador
    this.mascara = this.palabraoculta;
    Swal.fire({
      html: "<img src='assets/Img/carita_triste.jpg' style='width:100px;'> <p style='margin-top:25px;'>Vuelve a intentarlo.</p>",
    });
    } else {
      Swal.fire({
        html: "<h1 style='color:#1db31d;'>¡EXCELENTE!</h1> Encontraste la palabra"
      });
      clearInterval(this.interval);
    }
    }
  
    //Metodo que nos permite recargar la página
    reload() {
      window.location.reload();
    }

}
