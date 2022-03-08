/* eslint-disable import/prefer-default-export */
export const createPokeType = async (types, ul) => {
  types.forEach((type) => {
    const typeLi = document.createElement('li');
    typeLi.innerText = type.type.name;
    ul.append(typeLi);
  });
};