const commentPop = async (meal) => {
  const popContainer = document.getElementById('pop-container');
  popContainer.innerHTML = `
    <div class="comment-container">
        <button name="button" class="close-comment" id="closePop">&times;</button>
        <img src="${meal.meals[0].strMealThumb}" alt="#" class="img-pop">
        <h2 class="pop-title">${meal.meals[0].strMeal}</h2>
        <div class="food-comment">
            <h3>Comments</h3>
            <ul></ul>
        </div>
        <div class="comment-form">
            <h3>Add a comment</h3>
            <form action="#" method="#" class="form-input">
                <input type="text" id="name-user" placeholder="User name">
                <textarea name="comment-user" id="comment-user" cols="30" rows="5" placeholder="Enter your comment"></textarea>
                <button name="button">Comments</button>
            </form>
        </div>
    </div>
  `;
  popContainer.style.display = 'block';

  const closePop = document.getElementById('closePop');
  closePop.addEventListener('click', () => {
    popContainer.style.display = 'none';
  });
};

export default commentPop;
