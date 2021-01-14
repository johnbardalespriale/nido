import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.sass']
})
export class PruebaComponent implements OnInit {

  constructor() { }

  javascript() {
    const canvasEle =  <HTMLCanvasElement> document.getElementById('drawContainer');
    const context = canvasEle.getContext("2d");
    let startPosition = {x: 0, y: 0};
    let lineCoordinates = {x: 0, y: 0};
    let isDrawStart = false;
    
    const getClientOffset = (event) => {
        const {pageX, pageY} = event.touches ? event.touches[0] : event;
        console.log("event.touches", event.touches);
        console.log("pageX", pageX);
        console.log("pageY", pageY);
        console.log("canvasEle.offsetLef", canvasEle.offsetLeft);
        console.log("canvasEle.offsetTop", canvasEle.offsetTop);
        const x = pageX - canvasEle.offsetLeft;
        const y = pageY - canvasEle.offsetTop;
        console.log("x", x);
        console.log("y", y);
        return {
           x,
           y
        } 
    }
    
    const drawLine = () => {
      context.beginPath();
      context.moveTo(startPosition.x, startPosition.y);
      context.lineTo(lineCoordinates.x, lineCoordinates.y);
      context.stroke();
      console.log("entro", 10000);
    }
    
    const mouseDownListener = (event) => {
       startPosition = getClientOffset(event);
       isDrawStart = true;
    }
    
    const mouseMoveListener = (event) => {
      if(!isDrawStart) return;
      lineCoordinates = getClientOffset(event);
      clearCanvas();
      drawLine();
    }
    
    const mouseupListener = (event) => {
      isDrawStart = false;
    }
    
    const clearCanvas = () => {
       context.clearRect(0, 0, canvasEle.width, canvasEle.height);
    }
    
    canvasEle.addEventListener('mousedown', mouseDownListener);
    canvasEle.addEventListener('mousemove', mouseMoveListener);
    canvasEle.addEventListener('mouseup', mouseupListener);
    
    canvasEle.addEventListener('touchstart', mouseDownListener);
    canvasEle.addEventListener('touchmove', mouseMoveListener);
    canvasEle.addEventListener('touchend', mouseupListener);
  }

  ngOnInit(): void {

    setTimeout(() => {
      this.javascript();
    }, 1000);
  }

}
