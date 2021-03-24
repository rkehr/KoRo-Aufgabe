import React from 'react';
import PropTypes from 'prop-types';

const InfoImage = ({ data, activeTextCallback }) => {
  return <p> {data.infoData[0][0]} </p>;
};

InfoImage.propTypes = {
  data: PropTypes.object,
  activeTextCallback: PropTypes.func,
};

export default InfoImage;
