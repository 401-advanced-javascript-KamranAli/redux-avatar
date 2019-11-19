import React from 'react';
import PropTypes from 'prop-types';

const CharacterCard = ({ character }) => (
  <figure>
    <img src={character.image} />
    <p>{character.character}</p>
    <p>{character.quote}</p>
  </figure>
);

CharacterCard.propTypes = {
  character: PropTypes.shape({
    image: PropTypes.string,
    character: PropTypes.string,
    quote: PropTypes.string
  }).isRequired
};

export default CharacterCard;
