import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { setCharacter } from '../Actions/characterActions';
import { getCharacter } from '../Selectors/getCharacter';
import CharacterCard from '../components/Character/CharacterCard';
import MoreCharacters from '../components/Character/MoreCharacters';

export default function DisplayCharacter({ loading }) {
  const character = useSelector(getCharacter);
  const dispatch = useDispatch();

  const moreCharacters = () => dispatch(setCharacter());

  useEffect(() => {
    moreCharacters();
  }, []);

  if(loading) return <h1>Loading...</h1>;

  return (
    <>
      <CharacterCard character={character} />
      <MoreCharacters more={moreCharacters} />
    </>
  );
}

DisplayCharacter.propTypes = {
  character: PropTypes.shape({
    image: PropTypes.string,
    character: PropTypes.string,
    quote: PropTypes.string
  }),
  loading: PropTypes.bool
};

