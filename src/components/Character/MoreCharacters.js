import React from 'react';
import PropTypes from 'prop-types';

const MoreCharacters = ({ more }) => {
  return (
    <button onClick={more}>New Quote</button>
  );
};

MoreCharacters.propTypes = {
  more: PropTypes.func
};

export default MoreCharacters;
