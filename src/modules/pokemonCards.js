/* eslint-disable import/prefer-default-export */
/* eslint-disable no-use-before-define */

export function displayCards() {
  const allPokemonContainer = document.querySelector('#pokemon-container');
  allPokemonContainer.innerText = '';
  fetchPokemons();
}

function fetchPokemons() {
  fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then((response) => response.json())
    .then((allpokemon) => {
      allpokemon.results.forEach((pokemon) => {
        fetchPkmnData(pokemon);
      });
    });
}

function fetchPkmnData(pokemon) {
  const { url } = pokemon;
  fetch(url)
    .then((response) => response.json())
    .then((pokeData) => {
      renderPkmn(pokeData);
    });
}

function renderPkmn(pokeData) {
  const allPokemonContainer = document.getElementById('pokemon-container');
  const pokeContainer = document.createElement('div');
  pokeContainer.classList.add('card');

  createPokeImage(pokeData.id, pokeContainer);

  const pokeDetails = document.createElement('div');
  pokeDetails.classList.add('poke-details');

  const pokeName = document.createElement('h4');
  pokeName.innerText = pokeData.name;

  const pokeNumber = document.createElement('p');
  pokeNumber.innerText = `#${pokeData.id}`;

  const likePokemon = document.createElement('div');
  likePokemon.className = 'like-pokemon';

  const likeIcon = document.createElement('i');
  likeIcon.className = 'far fa-heart fa-lg';
  likeIcon.setAttribute('id', `like${pokeData.id}`);

  const likeCounter = document.createElement('p');
  likeCounter.classList.add('like-counter');
  likeCounter.innerHTML = '0 likes';

  const pokeTypes = document.createElement('ul');

  const commentBtn = document.createElement('button');
  commentBtn.classList.add('comment-btn');
  commentBtn.setAttribute('id', `comment${pokeData.id}`);
  commentBtn.innerHTML = 'Comments';

  createTypes(pokeData.types, pokeTypes);

  likePokemon.append(likeIcon, likeCounter);
  pokeDetails.append(pokeName, pokeNumber, likePokemon);
  pokeContainer.append(pokeDetails, pokeTypes, commentBtn);
  allPokemonContainer.appendChild(pokeContainer);
}

function createTypes(types, ul) {
  types.forEach((type) => {
    const typeLi = document.createElement('li');
    typeLi.innerText = type.type.name;
    ul.append(typeLi);
  });
}

function createPokeImage(pokeID, containerDiv) {
  const pokeImgContainer = document.createElement('div');
  pokeImgContainer.classList.add('image');

  const pokeImage = document.createElement('img');
  pokeImage.srcset = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeID}.png`;

  pokeImgContainer.append(pokeImage);
  containerDiv.append(pokeImgContainer);
}
