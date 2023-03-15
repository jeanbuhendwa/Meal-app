const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/7ehAPZeZwvIMAOMx1gZ4/likes';
// add addlikes function
const newLikes = async (id) => {
  const req = new Request(url);
  const response = await fetch(req, {
    method: 'POST',
    body: JSON.stringify({ item_id: `${id}` }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response;
};

// get number of likes
const getLikes = async () => {
  const req = new Request(url);
  const response = await fetch(req);
  const like = await response.json();
  return like;
};
module.exports = { newLikes, getLikes };