const renderComments = async (meal) => {
  const commentsList = document.querySelector('.food-comment ul');
  commentsList.innerHTML = '';
  const response = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/C9lShWLme7eYfRxz4vXQ/comments?item_id=${meal.meals[0].idMeal}`,
  );
  const comments = await response.json();
  comments.forEach((comment) => {
    const li = document.createElement('li');
    li.textContent = `${comment.creation_date} ${comment.username}: ${comment.comment}`;
    commentsList.appendChild(li);
  });
};

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

  const postComment = async (name, comment) => {
    const response = await fetch(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/C9lShWLme7eYfRxz4vXQ/comments',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          item_id: meal.meals[0].idMeal,
          username: name,
          comment,
        }),
      },
    );
    if (!response.ok) {
      throw new Error('Failed to post comment');
    }
  };

  const commentForm = popContainer.querySelector('.form-input');
  commentForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const nameInput = document.getElementById('name-user');
    const commentInput = document.getElementById('comment-user');
    const name = nameInput.value.trim();
    const comment = commentInput.value.trim();
    await postComment(name, comment);
    renderComments(meal);
    nameInput.value = '';
    commentInput.value = '';
  });
};

export { commentPop, renderComments };
