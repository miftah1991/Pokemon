const fetchPokemons = async () => {
  const pokeData = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50');
  const allData = await pokeData.json();
  return allData;
  // const data = allData.slice(0, 20).map((item) => item);
  // return data;
};

export default fetchPokemons;