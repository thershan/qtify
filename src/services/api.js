// src/services/api.js
export const fetchSongs = async () => {
  const response = await fetch('https://qtify-backend-labs.crio.do/songs');
  const data = await response.json();
  return data;
};

export const fetchGenres = async () => {
  const response = await fetch('https://qtify-backend-labs.crio.do/genres');
  const data = await response.json();
  return data;
};
