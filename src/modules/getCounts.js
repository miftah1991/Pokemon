import { updateLikes } from './manageLikes.js';

export const displayCounts = (myPokes) => {
  const counts = document.querySelector('.myPokes');
  counts.innerText = `${myPokes} Pokes`;
};
export const likeCountes = async (pokeId, containerDiv) => {
  const likes = await updateLikes(pokeId);
  containerDiv.innerHTML = `${likes} likes`;
};