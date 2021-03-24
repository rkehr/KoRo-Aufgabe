import React, { useState } from 'react';
import PropTypes from 'prop-types';

const InfoArea = ({ index, activeIndexCallback }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={'info-area ' + (isHovered && 'active')}
      onMouseEnter={() => {
        setIsHovered(true);
        activeIndexCallback(index);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    ></div>
  );
};
InfoArea.propTypes = {
  index: PropTypes.number,
  activeIndexCallback: PropTypes.func,
};

export default InfoArea;
