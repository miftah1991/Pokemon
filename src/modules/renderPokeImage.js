/* eslint-disable import/prefer-default-export */
export const createImg = async (pokeID, containerDiv) => {
  // console.log(pokeID);
  const pokeImgContainer = document.createElement('div');
  pokeImgContainer.classList.add('image');

  const pokeImage = document.createElement('img');
  pokeImage.srcset = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeID}.png`;

  pokeImgContainer.append(pokeImage);
  containerDiv.append(pokeImgContainer);
};
