/* eslint-disable import/prefer-default-export */
/* eslint-disable no-use-before-define */

import { likeCountes } from './getCounts.js';
import { createImg } from './renderPokeImage.js';
import { createPokeType } from './renderPokeType.js';

export function openPopup(id) {
  function fetchPokemonsPopup(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then((pokemonInfo) => {
        renderPkmnPopup(pokemonInfo);
      });
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

    createImg(pokemonInfo.id, pokeDetails);

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

    createPokeType(pokemonInfo.types, pokeTypes);

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
