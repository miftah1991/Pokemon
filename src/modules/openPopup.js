/* eslint-disable import/prefer-default-export */
/* eslint-disable no-use-before-define */

import { likeCountes } from './getCounts.js';

export function openPopup(id) {
  function fetchPokemonsPopup(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then((pokemonInfo) => {
        renderPkmnPopup(pokemonInfo);
      });
  }

  function createTypes(types, ul) {
    types.forEach((type) => {
      const typeLi = document.createElement('li');
      typeLi.innerText = type.type.name;
      ul.append(typeLi);
    });
  }

  function createPopupImage(pokeID, containerDiv) {
    const pokeImgContainer = document.createElement('div');
    pokeImgContainer.classList.add('popup-image');

    const pokeImage = document.createElement('img');
    pokeImage.srcset = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeID}.png`;

    pokeImgContainer.append(pokeImage);
    containerDiv.append(pokeImgContainer);
  }

  function renderPkmnPopup(pokemonInfo) {
    const PopupPokemonContainer = document.getElementById('container');
    const pokePopup = document.createElement('div');
    pokePopup.classList.add('popup-card');
    pokePopup.setAttribute('id', 'popup');

    const popupDetails = document.createElement('div');
    popupDetails.classList.add('popup-details');

    const pokeDetails = document.createElement('div');
    pokeDetails.classList.add('popup-poke-details');

    createPopupImage(pokemonInfo.id, pokeDetails);

    const closeCommentBtn = document.createElement('button');
    closeCommentBtn.classList.add('close-comment-btn');
    closeCommentBtn.innerHTML = 'Close';
    closeCommentBtn.addEventListener('click', () => {
      const popup = document.getElementById('popup');
      popup.remove();
    });

    const pokeName = document.createElement('h4');
    pokeName.innerText = pokemonInfo.name;

    const pokeNumber = document.createElement('p');
    pokeNumber.innerText = `#${pokemonInfo.id}`;

    const likePokemon = document.createElement('div');
    likePokemon.className = 'like-pokemon';

    const likeIcon = document.createElement('i');
    likeIcon.className = 'far fa-heart fa-lg';
    likeIcon.setAttribute('id', `like${pokemonInfo.id}`);

    const likeCounter = document.createElement('p');
    likeCounter.classList.add('like-counter');

    likeCountes(pokemonInfo.id, likeCounter);

    const pokeTypes = document.createElement('ul');

    createTypes(pokemonInfo.types, pokeTypes);

    const commentsdiv = document.createElement('div');
    commentsdiv.classList.add('comments-div');
    commentsdiv.innerHTML = `
        <div class="comments">
        <h5>Francisco:</h5>
        <p>This is awesome</p>
        </div>
        <form id="comment-form">
            <div class="form-group">
                <label for="name">Your Name</label>
                <input class="user-name" type="text" id="name" placeholder="Your Name" required>
            </div>
            <div class="form-group">
                <label for="comment"></label>
                <textarea class="user-comment" id="comment" rows="10" cols="79" placeholder="Type your comment here" required/></textarea>
            </div>
            <input id="submit-btn" class="button" type="submit" value="Post Comment">
        </form>
    `;

    likePokemon.append(likeIcon, likeCounter);
    pokeDetails.append(pokeName, pokeNumber, likePokemon);
    popupDetails.append(pokeDetails, pokeTypes);
    pokePopup.append(popupDetails, commentsdiv, closeCommentBtn);
    PopupPokemonContainer.append(pokePopup);
  }

  fetchPokemonsPopup(id);
}
