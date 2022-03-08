/* eslint-disable import/prefer-default-export */
export const fetchPokemons = async (url) => {
  const pokeData = await fetch(url);
  const allData = await pokeData.json();
  return allData;
};
