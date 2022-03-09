import { appId } from './manageLikes.js';

const baseUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments`;

export const postComment = async (id, username, comment) => {
  const postObj = {
    item_id: id,
    username,
    comment,
  };
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(postObj),
  });
  return response;
};

export const getComments = async (id) => {
  try{
  const pokeComment = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments?item_id=${id}`);
  const allComments = await pokeComment.json();
  return allComments;
  }catch(err){
    throw new Error('failed');
  }
};