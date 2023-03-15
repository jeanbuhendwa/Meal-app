import commentPop from './commentPop.js';
import { newLikes, getLikes } from './getLikes.js';

const displayitems = (element) => {
  const fooditem = document.querySelector('.food-container');
  fooditem.innerHTML = '';
  element.forEach((e) => {
    const div = document.createElement('div');
    div.classList.add('food-card');
    div.id = e.idMeal;
    div.innerHTML = `
             <div class="food-img"> <img src="${e.strMealThumb}" alt="#"></div>
              <h3 class="food-title">${e.strMeal}</h3>
              <div class="reactions">
              <button class="comments" id="${e.idMeal}">Coments</button>
              <div class="likes"> </div>
             </div> `;
    
    const numOflikes = div.querySelector('.likes');
    // counter for number of likes for each item
    const likesCounter = (like) => {
      const likesfound = like.find((element) => element.item_id === e.idMeal);
      numOflikes.innerHTML = likesfound !== undefined ? `<i class="fa-solid fa-thumbs-up"></i>(${likesfound.likes}) Likes` : '<i class="fa-solid fa-thumbs-up"></i>(0) Likes';
    };
    getLikes().then(likesCounter);

    // Add new likes event
    numOflikes.addEventListener('click', () => {
      newLikes(e.idMeal);
      getLikes().then(likesCounter);
    });
    
    fooditem.appendChild(div);

    const commentBtn = div.querySelector('.comments');
    commentBtn.addEventListener('click', async () => {
      const mealId = commentBtn.getAttribute('id');
      const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
      const response = await fetch(url);
      const data = await response.json();
      commentPop(data);
    });
  });
};

  // Get item from API's
const getListitems = async (selected, url) => {
  const request = new Request(url);
  const response = await fetch(request);
  const data = await response.json();
  const data1 = data.meals;
  displayitems(data1);
};

export { getListitems as default };
