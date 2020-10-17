import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-puntos',
  templateUrl: './puntos.component.html',
  styleUrls: ['./puntos.component.sass']
})
export class PuntosComponent implements OnInit {
  nivels: any[];
  selectedNivel: string;
  punto1: string;
  punto2: string;
  punto3: string;
  punto4: string;
  punto5: string;
  punto6: string;
  punto7: string;
  punto8: string;
  punto9: string;
  punto10: string;
  prevalue: number;
  postvalue: number;
  constructor() {
  }

  ngOnInit() {

    this.punto1 = '0';
    this.punto2 = '0';
    this.punto3 = '0';
    this.punto4 = '0';
    this.punto5 = '0';
    this.punto6 = '0';
    this.punto7 = '0';
    this.punto8 = '0';
    this.punto9 = '0';
    this.punto10 = '0';

    this.nivels = [
      { nivel: 'Nivel 1', selected: false },
      { nivel: 'Nivel 2', selected: false },
      { nivel: 'Nivel 3', selected: false },
    ];

  }

  prevalues(number){
    console.log(this.prevalue, number);
    this.prevalue = number;
  }

  draw(number){
    this.postvalue = number;
    console.log(this.prevalue, number);
    if(this.postvalue === 1 && this.prevalue === 0){
      this.punto1 = '0,1';
    }else if(this.postvalue === 2 && this.prevalue === 1){
      this.punto2 = '1,2';
    }else if(this.postvalue === 3 && this.prevalue === 2){
      this.punto3 = '2,3';
    }else if(this.postvalue === 4 && this.prevalue === 3){
      this.punto4 = '3,4';
    }else if(this.postvalue === 5 && this.prevalue === 4){
      this.punto5 = '4,5';
    }else if(this.postvalue === 6 && this.prevalue === 5){
      this.punto6 = '5,6';
    }else if(this.postvalue === 7 && this.prevalue === 6){
      this.punto7 = '6,7';
    }else if(this.postvalue === 8 && this.prevalue === 7){
      this.punto8 = '7,8';
    }else if(this.postvalue === 9 && this.prevalue === 8){
      this.punto9 = '8,9';
      this.punto10 = '8,9';
      this.mensaje();
    }
    
  }

  mensaje(){
    Swal.fire({
      title: '¡GANASTE!',
      text: 'Lograste unir los puntos y descubir la figura.',
    });
  }

  resetear(nivel){
    this.punto1 = '0';
    this.punto2 = '0';
    this.punto3 = '0';
    this.punto4 = '0';
    this.punto5 = '0';
    this.punto6 = '0';
    this.punto7 = '0';
    this.punto8 = '0';
    this.punto9 = '0';
    this.punto10 = '0';
  }

}
