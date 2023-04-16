import './style.css';

import getListitems from './module/getAllitems.js';

const linkbreakfast = document.querySelector('.link-breakfast');
const linksafefood = document.querySelector('.link-safefood');

let selected = '';

// Link address for each navigation bars
const breakfasturl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast';
const safefoodurl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';

// Display the first navigation bar
window.addEventListener('load', () => {
  selected = linkbreakfast;
  linksafefood.textContent = 'Light food';
  getListitems(selected, breakfasturl);
  linkbreakfast.style.textDecoration = 'underline';
  linksafefood.style.textDecoration = 'none';
});

// Event for breakfast navigation bar
linkbreakfast.addEventListener('click', () => {
  selected = linkbreakfast;
  selected.textContent = 'Breakfast';
  linksafefood.textContent = 'Light food';
  getListitems(selected, breakfasturl);
  linkbreakfast.style.textDecoration = 'underline';
  linksafefood.style.textDecoration = 'none';
});

// Event for safe food navigation bar
linksafefood.addEventListener('click', () => {
  selected = linksafefood;
  selected.textContent = 'Light food';
  linkbreakfast.textContent = 'Breakfast';
  getListitems(selected, safefoodurl);
  linksafefood.style.textDecoration = 'underline';
  linkbreakfast.style.textDecoration = 'none';
});
