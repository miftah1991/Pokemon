import { createImg } from './renderPokeImage.js';
import { createPokeType } from './renderPokeType.js';
import { fetchPokemons } from './pokeDetail.js';
import { postLikes } from './manageLikes.js';
import { likeCountes } from './getCounts.js';

const render = (data) => {
  data.forEach(async (pokeData) => {
    const mydata = await fetchPokemons(pokeData.url);
    const allPokemonContainer = document.getElementById('pokemon-container');
    const pokeContainer = document.createElement('div');
    pokeContainer.classList.add('card');
    createImg(mydata.id, pokeContainer);
    const pokeDetails = document.createElement('div');
    pokeDetails.classList.add('poke-details');

    const pokeName = document.createElement('h4');
    pokeName.innerText = pokeData.name;
    const pokeNumber = document.createElement('p');
    pokeNumber.innerText = `#${mydata.id}`;

    const likePokemon = document.createElement('div');
    likePokemon.className = 'like-pokemon';

    const likeIcon = document.createElement('i');
    likeIcon.className = 'far fa-heart fa-lg';
    likeIcon.setAttribute('id', `like${mydata.id}`);

    const likeCounter = document.createElement('p');
    likeCounter.classList.add('like-counter');
    likeCountes(mydata.id, likeCounter);
    const pokeTypes = document.createElement('ul');
    const commentBtn = document.createElement('button');
    commentBtn.classList.add('comment-btn');
    commentBtn.setAttribute('id', `comment${mydata.id}`);
    commentBtn.innerHTML = 'Comments';
    createPokeType(mydata.types, pokeTypes);

    likePokemon.append(likeIcon, likeCounter);
    pokeDetails.append(pokeName, pokeNumber, likePokemon);
    pokeContainer.append(pokeDetails, pokeTypes, commentBtn);
    allPokemonContainer.appendChild(pokeContainer);

    const likeBtn = document.getElementById(`like${mydata.id}`);
    likeBtn.addEventListener('click', () => {
      postLikes(mydata.id);
      likeCountes(mydata.id, likeCounter);
    });
  });
};
export default render;