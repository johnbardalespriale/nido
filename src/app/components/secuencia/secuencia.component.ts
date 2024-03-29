import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-secuencia',
  templateUrl: './secuencia.component.html',
  styleUrls: ['./secuencia.component.sass'],
})
export class SecuenciaComponent implements OnInit {
  peinados: any[];
  dientes: any[];
  ropas: any[];
  array: any[];
  nivels: any[];
  selectedNivel: string;
  casita: any[];
  resbaladera: any[];
  levantarse: any[];
  insecto: any[];
  vaca: any[];
  lluvia: any[];
  cont1: number;
  cont2: number;
  cont3: number;
  texto: String;
  validador: number;
  constructor() {}

  ngOnInit(): void {
    this.texto = "";
    this.validador = 0;
    this.cont1 = 0;
    this.cont2 = 0;
    this.cont3 = 0;

    this.nivels = [
      { nivel: 'Nivel 1', selected: false },
      { nivel: 'Nivel 2', selected: false },
      { nivel: 'Nivel 3', selected: false },
    ];

    //this.selectedNivel = 'Nivel 1';

    this.peinados = [
      { imagen: 'assets/Img/peinado-1.png', posicion: 0, disabled: false, valor: 'peinado'},
      { imagen: 'assets/Img/peinado-2.png', posicion: 1, disabled: false, valor: 'peinado'},
      { imagen: 'assets/Img/peinado-3.png', posicion: 2, disabled: false, valor: 'peinado'},
    ];

    this.dientes = [
      { imagen: 'assets/Img/cepillo-1.png', posicion: 0, disabled: false },
      { imagen: 'assets/Img/cepillo-2.png', posicion: 1, disabled: false },
      { imagen: 'assets/Img/cepillo-3.png', posicion: 2, disabled: false },
    ];

    this.ropas = [
      { imagen: 'assets/Img/ropa-1.png', posicion: 0, disabled: false },
      { imagen: 'assets/Img/ropa-2.png', posicion: 1, disabled: false },
      { imagen: 'assets/Img/ropa-3.png', posicion: 2, disabled: false },
    ];

    this.casita = [
      { imagen: 'assets/Img/casita-1.png', posicion: 0, disabled: false },
      { imagen: 'assets/Img/casita-2.png', posicion: 1, disabled: false },
      { imagen: 'assets/Img/casita-3.png', posicion: 2, disabled: false },
      { imagen: 'assets/Img/casita-4.png', posicion: 3, disabled: false },
    ];

    this.resbaladera = [
      { imagen: 'assets/Img/resbaladera-1.png', posicion: 0, disabled: false },
      { imagen: 'assets/Img/resbaladera-2.png', posicion: 1, disabled: false },
      { imagen: 'assets/Img/resbaladera-3.png', posicion: 2, disabled: false },
      { imagen: 'assets/Img/resbaladera-4.png', posicion: 3, disabled: false },
    ];

    this.levantarse = [
      { imagen: 'assets/Img/levantarse-1.png', posicion: 0, disabled: false },
      { imagen: 'assets/Img/levantarse-2.png', posicion: 1, disabled: false },
      { imagen: 'assets/Img/levantarse-3.png', posicion: 2, disabled: false },
      { imagen: 'assets/Img/levantarse-4.png', posicion: 3, disabled: false },
    ];

    this.insecto = [
      { imagen: 'assets/Img/insecto-1.png', posicion: 0, disabled: false },
      { imagen: 'assets/Img/insecto-2.png', posicion: 1, disabled: false },
      { imagen: 'assets/Img/insecto-3.png', posicion: 2, disabled: false },
      { imagen: 'assets/Img/insecto-4.png', posicion: 3, disabled: false },
      { imagen: 'assets/Img/insecto-5.png', posicion: 4, disabled: false },
      { imagen: 'assets/Img/insecto-6.png', posicion: 5, disabled: false },
    ];

    this.vaca = [
      { imagen: 'assets/Img/vaca-1.png', posicion: 0, disabled: false },
      { imagen: 'assets/Img/vaca-2.png', posicion: 1, disabled: false },
      { imagen: 'assets/Img/vaca-3.png', posicion: 2, disabled: false },
      { imagen: 'assets/Img/vaca-4.png', posicion: 3, disabled: false },
      { imagen: 'assets/Img/vaca-5.png', posicion: 4, disabled: false },
      { imagen: 'assets/Img/vaca-6.png', posicion: 5, disabled: false },
    ];

    this.lluvia = [
      { imagen: 'assets/Img/lluvia-1.png', posicion: 0, disabled: false },
      { imagen: 'assets/Img/lluvia-2.png', posicion: 1, disabled: false },
      { imagen: 'assets/Img/lluvia-3.png', posicion: 2, disabled: false },
      { imagen: 'assets/Img/lluvia-4.png', posicion: 3, disabled: false },
      { imagen: 'assets/Img/lluvia-5.png', posicion: 4, disabled: false },
      { imagen: 'assets/Img/lluvia-6.png', posicion: 5, disabled: false },
    ];

    this.peinados.sort(function () {
      return Math.random() - 0.5;
    });
    this.dientes.sort(function () {
      return Math.random() - 0.5;
    });
    this.ropas.sort(function () {
      return Math.random() - 0.5;
    });
    this.casita.sort(function () {
      return Math.random() - 0.5;
    });
    this.resbaladera.sort(function () {
      return Math.random() - 0.5;
    });
    this.levantarse.sort(function () {
      return Math.random() - 0.5;
    });
    this.insecto.sort(function () {
      return Math.random() - 0.5;
    });
    this.vaca.sort(function () {
      return Math.random() - 0.5;
    });
    this.lluvia.sort(function () {
      return Math.random() - 0.5;
    });
  }

  randomValidator(){
   this.validador = Math.floor(Math.random() * (4 - 1)) + 1;
   console.log(this.validador);
  }

  resetear(nivel) {
    
    this.cont1 = 0;
    this.cont2 = 0;
    this.cont3 = 0;
    this.peinados.sort(function () {
      return Math.random() - 0.5;
    });
    this.dientes.sort(function () {
      return Math.random() - 0.5;
    });
    this.ropas.sort(function () {
      return Math.random() - 0.5;
    });
    this.casita.sort(function () {
      return Math.random() - 0.5;
    });
    this.resbaladera.sort(function () {
      return Math.random() - 0.5;
    });
    this.levantarse.sort(function () {
      return Math.random() - 0.5;
    });
    this.insecto.sort(function () {
      return Math.random() - 0.5;
    });
    this.vaca.sort(function () {
      return Math.random() - 0.5;
    });
    this.lluvia.sort(function () {
      return Math.random() - 0.5;
    });

    this.randomValidator();

    if (nivel === 'Nivel 1') {
      setTimeout(() => {
      var peinado = document.getElementById('peinado');
      var diente = document.getElementById('diente');
      var ropa = document.getElementById('ropa');

      if(peinado != null){
        peinado.style.opacity = '1';
        this.texto = "El niño está en la peluquería cortándose el cabello."
      } else if(diente != null){
        diente.style.opacity = '1';
        this.texto = "La niña está cepillándose los dientes."
      }else if( ropa != null){
        ropa.style.opacity = '1';
        this.texto = "El niño está poniéndose su ropa."
      }
      }, 300);

      for (let i in this.peinados) {
        this.peinados[i].disabled = false;
        this.dientes[i].disabled = false;
        this.ropas[i].disabled = false;
      }
    }

    if (nivel === 'Nivel 2') {
      
      setTimeout(() => {
        var casita = document.getElementById('casita');
        var resbaladera = document.getElementById('resbaladera');
        var levantarse = document.getElementById('levantarse');
  
        if(casita != null){
          casita.style.opacity = '1';
          this.texto = "La niña arma una casita para aves."
        } else if(resbaladera != null){
          resbaladera.style.opacity = '1';
          this.texto = "El niño baja por la resbaladilla."
        }else if( levantarse != null){
          levantarse.style.opacity = '1';
          this.texto = "El niño se alista para tomar su desayuno."
        }
        }, 300);

      for (let i in this.casita) {
        this.casita[i].disabled = false;
        this.resbaladera[i].disabled = false;
        this.levantarse[i].disabled = false;
      }
    }

    if (nivel === 'Nivel 3') {

      setTimeout(() => {
        var insecto = document.getElementById('insecto');
        var vaca = document.getElementById('vaca');
        var lluvia = document.getElementById('lluvia');
  
        if(insecto != null){
          insecto.style.opacity = '1';
          this.texto = "El proceso del agua embotellada."
        } else if(vaca != null){
          vaca.style.opacity = '1';
          this.texto = "El proceso de la miel de aveja."
        }else if( lluvia != null){
          lluvia.style.opacity = '1';
          this.texto = "El proceso de la harina de trigo."
        }
        }, 300);

      for (let i in this.insecto) {
        this.insecto[i].disabled = false;
        this.vaca[i].disabled = false;
        this.lluvia[i].disabled = false;
      }
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.peinados, event.previousIndex, event.currentIndex);

    if (
      this.peinados[0].posicion === 0 &&
      this.peinados[1].posicion === 1 &&
      this.peinados[2].posicion === 2
    ) {
      var peinado = document.getElementById('peinado');
      peinado.style.opacity = '0.3';

      for (let i in this.peinados) {
        this.peinados[i].disabled = true;
      }

      Swal.fire({
        html: "<h1 style='color:#1db31d;'>¡FELICIDADES!</h1> Encontraste la secuencia "
      });

      this.cont1++;
    }
  }

  dropDientes(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.dientes, event.previousIndex, event.currentIndex);

    if (
      this.dientes[0].posicion === 0 &&
      this.dientes[1].posicion === 1 &&
      this.dientes[2].posicion === 2
    ) {
      var diente = document.getElementById('diente');
      diente.style.opacity = '0.3';

      for (let i in this.dientes) {
        this.dientes[i].disabled = true;
      }

      Swal.fire({
        html: "<h1 style='color:#1db31d;'>¡FELICIDADES!</h1> Encontraste la secuencia "
      });

      this.cont1++;
    }
  }

  dropRopas(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.ropas, event.previousIndex, event.currentIndex);

    if (
      this.ropas[0].posicion === 0 &&
      this.ropas[1].posicion === 1 &&
      this.ropas[2].posicion === 2
    ) {
      var ropa = document.getElementById('ropa');
      ropa.style.opacity = '0.3';

      for (let i in this.ropas) {
        this.ropas[i].disabled = true;
      }

      Swal.fire({
        html: "<h1 style='color:#1db31d;'>¡FELICIDADES!</h1> Encontraste la secuencia "
      });

      this.cont1++;
    }
  }

  dropCasita(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.casita, event.previousIndex, event.currentIndex);

    if (
      this.casita[0].posicion === 0 &&
      this.casita[1].posicion === 1 &&
      this.casita[2].posicion === 2 &&
      this.casita[3].posicion === 3
    ) {
      var casita = document.getElementById('casita');
      casita.style.opacity = '0.3';

      for (let i in this.casita) {
        this.casita[i].disabled = true;
      }
      Swal.fire({
        html: "<h1 style='color:#1db31d;'>¡FELICIDADES!</h1> Encontraste la secuencia "
      });
      this.cont2++;
    }
  }

  dropResbaladera(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.resbaladera, event.previousIndex, event.currentIndex);

    if (
      this.resbaladera[0].posicion === 0 &&
      this.resbaladera[1].posicion === 1 &&
      this.resbaladera[2].posicion === 2 &&
      this.resbaladera[3].posicion === 3
    ) {
      var resbaladera = document.getElementById('resbaladera');
      resbaladera.style.opacity = '0.3';

      for (let i in this.resbaladera) {
        this.resbaladera[i].disabled = true;
      }
      Swal.fire({
        html: "<h1 style='color:#1db31d;'>¡FELICIDADES!</h1> Encontraste la secuencia "
      });
      this.cont2++;
    }
  }

  dropLevantarse(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.levantarse, event.previousIndex, event.currentIndex);

    if (
      this.levantarse[0].posicion === 0 &&
      this.levantarse[1].posicion === 1 &&
      this.levantarse[2].posicion === 2 &&
      this.levantarse[3].posicion === 3
    ) {
      var levantarse = document.getElementById('levantarse');
      levantarse.style.opacity = '0.3';

      for (let i in this.levantarse) {
        this.levantarse[i].disabled = true;
      }
      Swal.fire({
        html: "<h1 style='color:#1db31d;'>¡FELICIDADES!</h1> Encontraste la secuencia "
      });
      this.cont2++;
    }
  }

  dropInsecto(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.insecto, event.previousIndex, event.currentIndex);

    if (
      this.insecto[0].posicion === 0 &&
      this.insecto[1].posicion === 1 &&
      this.insecto[2].posicion === 2 &&
      this.insecto[3].posicion === 3 &&
      this.insecto[4].posicion === 4 &&
      this.insecto[5].posicion === 5
    ) {
      var insecto = document.getElementById('insecto');
      insecto.style.opacity = '0.3';

      for (let i in this.insecto) {
        this.insecto[i].disabled = true;
      }
      Swal.fire({
        html: "<h1 style='color:#1db31d;'>¡FELICIDADES!</h1> Encontraste la secuencia "
      });

      this.cont3++;
    }
  }

  dropVaca(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.vaca, event.previousIndex, event.currentIndex);

    if (
      this.vaca[0].posicion === 0 &&
      this.vaca[1].posicion === 1 &&
      this.vaca[2].posicion === 2 &&
      this.vaca[3].posicion === 3 &&
      this.vaca[4].posicion === 4 &&
      this.vaca[5].posicion === 5
    ) {
      var vaca = document.getElementById('vaca');
      vaca.style.opacity = '0.3';

      for (let i in this.vaca) {
        this.vaca[i].disabled = true;
      }
      Swal.fire({
        html: "<h1 style='color:#1db31d;'>¡FELICIDADES!</h1> Encontraste la secuencia "
      });
      this.cont3++;
    }
  }

  dropLluvia(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.lluvia, event.previousIndex, event.currentIndex);

    if (
      this.lluvia[0].posicion === 0 &&
      this.lluvia[1].posicion === 1 &&
      this.lluvia[2].posicion === 2 &&
      this.lluvia[3].posicion === 3 &&
      this.lluvia[4].posicion === 4 &&
      this.lluvia[5].posicion === 5
    ) {
      var lluvia = document.getElementById('lluvia');
      lluvia.style.opacity = '0.3';

      for (let i in this.lluvia) {
        this.lluvia[i].disabled = true;
      }
      Swal.fire({
        html: "<h1 style='color:#1db31d;'>¡FELICIDADES!</h1> Encontraste la secuencia "
      });
      this.cont3++;
    }
  }
}
