import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CharacterCard from '../components/Character/CharacterCard';
import { setCharacter } from '../Actions/characterActions';
import { getCharacter } from '../Selectors/getCharacter';

export default function DisplayCharacter() {
  const character = useSelector(getCharacter);
  const dispatch = useDispatch();

  const moreCharacters = () => dispatch(setCharacter());

  useEffect(() => {
    moreCharacters();
  }, []);

  return (
    <>
      <CharacterCard character={character} />
    </>
  );
}
