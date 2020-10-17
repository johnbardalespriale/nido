import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-memorias',
  templateUrl: './memorias.component.html',
  styleUrls: ['./memorias.component.sass']
})
export class MemoriasComponent implements OnInit {


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
      title: 'EXCELENTE',
      text: 'Tuviste ' + intentos + ' intentos. ¡Juego terminado!',
    });
  }else if(cont2 === 8 && favoriteSeason === 'Nivel 2' ){
    Swal.fire({
      title: 'EXCELENTE',
      text: 'Tuviste ' + intentos + ' intentos. Juego terminado!',
    });
  }else if(cont3 === 10 && favoriteSeason === 'Nivel 3' ){
    Swal.fire({
      title: 'EXCELENTE',
      text: 'Tuviste ' + intentos + ' intentos. Juego terminado!',
    });
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
    console.log(randomPos, "cardsss");
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

    this.nivels = [
      { nivel: 'Nivel 1', selected: true },
      { nivel: 'Nivel 2', selected: false },
      { nivel: 'Nivel 3', selected: false },
    ];

    this.javascript(this.favoriteSeason)
  }

  iniciar() {

    setTimeout(() => {
      this.javascript(this.favoriteSeason);
    }, 800);

    if(this.favoriteSeason === 'Nivel 1'){
      setTimeout(() => {
        this.javascript(this.favoriteSeason);
      }, 800);
    }

  }

  
}
