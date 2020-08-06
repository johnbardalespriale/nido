import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.sass'],
})
export class ActividadesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.clicked();
  }

  clicked() {
    setTimeout(() => {
      var answers = document.getElementById('card1');
      answers.classList.add('fade-in');
    }, 500);

    setTimeout(() => {
      var answers = document.getElementById('card2');
      answers.classList.add('fade-in-2');
    }, 700);

    setTimeout(() => {
      var answers = document.getElementById('card3');
      answers.classList.add('fade-in-3');
    }, 900);

    setTimeout(() => {
      var answers = document.getElementById('card4');
      answers.classList.add('fade-in-2');
    }, 1100);

    setTimeout(() => {
      var answers = document.getElementById('card5');
      answers.classList.add('fade-in-4');
    }, 1300);

    setTimeout(() => {
      var answers = document.getElementById('card6');
      answers.classList.add('fade-in-5');
    }, 1500);

    setTimeout(() => {
      var answers = document.getElementById('card7');
      answers.classList.add('fade-in-6');
    }, 1700);

    setTimeout(() => {
      var answers = document.getElementById('card8');
      answers.classList.add('fade-in-7');
    }, 1900);

    setTimeout(() => {
      var answers = document.getElementById('card9');
      answers.classList.add('fade-in-8');
    }, 2100);

    setTimeout(() => {
      var answers = document.getElementById('card10');
      answers.classList.add('fade-in-9');
    }, 2300);
  }
}
