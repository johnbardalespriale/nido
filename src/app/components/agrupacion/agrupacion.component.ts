import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-agrupacion',
  templateUrl: './agrupacion.component.html',
  styleUrls: ['./agrupacion.component.sass']
})
export class AgrupacionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $(document).ready(() => {

      var presionado = false, presionadoDos=false, presionadoTres = false, presionadoCuatro=false, presionadoCinco = false,
      presionadoSeis=false,presionadoSiete=false, presionadoOcho=false, presionadoNueve=false,presionadoDiez=false;
      var soltado = false,soltadoDos=false, soltadoTres = false, soltadoCuatro=false, soltadoCinco=false, soltadoSeis=false,
      soltadoSiete=false,soltadoOcho=false, soltadoNueve=false, soltadoDiez= false;

      $(document).mousemove(function (e) {

        if (presionado == true && soltado == false) {

          $('#sigueme1').css("left", e.clientX - 220)
          .css("top", e.clientY - 160)
          .css("z-index", '1');

        } else if (soltado == true && presionado == false){
          
          if ((e.clientX >= 1053 && e.clientX <= 1228) && (e.clientY >= 194 && e.clientY <= 276)) {
              $("#img1").fadeOut();
              $("#sigueme1").css("background-color", 'transparent')
              .css("left", e.clientX - 220)
              .css("top", e.clientY - 160)
              .css("z-index", 0);
              soltado = false;
            
          }else{
              $('#sigueme1').css("left", 0)
              .css("top", 0)
              .css("z-index", 0);
              soltado = false;
          } 
          
        }

        if (presionadoDos == true && soltadoDos == false) {

          $('#sigueme2').css("left", e.clientX - 400)
          .css("top", e.clientY - 155)
          .css("z-index", '1');

        } else if (soltadoDos == true && presionadoDos == false){
          
          if ((e.clientX >= 0 && e.clientX <= 0) && (e.clientY >= 0 && e.clientY <= 0)) {
              $("#img2").fadeOut();
              $("#sigueme2").css("background-color", 'transparent')
              .css("left", e.clientX - 400)
              .css("top", e.clientY - 155)
              .css("z-index", 0);
              soltadoDos = false;
               
          }else{
              $('#sigueme2').css("left", 0)
              .css("top", 0)
              .css("z-index", 0);
              soltadoDos = false;
          } 
          
        } 

        if (presionadoTres == true && soltadoTres == false) { 

          $('#sigueme3').css("left", e.clientX - 526)
              .css("top", e.clientY - 146)
              .css("z-index", '1'); 

        } else if (soltadoTres == true && presionadoTres == false){

          if ((e.clientX >= 1053 && e.clientX <= 1228) && (e.clientY >= 194 && e.clientY <= 276)) {

              $("#img3").fadeOut();
              $("#sigueme3").css("background-color", 'transparent')
              .css("left", e.clientX - 526)
              .css("top", e.clientY - 146)
              .css("z-index", 0);
              soltadoTres = false;
            
          }else{

              $('#sigueme3').css("left", 0)
              .css("top", 0)
              .css("z-index", 0);
              soltadoTres = false;
          } 
          
        }
        
        if (presionadoCuatro == true && soltadoCuatro == false) {

          $('#sigueme4').css("left", e.clientX - 668)
          .css("top", e.clientY - 139)
          .css("z-index", '1');

        } else if (soltadoCuatro == true && presionadoCuatro == false){
          
          if ((e.clientX >= 1053 && e.clientX <= 1228) && (e.clientY >= 194 && e.clientY <= 276)) {
              $("#img4").fadeOut();
              $("#sigueme4").css("background-color", 'transparent')
              .css("left", e.clientX - 668)
              .css("top", e.clientY - 139)
              .css("z-index", 0);
              soltadoCuatro = false;
               
            
          }else{
              $('#sigueme4').css("left", 0)
              .css("top", 0)
              .css("z-index", 0);
              soltadoCuatro = false;
          } 
          
        }

        if (presionadoCinco == true && soltadoCinco == false) {

          $('#sigueme5').css("left", e.clientX - 814)
          .css("top", e.clientY - 136)
          .css("z-index", '1');

        } else if (soltadoCinco == true && presionadoCinco == false){
          
          if ((e.clientX >= 1053 && e.clientX <= 1228) && (e.clientY >= 194 && e.clientY <= 276)) {
              $("#img5").fadeOut();
              $("#sigueme5").css("background-color", 'transparent')
              .css("left", e.clientX - 814)
              .css("top", e.clientY - 136)
              .css("z-index", 0);
              soltadoCinco = false;
               
            
          }else{
              $('#sigueme5').css("left", 0)
              .css("top", 0)
              .css("z-index", 0);
              soltadoCinco = false;
          } 
          
        }

        if (presionadoSeis == true && soltadoSeis == false) {

          $('#sigueme6').css("left", e.clientX - 207)
          .css("top", e.clientY - 253)
          .css("z-index", '1');

        } else if (soltadoSeis == true && presionadoSeis == false){
          
          if ((e.clientX >= 0 && e.clientX <= 0) && (e.clientY >= 0 && e.clientY <= 0)) {
              $("#img6").fadeOut();
              $("#sigueme6").css("background-color", 'transparent')
              .css("left", e.clientX - 207)
              .css("top", e.clientY - 253)
              .css("z-index", 0);
              soltadoSeis = false;
               
            
          }else{
              $('#sigueme6').css("left", 0)
              .css("top", 0)
              .css("z-index", 0);
              soltadoSeis = false;
          } 
          
        }

        if (presionadoSiete == true && soltadoSeis == false) {

          $('#sigueme7').css("left", e.clientX - 359)
          .css("top", e.clientY - 251)
          .css("z-index", '1');

        } else if (soltadoSiete == true && presionadoSiete == false){
          
          if ((e.clientX >= 0 && e.clientX <= 0) && (e.clientY >= 0 && e.clientY <= 0)) {
              $("#img7").fadeOut();
              $("#sigueme7").css("background-color", 'transparent')
              .css("left", e.clientX - 359)
              .css("top", e.clientY - 251)
              .css("z-index", 0);
              soltadoSiete = false;
               
          }else{
              $('#sigueme7').css("left", 0)
              .css("top", 0)
              .css("z-index", 0);
              soltadoSiete = false;
          } 
          
        }

        if (presionadoOcho == true && soltadoOcho == false) {

          $('#sigueme8').css("left", e.clientX - 513)
          .css("top", e.clientY - 256)
          .css("z-index", '1');

        } else if (soltadoOcho == true && presionadoOcho == false){
          
          if ((e.clientX >= 0 && e.clientX <= 0) && (e.clientY >= 0 && e.clientY <= 0)) {
              $("#img8").fadeOut();
              $("#sigueme8").css("background-color", 'transparent')
              .css("left", e.clientX - 513)
              .css("top", e.clientY - 256)
              .css("z-index", 0);
              soltadoOcho = false;
               
            
          }else{
              $('#sigueme8').css("left", 0)
              .css("top", 0)
              .css("z-index", 0);
              soltadoOcho = false;
          } 
          
        }

        if (presionadoNueve == true && soltadoNueve == false) {

          $('#sigueme9').css("left", e.clientX - 664)
          .css("top", e.clientY - 252)
          .css("z-index", '1');

        } else if (soltadoNueve == true && presionadoNueve == false){
          
          if ((e.clientX >= 1053 && e.clientX <= 1228) && (e.clientY >= 194 && e.clientY <= 276)) {
              $("#img9").fadeOut();
              $("#sigueme9").css("background-color", 'transparent')
              .css("left", e.clientX - 664)
              .css("top", e.clientY - 252)
              .css("z-index", 0);
              soltadoNueve = false;
               
            
          }else{
              $('#sigueme9').css("left", 0)
              .css("top", 0)
              .css("z-index", 0);
              soltadoNueve = false;
          } 
          
        }

        if (presionadoDiez == true && soltadoDiez == false) {

          $('#sigueme10').css("left", e.clientX - 817)
          .css("top", e.clientY - 254)
          .css("z-index", '1');

        } else if (soltadoDiez == true && presionadoDiez == false){
          
          if ((e.clientX >= 0 && e.clientX <= 0) && (e.clientY >= 0 && e.clientY <= 0)) {
              $("#img10").fadeOut();
              $("#sigueme10").css("background-color", 'transparent')
              .css("left", e.clientX - 817)
              .css("top", e.clientY - 254)
              .css("z-index", 0);
              soltadoDiez = false;
               
            
          }else{
              $('#sigueme10').css("left", 0)
              .css("top", 0)
              .css("z-index", 0);
              soltadoDiez = false;
          } 
          
        }

      });

      $('#sigueme1').mousedown(function () {
        
        presionado = true;
        soltado = false;
        
      });

      $('#sigueme1').mouseup(function () {

        presionado = false;
        soltado = true;
        
      });

      $('#sigueme2').mousedown(function () {
        
        presionadoDos = true;
        soltadoDos = false;
        
      });

      $('#sigueme2').mouseup(function () {

        presionadoDos = false;
        soltadoDos = true;
        
      });

      $('#sigueme3').mousedown(function () {
        
        presionadoTres = true;
        soltadoTres = false;
        
      });

      $('#sigueme3').mouseup(function () {

        presionadoTres = false;
        soltadoTres = true;
        
      });

      $('#sigueme4').mousedown(function () {
        
        presionadoCuatro = true;
        soltadoCuatro = false;
        
      });

      $('#sigueme4').mouseup(function () {

        presionadoCuatro = false;
        soltadoCuatro = true;
        
      });

      $('#sigueme5').mousedown(function () {
        
        presionadoCinco = true;
        soltadoCinco = false;
        
      });

      $('#sigueme5').mouseup(function () {

        presionadoCinco = false;
        soltadoCinco = true;
        
      });

      $('#sigueme6').mousedown(function () {
        
        presionadoSeis = true;
        soltadoSeis = false;
        
      });

      $('#sigueme6').mouseup(function () {

        presionadoSeis = false;
        soltadoSeis = true;
        
      });

      $('#sigueme7').mousedown(function () {
        
        presionadoSiete = true;
        soltadoSiete = false;
        
      });

      $('#sigueme7').mouseup(function () {

        presionadoSiete = false;
        soltadoSiete = true;
        
      });

      $('#sigueme8').mousedown(function () {
        
        presionadoOcho = true;
        soltadoOcho = false;
        
      });

      $('#sigueme8').mouseup(function () {

        presionadoOcho = false;
        soltadoOcho = true;
        
      });

      $('#sigueme9').mousedown(function () {
        
        presionadoNueve = true;
        soltadoNueve = false;
        
      });

      $('#sigueme9').mouseup(function () {

        presionadoNueve = false;
        soltadoNueve = true;
        
      });

      $('#sigueme10').mousedown(function () {
        
        presionadoDiez = true;
        soltadoDiez = false;
        
      });

      $('#sigueme10').mouseup(function () {

        presionadoDiez = false;
        soltadoDiez = true;
        
      });


      /*$('#sigueme3').mousedown(function () {
        $(this).css('background','blue')
             .css('color', 'white');
        soltado = false;
        if (soltado == false && validar3 == 1) {
          console.log("entro");
          $(document).mousemove(function (e) {

            $('#sigueme3').css("left", e.clientX - 526)
              .css("top", e.clientY - 146)
              .css("z-index", '1');
              if (e.clientX >= 1000 && e.clientY >= 130 && validar3 == 1) {
                validar3 = 0;
                $("#img3").fadeOut();
                $("#sigueme3").css("background-color", 'white');
              }
          });
        }

        console.log(soltado);
      });

      $('#sigueme3').mouseup(function () {
        if (validar3 == 1 || validar3 == 0) {
        $(document).mousemove(function (e) {

          $('#sigueme3').css("left", 0)
            .css("top", 0)
            .css("z-index", '0');
        });
        soltado = true;
        }
        console.log(soltado);
      });*/

      /*$('#sigueme4').mousedown(function () {
        /*$(this).css('background','blue')
             .css('color', 'white');
        soltado = false;

        if (soltado == false && validar4 == 1) {
          console.log("entro");
          $(document).mousemove(function (e) {

            $('#sigueme4').css("left", e.clientX - 668)
              .css("top", e.clientY - 139)
              .css("z-index", '1');
              if (e.clientX >= 1000 && e.clientY >= 130 && validar4 == 1) {
                validar4 = 0;
                $("#img4").fadeOut();
                $("#sigueme4").css("background-color", 'white');
              }
          });
        }

        console.log(soltado);
      });

      $('#sigueme4').mouseup(function () {
        if (validar4 == 1 ||  validar4 == 0) {
         
        $(document).mousemove(function (e) {

          $('#sigueme4').css("left", 0)
            .css("top", 0)
            .css("z-index", '0');
        });
        soltado = true;
        }
        console.log(soltado);
      });

      $('#sigueme5').mousedown(function () {
        /*$(this).css('background','blue')
             .css('color', 'white');
        soltado = false;

        if (soltado == false && validar5 == 1) {
          console.log("entro");
          $(document).mousemove(function (e) {

            $('#sigueme5').css("left", e.clientX - 814)
              .css("top", e.clientY - 136)
              .css("z-index", '1');
              if (e.clientX >= 1000 && e.clientY >= 130 && validar5 == 1) {
                validar5 = 0;
                $("#img5").fadeOut();
                $("#sigueme5").css("background-color", 'white');
              }
          });
        }

        console.log(soltado);
      });

      $('#sigueme5').mouseup(function () {
        if (validar5 == 1 || validar5 == 0) {
        $(document).mousemove(function (e) {

          $('#sigueme5').css("left", 0)
            .css("top", 0)
            .css("z-index", '0');
        });
        soltado = true;
        }
        console.log(soltado);
      });

      $('#sigueme6').mousedown(function () {
        /*$(this).css('background','blue')
             .css('color', 'white');
        soltado = false;

        if (soltado == false) {
          console.log("entro");
          $(document).mousemove(function (e) {

            $('#sigueme6').css("left", e.clientX - 207)
              .css("top", e.clientY - 253)
              .css("z-index", '1');
          });
        }

        console.log(soltado);
      });

      $('#sigueme6').mouseup(function () {
        /* $('#sigueme1').css("left", 220)
                           .css("top", 160);
        $(document).mousemove(function (e) {

          $('#sigueme6').css("left", 0)
            .css("top", 0)
            .css("z-index", '0');
        });
        soltado = true;

        console.log(soltado);
      });

      $('#sigueme7').mousedown(function () {
        /*$(this).css('background','blue')
             .css('color', 'white');
        soltado = false;

        if (soltado == false) {
          console.log("entro");
          $(document).mousemove(function (e) {

            $('#sigueme7').css("left", e.clientX - 359)
              .css("top", e.clientY - 251)
              .css("z-index", '1');
          });
        }

        console.log(soltado);
      });

      $('#sigueme7').mouseup(function () {
        /* $('#sigueme1').css("left", 220)
                           .css("top", 160);
        $(document).mousemove(function (e) {

          $('#sigueme7').css("left", 0)
            .css("top", 0)
            .css("z-index", '0');
        });
        soltado = true;

        console.log(soltado);
      });

      $('#sigueme8').mousedown(function () {
        /*$(this).css('background','blue')
             .css('color', 'white');
        soltado = false;

        if (soltado == false) {
          console.log("entro");
          $(document).mousemove(function (e) {

            $('#sigueme8').css("left", e.clientX - 513)
              .css("top", e.clientY - 256)
              .css("z-index", '1');
          });
        }

        console.log(soltado);
      });

      $('#sigueme8').mouseup(function () {
        /* $('#sigueme1').css("left", 220)
                           .css("top", 160);
        $(document).mousemove(function (e) {

          $('#sigueme8').css("left", 0)
            .css("top", 0)
            .css("z-index", '0');
        });
        soltado = true;

        console.log(soltado);
      });

      $('#sigueme9').mousedown(function () {
        /*$(this).css('background','blue')
             .css('color', 'white');
        soltado = false;

        if (soltado == false) {
          console.log("entro");
          $(document).mousemove(function (e) {

            $('#sigueme9').css("left", e.clientX - 664)
              .css("top", e.clientY - 252)
              .css("z-index", '1');
          });
        }

        console.log(soltado);
      });

      $('#sigueme9').mouseup(function () {
        /* $('#sigueme1').css("left", 220)
                           .css("top", 160);
        $(document).mousemove(function (e) {

          $('#sigueme9').css("left", 0)
            .css("top", 0)
            .css("z-index", '0');
        });
        soltado = true;

        console.log(soltado);
      });

      $('#sigueme10').mousedown(function () {
        /*$(this).css('background','blue')
             .css('color', 'white');
        soltado = false;

        if (soltado == false) {
          console.log("entro");
          $(document).mousemove(function (e) {

            $('#sigueme10').css("left", e.clientX - 817)
              .css("top", e.clientY - 254)
              .css("z-index", '1');
          });
        }

        console.log(soltado);
      });

      $('#sigueme10').mouseup(function () {
        /* $('#sigueme1').css("left", 220)
                           .css("top", 160);
        $(document).mousemove(function (e) {

          $('#sigueme10').css("left", 0)
            .css("top", 0)
            .css("z-index", '0');
        });
        soltado = true;

        console.log(soltado);
      });*/

    });


  }

}
