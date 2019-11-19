export const fetchCharacter = () => {
  return fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
    .then(res => res.json())
    .then(([{ character, image, quote }]) => {
      return { character: character, image: image, quote: quote };
    });
};
