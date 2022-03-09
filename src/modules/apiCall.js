const fetchPokemons = async () => {
  const pokeData = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
  const allData = await pokeData.json();
  return allData;
};

export default fetchPokemons;