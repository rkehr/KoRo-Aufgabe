import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import InfoAreaContainer from './InfoAreaContainer';

const InfoImage = ({ data, activeTextCallback }) => {
  const [activeText, setActiveText] = useState(['', '']);
  useEffect(() => {
    activeTextCallback(activeText);
  }, [activeText, activeTextCallback]);

  const imageSrc = data.img.src;
  const imageAlt = data.img.alt;
  const { infoData } = data;
  return (
    <div className="info-image">
      <img src={imageSrc} alt={imageAlt} />{' '}
      <InfoAreaContainer
        infoData={infoData}
        activeTextCallback={setActiveText}
      />
    </div>
  );
};

InfoImage.propTypes = {
  data: PropTypes.object,
  activeTextCallback: PropTypes.func,
};

export default InfoImage;
