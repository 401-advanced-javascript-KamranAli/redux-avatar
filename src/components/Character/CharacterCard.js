import React from 'react';
import PropTypes from 'prop-types';

const CharacterCard = ({ character }) => (
  <figure>
    <img src={character.photoUrl} />
    <p>{character.name}</p>
  </figure>
);

CharacterCard.propTypes = {
  character: PropTypes.shape({
    photoUrl: PropTypes.string,
    name: PropTypes.string
  }).isRequired
};

export default CharacterCard;
