export const fetchCharacter = () => {
  return fetch('https://last-airbender-api.herokuapp.com/api/v1/characters/random')
    .then(res => res.json())
    .then(([{ Character, image, quote }]) => {
      return { Character: Character, image: image, quote: quote };
    });
};
