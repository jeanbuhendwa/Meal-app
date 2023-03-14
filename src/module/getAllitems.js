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
              <button class="comments">Coments</button>
              <div class="likes"> Like </div>
             </div> `;
    fooditem.appendChild(div);
  });
};
  // Get item data from the given API's
const getListitems = async (selected, url) => {
  const request = new Request(url);
  const response = await fetch(request);
  const data = await response.json();
  const data1 = data.meals;
  displayitems(data1);
};

export { getListitems as default };