import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import InfoArea from './InfoArea';

const InfoAreaContainer = ({ infoData, activeTextCallback }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    activeTextCallback(infoData[activeIndex]);
  }, [activeIndex, activeTextCallback]);
  return (
    <div className="info-area-container">
      {infoData.map(([h, p], index) => {
        return (
          <InfoArea
            key={index}
            index={index}
            activeIndexCallback={setActiveIndex}
          />
        );
      })}
    </div>
  );
};
InfoAreaContainer.propTypes = {};

export default InfoAreaContainer;
