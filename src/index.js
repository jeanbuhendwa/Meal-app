import './style.css';

import getListitems from './module/getAllitems.js';

const linkbreakfast = document.querySelector('.link-breakfast');
const linkchicken = document.querySelector('.link-chicken');

let selected = '';

// Link address for each navigation bars
const breakfasturl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast';
const safefoodurl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';

// Display the first navigation bar items when the page refreshs
window.addEventListener('load', () => {
  selected = linkbreakfast;
  linkchicken.textContent = 'Light food';
  getListitems(selected, breakfasturl);
  linkbreakfast.style.textDecoration = 'underline';
  linkchicken.style.textDecoration = 'none';
});

// Event for breakfast navigation bar
linkbreakfast.addEventListener('click', () => {
  selected = linkbreakfast;
  selected.textContent = 'Breakfast';
  linkchicken.textContent = 'Light food';
  getListitems(selected, breakfasturl);
  linkbreakfast.style.textDecoration = 'underline';
  linkchicken.style.textDecoration = 'none';
});

// Event for chicken navigation bar
linkchicken.addEventListener('click', () => {
  selected = linkchicken;
  selected.textContent = 'Light food';
  linkbreakfast.textContent = 'Breakfast';
  getListitems(selected, safefoodurl);
  linkchicken.style.textDecoration = 'underline';
  linkbreakfast.style.textDecoration = 'none';
});
