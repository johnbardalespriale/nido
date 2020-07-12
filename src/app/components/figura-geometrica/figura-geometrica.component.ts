import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-figura-geometrica',
  templateUrl: './figura-geometrica.component.html',
  styleUrls: ['./figura-geometrica.component.sass']
})
export class FiguraGeometricaComponent implements OnInit {
  nivels:any[];
  nivel2:any[];
  nivel3:any[];
  selectedNivel: string;

  todo = [
    {imagen: 'assets/Img/cuadrado-azul.png', name: 'cuadrado-azul', answer: 'correcta'},
    {imagen:'assets/Img/cuadrado-verde.png', name: 'cuadrado-verde', answer: 'error'},
    {imagen:'assets/Img/cuadrado-rojo.png', name: 'cuadrado-rojo', answer: 'correcta'},
    {imagen:'assets/Img/rectangulo-rojo.png', name: 'rectangulo-rojo', answer: 'error'},
    {imagen:'assets/Img/rectangulo-azul.png', name: 'rectangulo-azul', answer: 'error'},
    {imagen:'assets/Img/rectangulo-verde.png', name: 'rectangulo-verde', answer: 'error'},
    {imagen:'assets/Img/triangulo-rojo.png', name: 'triangulo-rojo', answer: 'error'},
    {imagen:'assets/Img/triangulo-verde.png', name: 'triangulo-verde', answer: 'correcta'},
    {imagen:'assets/Img/triangulo-azul.png', name: 'triangulo-azul', answer: 'error'}
  ];

  done = [
  ];

  done2 = [
  ];
  
  
  constructor() { }

  ngOnInit(): void {
    this.nivels = [
      {nivel:'Nivel 1', selected: false}, 
      {nivel:'Nivel 2', selected: false}, 
      {nivel:'Nivel 3', selected: false}
    ];

    this.selectedNivel = 'Nivel 1';

    this.nivel2 = [
      {imagen: 'assets/Img/cuadrado-azul.png', name: 'cuadrado-azul', answer: 'error'},
      {imagen:'assets/Img/cuadrado-verde.png', name: 'cuadrado-verde', answer: 'error'},
      {imagen:'assets/Img/cuadrado-rojo.png', name: 'cuadrado-rojo', answer: 'error'},
      {imagen:'assets/Img/rectangulo-rojo.png', name: 'rectangulo-rojo', answer: 'correcta'},
      {imagen:'assets/Img/rectangulo-azul.png', name: 'rectangulo-azul', answer: 'correcta'},
      {imagen:'assets/Img/rectangulo-verde.png', name: 'rectangulo-verde', answer: 'error'},
      {imagen:'assets/Img/triangulo-rojo.png', name: 'triangulo-rojo', answer: 'error'},
      {imagen:'assets/Img/triangulo-verde.png', name: 'triangulo-verde', answer: 'error'},
      {imagen:'assets/Img/triangulo-azul.png', name: 'triangulo-azul', answer: 'correcta'},
      {imagen: 'assets/Img/circulo-azul.png', name: 'circulo-azul', answer: 'error'},
      {imagen:'assets/Img/circulo-verde.png', name: 'circulo-verde', answer: 'correcta'},
      {imagen:'assets/Img/circulo-rojo.png', name: 'circulo-rojo', answer: 'error'},
    ];

    this.nivel3 = [
      {imagen: 'assets/Img/cuadrado-azul.png', name: 'cuadrado-azul', answer: 'error'},
      {imagen:'assets/Img/cuadrado-verde.png', name: 'cuadrado-verde', answer: 'correcta'},
      {imagen:'assets/Img/cuadrado-rojo.png', name: 'cuadrado-rojo', answer: 'error'},
      {imagen:'assets/Img/rectangulo-rojo.png', name: 'rectangulo-rojo', answer: 'error'},
      {imagen:'assets/Img/rectangulo-azul.png', name: 'rectangulo-azul', answer: 'correcta'},
      {imagen:'assets/Img/rectangulo-verde.png', name: 'rectangulo-verde', answer: 'error'},
      {imagen:'assets/Img/triangulo-rojo.png', name: 'triangulo-rojo', answer: 'error'},
      {imagen:'assets/Img/triangulo-verde.png', name: 'triangulo-verde', answer: 'correcta'},
      {imagen:'assets/Img/triangulo-azul.png', name: 'triangulo-azul', answer: 'error'},
      {imagen: 'assets/Img/circulo-azul.png', name: 'circulo-azul', answer: 'correcta'},
      {imagen:'assets/Img/circulo-verde.png', name: 'circulo-verde', answer: 'error'},
      {imagen:'assets/Img/circulo-rojo.png', name: 'circulo-rojo', answer: 'error'},
      {imagen:'assets/Img/rombo-rojo.png', name: 'rombo-rojo', answer: 'correcta'},
      {imagen:'assets/Img/rombo-azul.png', name: 'rombo-azul', answer: 'error'},
      {imagen:'assets/Img/rombo-verde.png', name: 'rombo-verde', answer: 'error'}
    ];

   

    this.todo.sort(function() {return Math.random() - 0.5});
    this.nivel2.sort(function() {return Math.random() - 0.5});
    this.nivel3.sort(function() {return Math.random() - 0.5});
  }
  resetear(){
    var figuras = document.getElementById("figuras");
    figuras.style.opacity = "1";
    figuras.style.pointerEvents = "inherit";

    while(this.done.length > 0){
      this.done.pop();
    }

    this.todo = [
      {imagen: 'assets/Img/cuadrado-azul.png', name: 'cuadrado-azul', answer: 'correcta'},
      {imagen:'assets/Img/cuadrado-verde.png', name: 'cuadrado-verde', answer: 'error'},
      {imagen:'assets/Img/cuadrado-rojo.png', name: 'cuadrado-rojo', answer: 'correcta'},
      {imagen:'assets/Img/rectangulo-rojo.png', name: 'rectangulo-rojo', answer: 'error'},
      {imagen:'assets/Img/rectangulo-azul.png', name: 'rectangulo-azul', answer: 'error'},
      {imagen:'assets/Img/rectangulo-verde.png', name: 'rectangulo-verde', answer: 'error'},
      {imagen:'assets/Img/triangulo-rojo.png', name: 'triangulo-rojo', answer: 'error'},
      {imagen:'assets/Img/triangulo-verde.png', name: 'triangulo-verde', answer: 'correcta'},
      {imagen:'assets/Img/triangulo-azul.png', name: 'triangulo-azul', answer: 'error'}
    ];

    this.nivel2 = [
      {imagen: 'assets/Img/cuadrado-azul.png', name: 'cuadrado-azul', answer: 'error'},
      {imagen:'assets/Img/cuadrado-verde.png', name: 'cuadrado-verde', answer: 'error'},
      {imagen:'assets/Img/cuadrado-rojo.png', name: 'cuadrado-rojo', answer: 'error'},
      {imagen:'assets/Img/rectangulo-rojo.png', name: 'rectangulo-rojo', answer: 'correcta'},
      {imagen:'assets/Img/rectangulo-azul.png', name: 'rectangulo-azul', answer: 'correcta'},
      {imagen:'assets/Img/rectangulo-verde.png', name: 'rectangulo-verde', answer: 'error'},
      {imagen:'assets/Img/triangulo-rojo.png', name: 'triangulo-rojo', answer: 'error'},
      {imagen:'assets/Img/triangulo-verde.png', name: 'triangulo-verde', answer: 'error'},
      {imagen:'assets/Img/triangulo-azul.png', name: 'triangulo-azul', answer: 'correcta'},
      {imagen: 'assets/Img/circulo-azul.png', name: 'circulo-azul', answer: 'error'},
      {imagen:'assets/Img/circulo-verde.png', name: 'circulo-verde', answer: 'correcta'},
      {imagen:'assets/Img/circulo-rojo.png', name: 'circulo-rojo', answer: 'error'}
    ];

    this.nivel3 = [
      {imagen: 'assets/Img/cuadrado-azul.png', name: 'cuadrado-azul', answer: 'error'},
      {imagen:'assets/Img/cuadrado-verde.png', name: 'cuadrado-verde', answer: 'correcta'},
      {imagen:'assets/Img/cuadrado-rojo.png', name: 'cuadrado-rojo', answer: 'error'},
      {imagen:'assets/Img/rectangulo-rojo.png', name: 'rectangulo-rojo', answer: 'error'},
      {imagen:'assets/Img/rectangulo-azul.png', name: 'rectangulo-azul', answer: 'correcta'},
      {imagen:'assets/Img/rectangulo-verde.png', name: 'rectangulo-verde', answer: 'error'},
      {imagen:'assets/Img/triangulo-rojo.png', name: 'triangulo-rojo', answer: 'error'},
      {imagen:'assets/Img/triangulo-verde.png', name: 'triangulo-verde', answer: 'correcta'},
      {imagen:'assets/Img/triangulo-azul.png', name: 'triangulo-azul', answer: 'error'},
      {imagen: 'assets/Img/circulo-azul.png', name: 'circulo-azul', answer: 'correcta'},
      {imagen:'assets/Img/circulo-verde.png', name: 'circulo-verde', answer: 'error'},
      {imagen:'assets/Img/circulo-rojo.png', name: 'circulo-rojo', answer: 'error'},
      {imagen:'assets/Img/rombo-rojo.png', name: 'rombo-rojo', answer: 'correcta'},
      {imagen:'assets/Img/rombo-azul.png', name: 'rombo-azul', answer: 'error'},
      {imagen:'assets/Img/rombo-verde.png', name: 'rombo-verde', answer: 'error'}
    ];

    this.todo.sort(function() {return Math.random() - 0.5});
    this.nivel2.sort(function() {return Math.random() - 0.5});
    this.nivel3.sort(function() {return Math.random() - 0.5});
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(this.done, event.previousIndex, event.currentIndex);
      console.log(this.done, "data1");
      console.log(event.previousIndex, "data1-index1");
      console.log(event.currentIndex, "data1-index2");
      if(this.done[0].name === "cuadrado-rojo" && this.done[1].name === "triangulo-verde" && this.done[2].name === "cuadrado-azul"){
        var figuras = document.getElementById("figuras");
        figuras.style.opacity = "0.3";
        figuras.style.pointerEvents = "none";
  
        alert("has ganado");
      }else if(this.done[0].name === "circulo-verde" && this.done[1].name === "rectangulo-azul" && this.done[2].name === "triangulo-azul"
      && this.done[3].name === "rectangulo-rojo"){
        var figuras = document.getElementById("figuras");
        figuras.style.opacity = "0.3";
        figuras.style.pointerEvents = "none";
  
        alert("has ganado");
      }else if(this.done[0].name === "cuadrado-verde" && this.done[1].name === "rectangulo-azul" && this.done[2].name === "rombo-rojo"
      && this.done[3].name === "circulo-azul" && this.done[4].name === "triangulo-verde"){
        var figuras = document.getElementById("figuras");
        figuras.style.opacity = "0.3";
        figuras.style.pointerEvents = "none";
  
        alert("has ganado");
      }

    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
      console.log(event.previousContainer.data);
      console.log(this.done, "data2");
      console.log(event.previousIndex, "data2-index3");
      console.log(event.currentIndex, "data2-index4");
        if(this.done[0].name === "cuadrado-rojo" && this.done[1].name === "triangulo-verde" && this.done[2].name === "cuadrado-azul"){
          var figuras = document.getElementById("figuras");
          figuras.style.opacity = "0.3";
          figuras.style.pointerEvents = "none";
    
          alert("has ganado");
        }else if(this.done[0].name === "circulo-verde" && this.done[1].name === "rectangulo-azul" && this.done[2].name === "triangulo-azul"
        && this.done[3].name === "rectangulo-rojo"){
          var figuras = document.getElementById("figuras");
          figuras.style.opacity = "0.3";
          figuras.style.pointerEvents = "none";
    
          alert("has ganado");
        }else if(this.done[0].name === "cuadrado-verde" && this.done[1].name === "rectangulo-azul" && this.done[2].name === "rombo-rojo"
        && this.done[3].name === "circulo-azul" && this.done[4].name === "triangulo-verde"){
          var figuras = document.getElementById("figuras");
          figuras.style.opacity = "0.3";
          figuras.style.pointerEvents = "none";
    
          alert("has ganado");
        }
      
    }
  }
  /** Predicate function that only allows even numbers to be dropped into a list. */
  evenPredicate(items: CdkDrag<any>) {

   for(var i in items.data){
      if (items.data.hasOwnProperty(i)) {
        var answer = items.data[i];
        console.log(answer, "respuesta");
        
       }
    }

    return answer  === "correcta";
  }

}
