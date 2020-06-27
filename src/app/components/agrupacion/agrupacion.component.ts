import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-agrupacion',
  templateUrl: './agrupacion.component.html',
  styleUrls: ['./agrupacion.component.sass']
})
export class AgrupacionComponent implements OnInit {

  constructor() { 
  }

  ngOnInit(): void {
    var screenWidth, screenHeight;  
    const screenOriginal =1515;
    function getBom(){
      screenWidth=window.innerWidth;
      screenHeight = window.screen.height;
      
    }

    getBom();

    

    $(document).ready(() => {

      var presionado = false, presionadoDos=false, presionadoTres = false, presionadoCuatro=false, presionadoCinco = false,
      presionadoSeis=false,presionadoSiete=false, presionadoOcho=false, presionadoNueve=false,presionadoDiez=false,
      presionadoOnce=false,presionadoDoce=false,presionadoTrece=false,presionadoCatorce=false,presionadoQuince=false,
      presionadoDieciseis = false,presionadoDiecisiete=false,presionadoDieciocho=false,presionadoDiecinueve=false,
      presionadoVeinte=false,presionadoVeinteuno=false,presionadoVeintetres=false,presionadoVeintecuatro=false,
      presionadoVeintecinco=false,presionadoVeinteseis=false,presionadoVeintesiete=false,presionadoVeinteocho=false,
      presionadoVeintenueve=false,presionadoTreinta=false;
      
      var soltado = false,soltadoDos=false, soltadoTres = false, soltadoCuatro=false, soltadoCinco=false, soltadoSeis=false,
      soltadoSiete=false,soltadoOcho=false, soltadoNueve=false, soltadoDiez= false, soltadoOnce=false,soltadoDoce=false,
      soltadoTrece=false,soltadoCatorce=false,soltadoQuince=false,soltadoDieciseis = false,soltadoDiecisiete=false,
      soltadoDieciocho = false,soltadoDiecinueve=false,soltadoVeinte = false,soltadoVeinteuno=false,soltadoVeintedos=false,
      presionadoVeintedos=false,soltadoVeintetres=false,soltadoVeintecuatro=false,soltadoVeintecinco=false,soltadoVeinteseis=false,
      soltadoVeintesiete=false,soltadoVeinteocho=false,soltadoVeintenueve=false,soltadoTreinta=false;

      $(document).mousemove(function (e) {

        //console.log(e.clientX,e.clientY);
        
        if (presionado == true && soltado == false) {
             getBom();
             console.log(screenWidth,screenHeight, screenOriginal);
        
            $('#sigueme1').css("left", e.clientX - (220*screenWidth)/screenOriginal)
            .css("top", e.clientY - 160)
            .css("z-index", '1');
            console.log(e.clientX,e.clientY);
        } else if (soltado == true && presionado == false){
          console.log(e.clientX,e.clientY);
          if ((e.clientX >= (1100*screenWidth)/screenOriginal && e.clientX <= (1300*screenWidth)/screenOriginal) && (e.clientY >= 175 && e.clientY <= 328)) {

              $("#img1").fadeOut();
              $("#sigueme1").css("background-color", 'transparent')
              .css("left", e.clientX - (220*screenWidth)/screenOriginal)
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
          getBom();
          $('#sigueme2').css("left", e.clientX - (377*screenWidth)/screenOriginal)
          .css("top", e.clientY - 160)
          .css("z-index", '1');

        } else if (soltadoDos == true && presionadoDos == false){
          
          if ((e.clientX >= 0 && e.clientX <= 0) && (e.clientY >= 0 && e.clientY <= 0)) {
              $("#img2").fadeOut();
              $("#sigueme2").css("background-color", 'transparent')
              .css("left", e.clientX - (377*screenWidth)/screenOriginal)
              .css("top", e.clientY - 160)
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
          getBom();
          $('#sigueme3').css("left", e.clientX - (528*screenWidth)/screenOriginal)
              .css("top", e.clientY - 148)
              .css("z-index", '1'); 

        } else if (soltadoTres == true && presionadoTres == false){

          if ((e.clientX >= (1100*screenWidth)/screenOriginal && e.clientX <= (1300*screenWidth)/screenOriginal) && (e.clientY >= 175 && e.clientY <= 328)) {

              $("#img3").fadeOut();
              $("#sigueme3").css("background-color", 'transparent')
              .css("left", e.clientX - (528*screenWidth)/screenOriginal)
              .css("top", e.clientY - 148)
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
          getBom();
          $('#sigueme4').css("left", e.clientX - (682*screenWidth)/screenOriginal)
          .css("top", e.clientY - 148)
          .css("z-index", '1');

        } else if (soltadoCuatro == true && presionadoCuatro == false){
          
          if ((e.clientX >= (1100*screenWidth)/screenOriginal && e.clientX <= (1300*screenWidth)/screenOriginal) && (e.clientY >= 175 && e.clientY <= 328)) {
              $("#img4").fadeOut();
              $("#sigueme4").css("background-color", 'transparent')
              .css("left", e.clientX - (682*screenWidth)/screenOriginal)
              .css("top", e.clientY - 148)
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
          getBom();
          $('#sigueme5').css("left", e.clientX - (831*screenWidth)/screenOriginal)
          .css("top", e.clientY - 147)
          .css("z-index", '1');

        } else if (soltadoCinco == true && presionadoCinco == false){
          
          if ((e.clientX >= (1100*screenWidth)/screenOriginal && e.clientX <= (1300*screenWidth)/screenOriginal) && (e.clientY >= 175 && e.clientY <= 328)) {
              $("#img5").fadeOut();
              $("#sigueme5").css("background-color", 'transparent')
              .css("left", e.clientX - (831*screenWidth)/screenOriginal)
              .css("top", e.clientY - 147)
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
          getBom();
          $('#sigueme6').css("left", e.clientX - (226*screenWidth)/screenOriginal)
          .css("top", e.clientY - 262)
          .css("z-index", '1');

        } else if (soltadoSeis == true && presionadoSeis == false){
          
          if ((e.clientX >= 0 && e.clientX <= 0) && (e.clientY >= 0 && e.clientY <= 0)) {
              $("#img6").fadeOut();
              $("#sigueme6").css("background-color", 'transparent')
              .css("left", e.clientX - (226*screenWidth)/screenOriginal)
              .css("top", e.clientY - 262)
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
          getBom();
          $('#sigueme7').css("left", e.clientX - (373*screenWidth)/screenOriginal)
          .css("top", e.clientY - 262)
          .css("z-index", '1');

        } else if (soltadoSiete == true && presionadoSiete == false){
          
          if ((e.clientX >= (1052*screenWidth)/screenOriginal && e.clientX <= (1230*screenWidth)/screenOriginal) && (e.clientY >= 392 && e.clientY <= 527)) {
              $("#img7").fadeOut();
              $("#sigueme7").css("background-color", 'transparent')
              .css("left", e.clientX - (373*screenWidth)/screenOriginal)
              .css("top", e.clientY - 262)
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
          getBom();
          $('#sigueme8').css("left", e.clientX - (531*screenWidth)/screenOriginal)
          .css("top", e.clientY - 262)
          .css("z-index", '1');

        } else if (soltadoOcho == true && presionadoOcho == false){
          
          if ((e.clientX >= 0 && e.clientX <= 0) && (e.clientY >= 0 && e.clientY <= 0)) {
              $("#img8").fadeOut();
              $("#sigueme8").css("background-color", 'transparent')
              .css("left", e.clientX - (531*screenWidth)/screenOriginal)
              .css("top", e.clientY - 262)
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
          getBom();
          $('#sigueme9').css("left", e.clientX - (677*screenWidth)/screenOriginal)
          .css("top", e.clientY - 262)
          .css("z-index", '1');

        } else if (soltadoNueve == true && presionadoNueve == false){
          
          if ((e.clientX >= (1100*screenWidth)/screenOriginal && e.clientX <= (1300*screenWidth)/screenOriginal) && (e.clientY >= 175 && e.clientY <= 328)) {
              $("#img9").fadeOut();
              $("#sigueme9").css("background-color", 'transparent')
              .css("left", e.clientX - (677*screenWidth)/screenOriginal)
              .css("top", e.clientY - 262)
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
          getBom();
          $('#sigueme10').css("left", e.clientX - (832*screenWidth)/screenOriginal)
          .css("top", e.clientY - 260)
          .css("z-index", '1');

        } else if (soltadoDiez == true && presionadoDiez == false){
          
          if ((e.clientX >= 0 && e.clientX <= 0) && (e.clientY >= 0 && e.clientY <= 0)) {
              $("#img10").fadeOut();
              $("#sigueme10").css("background-color", 'transparent')
              .css("left", e.clientX - (832*screenWidth)/screenOriginal)
              .css("top", e.clientY - 260)
              .css("z-index", 0);
              soltadoDiez = false;
               
            
          }else{
              $('#sigueme10').css("left", 0)
              .css("top", 0)
              .css("z-index", 0);
              soltadoDiez = false;
          } 
          
        }

        if (presionadoOnce == true && soltadoOnce == false) {
          getBom();
          $('#sigueme11').css("left", e.clientX - (222*screenWidth)/screenOriginal)
          .css("top", e.clientY - 380)
          .css("z-index", '1');

          console.log(e.clientX, e.clientY);

        } else if (soltadoOnce == true && presionadoOnce == false){
          
          if ((e.clientX >= (1052*screenWidth)/screenOriginal && e.clientX <= (1230*screenWidth)/screenOriginal) && (e.clientY >= 392 && e.clientY <= 527)) {
              $("#img11").fadeOut();
              $("#sigueme11").css("background-color", 'transparent')
              .css("left", e.clientX - (222*screenWidth)/screenOriginal)
              .css("top", e.clientY - 380)
              .css("z-index", 0);
              soltadoOnce = false;
            
          }else{
              $('#sigueme11').css("left", 0)
              .css("top", 0)
              .css("z-index", 0);
              soltadoOnce = false;
          } 
          
        }

        if (presionadoDoce == true && soltadoDoce == false) {
          getBom();
          $('#sigueme12').css("left", e.clientX - (376*screenWidth)/screenOriginal)
          .css("top", e.clientY - 380)
          .css("z-index", '1');

        } else if (soltadoDoce == true && presionadoDoce == false){
          
          if ((e.clientX >= (1100*screenWidth)/screenOriginal && e.clientX <= (1300*screenWidth)/screenOriginal) && (e.clientY >= 175 && e.clientY <= 328)) {
              $("#img12").fadeOut();
              $("#sigueme12").css("background-color", 'transparent')
              .css("left", e.clientX - (376*screenWidth)/screenOriginal)
              .css("top", e.clientY - 380)
              .css("z-index", 0);
              soltadoDoce = false;
            
          }else{
              $('#sigueme12').css("left", 0)
              .css("top", 0)
              .css("z-index", 0);
              soltadoDoce = false;
          } 
          
        }

        if (presionadoTrece == true && soltadoTrece == false) {
          getBom();
          $('#sigueme13').css("left", e.clientX - (531*screenWidth)/screenOriginal)
          .css("top", e.clientY - 380)
          .css("z-index", '1');

        } else if (soltadoTrece == true && presionadoTrece == false){
          
          if ((e.clientX >= 0 && e.clientX <= 0) && (e.clientY >= 0 && e.clientY <= 0)) {
              $("#img13").fadeOut();
              $("#sigueme13").css("background-color", 'transparent')
              .css("left", e.clientX - (531*screenWidth)/screenOriginal)
              .css("top", e.clientY - 380)
              .css("z-index", 0);
              soltadoTrece = false;
            
          }else{
              $('#sigueme13').css("left", 0)
              .css("top", 0)
              .css("z-index", 0);
              soltadoTrece = false;
          } 
          
        }

        if (presionadoCatorce == true && soltadoCatorce == false) {
          getBom();
          $('#sigueme14').css("left", e.clientX - (686*screenWidth)/screenOriginal)
          .css("top", e.clientY - 380)
          .css("z-index", '1');

        } else if (soltadoCatorce == true && presionadoCatorce == false){
          
          if ((e.clientX >= (1052*screenWidth)/screenOriginal && e.clientX <= (1230*screenWidth)/screenOriginal) && (e.clientY >= 392 && e.clientY <= 527)) {
              $("#img14").fadeOut();
              $("#sigueme14").css("background-color", 'transparent')
              .css("left", e.clientX - (686*screenWidth)/screenOriginal)
              .css("top", e.clientY - 380)
              .css("z-index", 0);
              soltadoCatorce = false;
            
          }else{
              $('#sigueme14').css("left", 0)
              .css("top", 0)
              .css("z-index", 0);
              soltadoCatorce = false;
          } 
          
        }

        if (presionadoQuince == true && soltadoQuince == false) {
          getBom();
          $('#sigueme15').css("left", e.clientX - (831*screenWidth)/screenOriginal)
          .css("top", e.clientY - 380)
          .css("z-index", '1');

        } else if (soltadoQuince == true && presionadoQuince == false){
          
          if ((e.clientX >= 0 && e.clientX <= 0) && (e.clientY >= 0 && e.clientY <= 0)) {
              $("#img15").fadeOut();
              $("#sigueme15").css("background-color", 'transparent')
              .css("left", e.clientX - (831*screenWidth)/screenOriginal)
              .css("top", e.clientY - 380)
              .css("z-index", 0);
              soltadoQuince = false;
            
          }else{
              $('#sigueme15').css("left", 0)
              .css("top", 0)
              .css("z-index", 0);
              soltadoQuince = false;
          } 
          
        }

        if (presionadoDieciseis == true && soltadoDieciseis == false) {
          getBom();
          $('#sigueme16').css("left", e.clientX - (225*screenWidth)/screenOriginal)
          .css("top", e.clientY - 501)
          .css("z-index", '1');

        } else if (soltadoDieciseis == true && presionadoDieciseis == false){
          
          if ((e.clientX >= (1100*screenWidth)/screenOriginal && e.clientX <= (1300*screenWidth)/screenOriginal) && (e.clientY >= 175 && e.clientY <= 328)) {
              $("#img16").fadeOut();
              $("#sigueme16").css("background-color", 'transparent')
              .css("left", e.clientX - (225*screenWidth)/screenOriginal)
              .css("top", e.clientY - 501)
              .css("z-index", 0);
              soltadoDieciseis = false;
            
          }else{
              $('#sigueme16').css("left", 0)
              .css("top", 0)
              .css("z-index", 0);
              soltadoDieciseis = false;
          } 
          
        }

        if (presionadoDiecisiete == true && soltadoDiecisiete == false) {
          getBom();
          $('#sigueme17').css("left", e.clientX - (378*screenWidth)/screenOriginal)
          .css("top", e.clientY - 501)
          .css("z-index", '1');

        } else if (soltadoDiecisiete == true && presionadoDiecisiete == false){
          
          if ((e.clientX >= (1052*screenWidth)/screenOriginal && e.clientX <= (1230*screenWidth)/screenOriginal) && (e.clientY >= 392 && e.clientY <= 527)) {
              $("#img17").fadeOut();
              $("#sigueme17").css("background-color", 'transparent')
              .css("left", e.clientX - (378*screenWidth)/screenOriginal)
              .css("top", e.clientY - 501)
              .css("z-index", 0);
              soltadoDiecisiete = false;
            
          }else{
              $('#sigueme17').css("left", 0)
              .css("top", 0)
              .css("z-index", 0);
              soltadoDiecisiete = false;
          } 
          
        }

        if (presionadoDieciocho == true && soltadoDieciocho == false) {
          getBom();
          $('#sigueme18').css("left", e.clientX - (532*screenWidth)/screenOriginal)
          .css("top", e.clientY - 501)
          .css("z-index", '1');

        } else if (soltadoDieciocho == true && presionadoDieciocho == false){
          
          if ((e.clientX >= 0 && e.clientX <= 0) && (e.clientY >= 0 && e.clientY <= 0)) {
              $("#img18").fadeOut();
              $("#sigueme18").css("background-color", 'transparent')
              .css("left", e.clientX - (532*screenWidth)/screenOriginal)
              .css("top", e.clientY - 501)
              .css("z-index", 0);
              soltadoDieciocho = false;
            
          }else{
              $('#sigueme18').css("left", 0)
              .css("top", 0)
              .css("z-index", 0);
              soltadoDieciocho = false;
          } 
          
        }

        if (presionadoDiecinueve == true && soltadoDiecinueve == false) {
          getBom();
          $('#sigueme19').css("left", e.clientX - (684*screenWidth)/screenOriginal)
          .css("top", e.clientY - 501)
          .css("z-index", '1');

          console.log(e.clientX,e.clientY);

        } else if (soltadoDiecinueve == true && presionadoDiecinueve == false){
          
          if ((e.clientX >= (1100*screenWidth)/screenOriginal && e.clientX <= (1300*screenWidth)/screenOriginal) && (e.clientY >= 175 && e.clientY <= 328)) {
              $("#img19").fadeOut();
              $("#sigueme19").css("background-color", 'transparent')
              .css("left", e.clientX - (684*screenWidth)/screenOriginal)
              .css("top", e.clientY - 501)
              .css("z-index", 0);
              soltadoDiecinueve = false;
            
          }else{
              $('#sigueme19').css("left", 0)
              .css("top", 0)
              .css("z-index", 0);
              soltadoDiecinueve = false;
          } 
          
        }

        if (presionadoVeinte == true && soltadoVeinte == false) {
          getBom();
          $('#sigueme20').css("left", e.clientX - (834*screenWidth)/screenOriginal)
          .css("top", e.clientY - 501)
          .css("z-index", '1');

        } else if (soltadoVeinte == true && presionadoVeinte == false){
          
          if ((e.clientX >= (1052*screenWidth)/screenOriginal && e.clientX <= (1230*screenWidth)/screenOriginal) && (e.clientY >= 392 && e.clientY <= 527)) {
              $("#img20").fadeOut();
              $("#sigueme20").css("background-color", 'transparent')
              .css("left", e.clientX - (834*screenWidth)/screenOriginal)
              .css("top", e.clientY - 501)
              .css("z-index", 0);
              soltadoVeinte = false;
            
          }else{
              $('#sigueme20').css("left", 0)
              .css("top", 0)
              .css("z-index", 0);
              soltadoVeinte = false;
          } 
          
        }

        if (presionadoVeinteuno == true && soltadoVeinteuno == false) {
          getBom();
          $('#sigueme21').css("left", e.clientX - (226*screenWidth)/screenOriginal)
          .css("top", e.clientY - 615)
          .css("z-index", '1');
          console.log(e.clientX,e.clientY);

        } else if (soltadoVeinteuno == true && presionadoVeinteuno == false){
          
          if ((e.clientX >= 0 && e.clientX <= 0) && (e.clientY >= 0 && e.clientY <= 0)) {
              $("#img21").fadeOut();
              $("#sigueme21").css("background-color", 'transparent')
              .css("left", e.clientX - (226*screenWidth)/screenOriginal)
              .css("top", e.clientY - 615)
              .css("z-index", 0);
              soltadoVeinteuno = false;
            
          }else{
              $('#sigueme21').css("left", 0)
              .css("top", 0)
              .css("z-index", 0);
              soltadoVeinteuno = false;
          } 
          
        }

        if (presionadoVeintedos == true && soltadoVeintedos == false) {
          getBom();
          $('#sigueme22').css("left", e.clientX - (378*screenWidth)/screenOriginal)
          .css("top", e.clientY - 615)
          .css("z-index", '1');
          console.log(e.clientX,e.clientY);

        } else if (soltadoVeintedos == true && presionadoVeintedos == false){
          
          if ((e.clientX >= (1100*screenWidth)/screenOriginal && e.clientX <= (1300*screenWidth)/screenOriginal) && (e.clientY >= 175 && e.clientY <= 328)) {
              $("#img22").fadeOut();
              $("#sigueme22").css("background-color", 'transparent')
              .css("left", e.clientX - (378*screenWidth)/screenOriginal)
              .css("top", e.clientY - 615)
              .css("z-index", 0);
              soltadoVeintedos = false;
            
          }else{
              $('#sigueme22').css("left", 0)
              .css("top", 0)
              .css("z-index", 0);
              soltadoVeintedos = false;
          } 
          
        }

        if (presionadoVeintetres == true && soltadoVeintetres == false) {
          getBom();
          $('#sigueme23').css("left", e.clientX - (531*screenWidth)/screenOriginal)
          .css("top", e.clientY - 615)
          .css("z-index", '1');
          console.log(e.clientX,e.clientY);

        } else if (soltadoVeintetres == true && presionadoVeintetres == false){
          
          if ((e.clientX >= (1022*screenWidth)/screenOriginal && e.clientX <= (1258*screenWidth)/screenOriginal) && (e.clientY >= 605 && e.clientY <= 781)) {
              $("#img23").fadeOut();
              $("#sigueme23").css("background-color", 'transparent')
              .css("left", e.clientX - (100*screenWidth)/screenOriginal)
              .css("top", e.clientY - 615)
              .css("z-index", 0);
              soltadoVeintetres = false;
            
          }else{
              $('#sigueme23').css("left", 0)
              .css("top", 0)
              .css("z-index", 0);
              soltadoVeintetres = false;
          } 
          
        }

        if (presionadoVeintecuatro == true && soltadoVeintecuatro == false) {
          getBom();
          $('#sigueme24').css("left", e.clientX - (686*screenWidth)/screenOriginal)
          .css("top", e.clientY - 615)
          .css("z-index", '1');
          console.log(e.clientX,e.clientY);

        } else if (soltadoVeintecuatro == true && presionadoVeintecuatro == false){
          
          if ((e.clientX >= (1052*screenWidth)/screenOriginal && e.clientX <= (1230*screenWidth)/screenOriginal) && (e.clientY >= 392 && e.clientY <= 527)) {
              $("#img24").fadeOut();
              $("#sigueme24").css("background-color", 'transparent')
              .css("left", e.clientX - (686*screenWidth)/screenOriginal)
              .css("top", e.clientY - 615)
              .css("z-index", 0);
              soltadoVeintecuatro = false;
            
          }else{
              $('#sigueme24').css("left", 0)
              .css("top", 0)
              .css("z-index", 0);
              soltadoVeintecuatro = false;
          } 
          
        }

        if (presionadoVeintecinco == true && soltadoVeintecinco == false) {
          getBom();
          $('#sigueme25').css("left", e.clientX - (835*screenWidth)/screenOriginal)
          .css("top", e.clientY - 615)
          .css("z-index", '1');
          console.log(e.clientX,e.clientY);

        } else if (soltadoVeintecinco == true && presionadoVeintecinco == false){
          
          if ((e.clientX >= (1022*screenWidth)/screenOriginal && e.clientX <= (1258*screenWidth)/screenOriginal) && (e.clientY >= 605 && e.clientY <= 781)) {
              $("#img25").fadeOut();
              $("#sigueme25").css("background-color", 'transparent')
              .css("left", e.clientX - (835*screenWidth)/screenOriginal)
              .css("top", e.clientY - 615)
              .css("z-index", 0);
              soltadoVeintecinco = false;
            
          }else{
              $('#sigueme25').css("left", 0)
              .css("top", 0)
              .css("z-index", 0);
              soltadoVeintecinco = false;
          } 
          
        }

        if (presionadoVeinteseis == true && soltadoVeinteseis == false) {
          getBom();
          $('#sigueme26').css("left", e.clientX - (226*screenWidth)/screenOriginal)
          .css("top", e.clientY - 735)
          .css("z-index", '1');
          console.log(e.clientX,e.clientY);

        } else if (soltadoVeinteseis == true && presionadoVeinteseis == false){
          
          if ((e.clientX >= (1022*screenWidth)/screenOriginal && e.clientX <= (1258*screenWidth)/screenOriginal) && (e.clientY >= 605 && e.clientY <= 781)) {
              $("#img26").fadeOut();
              $("#sigueme26").css("background-color", 'transparent')
              .css("left", e.clientX - (226*screenWidth)/screenOriginal)
              .css("top", e.clientY - 735)
              .css("z-index", 0);
              soltadoVeinteseis = false;
            
          }else{
              $('#sigueme26').css("left", 0)
              .css("top", 0)
              .css("z-index", 0);
              soltadoVeinteseis = false;
          } 
          
        }

        if (presionadoVeintesiete == true && soltadoVeintesiete == false) {
          getBom();
          $('#sigueme27').css("left", e.clientX - (380*screenWidth)/screenOriginal)
          .css("top", e.clientY - 735)
          .css("z-index", '1');
          console.log(e.clientX,e.clientY);

        } else if (soltadoVeintesiete == true && presionadoVeintesiete == false){
          
          if ((e.clientX >= 0 && e.clientX <= 0) && (e.clientY >= 0 && e.clientY <= 0)) {
              $("#img27").fadeOut();
              $("#sigueme27").css("background-color", 'transparent')
              .css("left", e.clientX - (380*screenWidth)/screenOriginal)
              .css("top", e.clientY - 735)
              .css("z-index", 0);
              soltadoVeintesiete = false;
            
          }else{
              $('#sigueme27').css("left", 0)
              .css("top", 0)
              .css("z-index", 0);
              soltadoVeintesiete = false;
          } 
          
        }

        if (presionadoVeinteocho == true && soltadoVeinteocho == false) {
          getBom();
          $('#sigueme28').css("left", e.clientX - (531*screenWidth)/screenOriginal)
          .css("top", e.clientY - 735)
          .css("z-index", '1');
          console.log(e.clientX,e.clientY);

        } else if (soltadoVeinteocho == true && presionadoVeinteocho == false){
          
          if ((e.clientX >= 0 && e.clientX <= 0) && (e.clientY >= 0 && e.clientY <= 0)) {
              $("#img28").fadeOut();
              $("#sigueme28").css("background-color", 'transparent')
              .css("left", e.clientX - (531*screenWidth)/screenOriginal)
              .css("top", e.clientY - 735)
              .css("z-index", 0);
              soltadoVeinteocho = false;
            
          }else{
              $('#sigueme28').css("left", 0)
              .css("top", 0)
              .css("z-index", 0);
              soltadoVeinteocho  = false;
          } 
          
        }

        if (presionadoVeintenueve == true && soltadoVeintenueve == false) {
          getBom();
          $('#sigueme29').css("left", e.clientX - (679*screenWidth)/screenOriginal)
          .css("top", e.clientY - 735)
          .css("z-index", '1');
          console.log(e.clientX,e.clientY);

        } else if (soltadoVeintenueve == true && presionadoVeintenueve == false){
          
          if ((e.clientX >= 0 && e.clientX <= 0) && (e.clientY >= 0 && e.clientY <= 0)) {
              $("#img29").fadeOut();
              $("#sigueme29").css("background-color", 'transparent')
              .css("left", e.clientX - (679*screenWidth)/screenOriginal)
              .css("top", e.clientY - 735)
              .css("z-index", 0);
              soltadoVeintenueve = false;
            
          }else{
              $('#sigueme29').css("left", 0)
              .css("top", 0)
              .css("z-index", 0);
              soltadoVeintenueve  = false;
          } 
          
        }

        if (presionadoTreinta == true && soltadoTreinta == false) {
          getBom();
          $('#sigueme30').css("left", e.clientX - (828*screenWidth)/screenOriginal)
          .css("top", e.clientY - 735)
          .css("z-index", '1');
          console.log(e.clientX,e.clientY);

        } else if (soltadoTreinta == true && presionadoTreinta == false){
          
          if ((e.clientX >= (1022*screenWidth)/screenOriginal && e.clientX <= (1258*screenWidth)/screenOriginal) && (e.clientY >= 605 && e.clientY <= 781)) {
              $("#img30").fadeOut();
              $("#sigueme30").css("background-color", 'transparent')
              .css("left", e.clientX - (828*screenWidth)/screenOriginal)
              .css("top", e.clientY - 735)
              .css("z-index", 0);
              soltadoTreinta = false;
            
          }else{
              $('#sigueme30').css("left", 0)
              .css("top", 0)
              .css("z-index", 0);
              soltadoTreinta  = false;
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

      $('#sigueme11').mousedown(function () {
        
        presionadoOnce = true;
        soltadoOnce = false;
        
      });

      $('#sigueme11').mouseup(function () {

        presionadoOnce = false;
        soltadoOnce = true;
        
      });

      $('#sigueme12').mousedown(function () {
        
        presionadoDoce = true;
        soltadoDoce = false;
        
      });

      $('#sigueme12').mouseup(function () {

        presionadoDoce = false;
        soltadoDoce = true;
        
      });
      
      $('#sigueme13').mousedown(function () {
        
        presionadoTrece = true;
        soltadoTrece = false;
        
      });

      $('#sigueme13').mouseup(function () {

        presionadoTrece = false;
        soltadoTrece = true;
        
      });

      $('#sigueme14').mousedown(function () {
        
        presionadoCatorce = true;
        soltadoCatorce = false;
        
      });

      $('#sigueme14').mouseup(function () {

        presionadoCatorce = false;
        soltadoCatorce = true;
        
      });

      $('#sigueme15').mousedown(function () {
        
        presionadoQuince = true;
        soltadoQuince = false;
        
      });

      $('#sigueme15').mouseup(function () {

        presionadoQuince = false;
        soltadoQuince = true;
        
      });

      $('#sigueme16').mousedown(function () {
        
        presionadoDieciseis = true;
        soltadoDieciseis = false;
        
      });

      $('#sigueme16').mouseup(function () {

        presionadoDieciseis = false;
        soltadoDieciseis = true;
        
      });

      $('#sigueme17').mousedown(function () {
        
        presionadoDiecisiete = true;
        soltadoDiecisiete = false;
        
      });

      $('#sigueme17').mouseup(function () {

        presionadoDiecisiete = false;
        soltadoDiecisiete = true;
        
      });

      $('#sigueme18').mousedown(function () {
        
        presionadoDieciocho = true;
        soltadoDieciocho = false;
        
      });

      $('#sigueme18').mouseup(function () {

        presionadoDieciocho = false;
        soltadoDieciocho = true;
        
      });

      $('#sigueme19').mousedown(function () {
        
        presionadoDiecinueve = true;
        soltadoDiecinueve = false;
        
      });

      $('#sigueme19').mouseup(function () {

        presionadoDiecinueve = false;
        soltadoDiecinueve = true;
        
      });

      $('#sigueme20').mousedown(function () {
        
        presionadoVeinte = true;
        soltadoVeinte = false;
        
      });

      $('#sigueme20').mouseup(function () {

        presionadoVeinte = false;
        soltadoVeinte = true;
        
      });

      $('#sigueme21').mousedown(function () {
        
        presionadoVeinteuno = true;
        soltadoVeinteuno = false;
        
      });

      $('#sigueme21').mouseup(function () {

        presionadoVeinteuno = false;
        soltadoVeinteuno = true;
        
      });

      $('#sigueme22').mousedown(function () {
        
        presionadoVeintedos = true;
        soltadoVeintedos = false;
        
      });

      $('#sigueme22').mouseup(function () {

        presionadoVeintedos = false;
        soltadoVeintedos = true;
        
      });

      $('#sigueme23').mousedown(function () {
        
        presionadoVeintetres = true;
        soltadoVeintetres = false;
        
      });

      $('#sigueme23').mouseup(function () {

        presionadoVeintetres = false;
        soltadoVeintetres = true;
        
      });

      $('#sigueme24').mousedown(function () {
        
        presionadoVeintecuatro = true;
        soltadoVeintecuatro = false;
        
      });

      $('#sigueme24').mouseup(function () {

        presionadoVeintecuatro = false;
        soltadoVeintecuatro = true;
        
      });

      $('#sigueme25').mousedown(function () {
        
        presionadoVeintecinco = true;
        soltadoVeintecinco = false;
        
      });

      $('#sigueme25').mouseup(function () {

        presionadoVeintecinco = false;
        soltadoVeintecinco = true;
        
      });

      $('#sigueme26').mousedown(function () {
        
        presionadoVeinteseis = true;
        soltadoVeinteseis = false;
        
      });

      $('#sigueme26').mouseup(function () {

        presionadoVeinteseis = false;
        soltadoVeinteseis = true;
        
      });

      $('#sigueme27').mousedown(function () {
        
        presionadoVeintesiete = true;
        soltadoVeintesiete = false;
        
      });

      $('#sigueme27').mouseup(function () {

        presionadoVeintesiete = false;
        soltadoVeintesiete = true;
        
      });

      $('#sigueme28').mousedown(function () {
        
        presionadoVeinteocho = true;
        soltadoVeinteocho = false;
        
      });

      $('#sigueme28').mouseup(function () {

        presionadoVeinteocho = false;
        soltadoVeinteocho = true;
        
      });

      $('#sigueme29').mousedown(function () {
        
        presionadoVeintenueve = true;
        soltadoVeintenueve = false;
        
      });

      $('#sigueme29').mouseup(function () {

        presionadoVeintenueve = false;
        soltadoVeintenueve = true;
        
      });

      $('#sigueme30').mousedown(function () {
        
        presionadoTreinta = true;
        soltadoTreinta = false;
        
      });

      $('#sigueme30').mouseup(function () {

        presionadoTreinta = false;
        soltadoTreinta = true;
        
      });

    });


  }

}
