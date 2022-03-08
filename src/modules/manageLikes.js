export const appId = 'j1jEowx7LZmaUO42biPH';
const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`;
export const postLikes = async (id) => {
  const postObject = { item_id: id };
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(postObject),
  });
  return response;
};
export const getLikes = async () => {
  const likesData = await fetch(url);
  const allLikes = await likesData.json();
  return allLikes;
};

export const updateLikes = async (id) => {
  const storeLikes = await getLikes();
  let results = 0;
  storeLikes.forEach((e) => {
    if (e.item_id.toString() === id.toString()) {
      results = e.likes;
    }
  });

  return results;
};