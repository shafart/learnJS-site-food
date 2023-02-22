import tabs from './modules/tabs';
import modal from'./modules/modal';
import timer from'./modules/timer';
import cards from'./modules/cards';
import calc from'./modules/calc';
import forms from'./modules/forms';
import slider from'./modules/slider';

window.addEventListener('DOMContentLoaded', () => {
   tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
   modal('[data-modal]', '.modal');
   timer('.timer', '2023-08-06');
   cards();
   calc();
   forms('form');
   slider({
      container: '.offer__slider',
      nextArrow: '.offer__slider-next',
      prevArrow: '.offer__slider-prev',
      slide: '.offer__slide',
      


   });
});