export const fetchCharacter = () => {
  return fetch('https://last-airbender-api.herokuapp.com/api/v1/characters/random')
    .then(res => res.json());
};
