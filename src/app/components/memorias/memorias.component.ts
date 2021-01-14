import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-memorias',
  templateUrl: './memorias.component.html',
  styleUrls: ['./memorias.component.sass']
})
export class MemoriasComponent implements OnInit {

  winner: number;

  javascript(favoriteSeason){
    

  const cards = document.querySelectorAll('.memory-card')as any as Array<HTMLElement>;
  let hasFlippedCard = false;
  let lockBoard = false;
  let firstCard, secondCard;
  let cont1 = 0;
  let cont2 = 0;
  let cont3 = 0;
  let intentos = 0;
  

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();

  intentos++;

  if(isMatch === true){
    cont1++
    cont2++
    cont3++
    mensaje(cont1);
  }

}

function mensaje (cont1){
  if(cont1 === 6 && favoriteSeason === 'Nivel 1' ){
    Swal.fire({
      html: "<h1 style='color:#1db31d;'>¡EXCELENTE!</h1> Tuviste " + intentos + ' intentos. Juego terminado!',
    });

    var win = document.getElementById('win');
    win.style.display = 'inherit';

  }else if(cont2 === 8 && favoriteSeason === 'Nivel 2' ){
    Swal.fire({
      html: "<h1 style='color:#1db31d;'>¡EXCELENTE!</h1> Tuviste " + intentos + ' intentos. Juego terminado!',
    });

    var win = document.getElementById('win');
    win.style.display = 'inherit';
    
  }else if(cont3 === 10 && favoriteSeason === 'Nivel 3' ){
    Swal.fire({
      html: "<h1 style='color:#1db31d;'>¡EXCELENTE!</h1> Tuviste " + intentos + ' intentos. Juego terminado!',
    });
    var win = document.getElementById('win');
    win.style.display = 'inherit';
    
  }
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    var n = randomPos.toString();
    card.style.order = n;
    
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));
  }

  nivels: any[];
  favoriteSeason: any;

  constructor() { }

  ngOnInit(): void {

    this.winner = 0;

    this.nivels = [
      { nivel: 'Nivel 1', selected: true },
      { nivel: 'Nivel 2', selected: false },
      { nivel: 'Nivel 3', selected: false },
    ];

    

    this.javascript(this.favoriteSeason)
  }

  showImagesCards(nivel){

    if(nivel === 'Nivel 1'){
    var pet1 = document.getElementById('pet1');
    pet1.style.visibility = "hidden";
    var pet2 = document.getElementById('pet2');
    pet2.style.visibility = "hidden";
    var pet3 = document.getElementById('pet3');
    pet3.style.visibility = "hidden";
    var pet4 = document.getElementById('pet4');
    pet4.style.visibility = "hidden";
    var pet5 = document.getElementById('pet5');
    pet5.style.visibility = "hidden";
    var pet6 = document.getElementById('pet6');
    pet6.style.visibility = "hidden";
    var pet7 = document.getElementById('pet7');
    pet7.style.visibility = "hidden";
    var pet8 = document.getElementById('pet8');
    pet8.style.visibility = "hidden";
    var pet9 = document.getElementById('pet9');
    pet9.style.visibility = "hidden";
    var pet10 = document.getElementById('pet10');
    pet10.style.visibility = "hidden";
    var pet11 = document.getElementById('pet11');
    pet11.style.visibility = "hidden";
    var pet12 = document.getElementById('pet12');
    pet12.style.visibility = "hidden";
    } else if (nivel === 'Nivel 2'){
      var pet13 = document.getElementById('pet13');
    pet13.style.visibility = "hidden";
    var pet14 = document.getElementById('pet14');
    pet14.style.visibility = "hidden";
    var pet15 = document.getElementById('pet15');
    pet15.style.visibility = "hidden";
    var pet16 = document.getElementById('pet16');
    pet16.style.visibility = "hidden";
    var pet17 = document.getElementById('pet17');
    pet17.style.visibility = "hidden";
    var pet18 = document.getElementById('pet18');
    pet18.style.visibility = "hidden";
    var pet19 = document.getElementById('pet19');
    pet19.style.visibility = "hidden";
    var pet20 = document.getElementById('pet20');
    pet20.style.visibility = "hidden";
    var pet21 = document.getElementById('pet21');
    pet21.style.visibility = "hidden";
    var pet22 = document.getElementById('pet22');
    pet22.style.visibility = "hidden";
    var pet23 = document.getElementById('pet23');
    pet23.style.visibility = "hidden";
    var pet24 = document.getElementById('pet24');
    pet24.style.visibility = "hidden";
    var pet25 = document.getElementById('pet25');
    pet25.style.visibility = "hidden";
    var pet26 = document.getElementById('pet26');
    pet26.style.visibility = "hidden";
    var pet27 = document.getElementById('pet27');
    pet27.style.visibility = "hidden";
    var pet28 = document.getElementById('pet28');
    pet28.style.visibility = "hidden";
    } else if (nivel === 'Nivel 3'){
      var pet29 = document.getElementById('pet29');
      pet29.style.visibility = "hidden";
      var pet30 = document.getElementById('pet30');
      pet30.style.visibility = "hidden";
      var pet31 = document.getElementById('pet31');
      pet31.style.visibility = "hidden";
      var pet32 = document.getElementById('pet32');
      pet32.style.visibility = "hidden";
      var pet33 = document.getElementById('pet33');
      pet33.style.visibility = "hidden";
      var pet34 = document.getElementById('pet34');
      pet34.style.visibility = "hidden";
      var pet35 = document.getElementById('pet35');
      pet35.style.visibility = "hidden";
      var pet36 = document.getElementById('pet36');
      pet36.style.visibility = "hidden";
      var pet37 = document.getElementById('pet37');
      pet37.style.visibility = "hidden";
      var pet38 = document.getElementById('pet38');
      pet38.style.visibility = "hidden";
      var pet39 = document.getElementById('pet39');
      pet39.style.visibility = "hidden";
      var pet40 = document.getElementById('pet40');
      pet40.style.visibility = "hidden";
      var pet41 = document.getElementById('pet41');
      pet41.style.visibility = "hidden";
      var pet42 = document.getElementById('pet42');
      pet42.style.visibility = "hidden";
      var pet43 = document.getElementById('pet43');
      pet43.style.visibility = "hidden";
      var pet44 = document.getElementById('pet44');
      pet44.style.visibility = "hidden";
      var pet45 = document.getElementById('pet45');
      pet45.style.visibility = "hidden";
      var pet46 = document.getElementById('pet46');
      pet46.style.visibility = "hidden";
      var pet47 = document.getElementById('pet47');
      pet47.style.visibility = "hidden";
      var pet48 = document.getElementById('pet48');
      pet48.style.visibility = "hidden";
    }
    

    setTimeout(() => {
      if(nivel === 'Nivel 1'){
      pet1.style.visibility = "inherit";
      pet2.style.visibility = "inherit";
      pet3.style.visibility = "inherit";
      pet4.style.visibility = "inherit";
      pet5.style.visibility = "inherit";
      pet6.style.visibility = "inherit";
      pet7.style.visibility = "inherit";
      pet8.style.visibility = "inherit";
      pet9.style.visibility = "inherit";
      pet10.style.visibility = "inherit";
      pet11.style.visibility = "inherit";
      pet12.style.visibility = "inherit";
      }else if (nivel === 'Nivel 2'){
        pet13.style.visibility = "inherit";
        pet14.style.visibility = "inherit";
        pet15.style.visibility = "inherit";
        pet16.style.visibility = "inherit";
        pet17.style.visibility = "inherit";
        pet18.style.visibility = "inherit";
        pet19.style.visibility = "inherit";
        pet20.style.visibility = "inherit";
        pet21.style.visibility = "inherit";
        pet22.style.visibility = "inherit";
        pet23.style.visibility = "inherit";
        pet24.style.visibility = "inherit";
        pet25.style.visibility = "inherit";
        pet26.style.visibility = "inherit";
        pet27.style.visibility = "inherit";
        pet28.style.visibility = "inherit";
      }else if (nivel === 'Nivel 3'){
        pet29.style.visibility = "inherit";
        pet30.style.visibility = "inherit";
        pet31.style.visibility = "inherit";
        pet32.style.visibility = "inherit";
        pet33.style.visibility = "inherit";
        pet34.style.visibility = "inherit";
        pet35.style.visibility = "inherit";
        pet36.style.visibility = "inherit";
        pet37.style.visibility = "inherit";
        pet38.style.visibility = "inherit";
        pet39.style.visibility = "inherit";
        pet40.style.visibility = "inherit";
        pet41.style.visibility = "inherit";
        pet42.style.visibility = "inherit";
        pet43.style.visibility = "inherit";
        pet44.style.visibility = "inherit";
        pet45.style.visibility = "inherit";
        pet46.style.visibility = "inherit";
        pet47.style.visibility = "inherit";
        pet48.style.visibility = "inherit";
      }
    }, 1000);
  }

  iniciar(nivel) {

    var win = document.getElementById('win');
    win.style.display = 'none';

    this.favoriteSeason = 'Nivel 0';

    setTimeout(() => {
      this.javascript(this.favoriteSeason);

      this.favoriteSeason = nivel;

      this.showImagesCards(nivel);
    }, 800);

    if(this.favoriteSeason === 'Nivel 1'){
      setTimeout(() => {
        this.javascript(this.favoriteSeason);
      }, 800);
    }

  }
  
}
