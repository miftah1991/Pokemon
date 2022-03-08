import './style.css';
import { displayCounts } from './modules/getCounts.js';
import render from './modules/renderStructure.js';
import fetchPokemons from './modules/apiCall.js';
import pokeCounter from './modules/itemCounter.js';
// window.addEventListener('load', () => {
//   displayCards();
// });

const starter = async () => {
  const data = await fetchPokemons();
  await render(data.results);
  const pokes = pokeCounter(data.results);
  displayCounts(pokes);
};
starter();