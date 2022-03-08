/* eslint-disable import/prefer-default-export */
export const fetchPokemonsssss = async (url) => {
  const pokeData = await fetch(url);
  const allData = await pokeData.json();
  return allData;
};
