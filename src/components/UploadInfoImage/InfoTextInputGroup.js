import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import InfoTextInput from './InfoTextInput';

const InfoTextInputGroup = () => {
  let [infoData, setInfoData] = useState([['', '']]);
  const [hash, setHash] = useState(Math.random);

  useEffect(() => {
    const maxIndex = infoData.length - 1;
    const lastItem = infoData[maxIndex];
    if (lastItem)
      if (lastItem[0] || lastItem[1]) {
        let newInfoData = [...infoData];
        newInfoData.push(['', '']);
        setInfoData(newInfoData);
      }
  }, [infoData, setInfoData]);

  const contentCallback = (index, content) => {
    if (infoData[index] != content) {
      let newInfoData = [...infoData];
      newInfoData[index] = content;
      setInfoData(newInfoData);
    }
  };
  const deleteCallback = (index) => {
    if (index != infoData.length - 1) {
      setHash(Math.random());
      let newInfoData = [...infoData];
      newInfoData.splice(index, 1);
      setInfoData(newInfoData);
    }
  };

  return (
    <div className="info-text-input-group">
      {infoData.map(([titleValue, textValue], index) => {
        return (
          <InfoTextInput
            index={index}
            key={index + hash}
            titleValue={titleValue}
            textValue={textValue}
            contentCallback={contentCallback}
            deleteCallback={deleteCallback}
          />
        );
      })}
    </div>
  );
};

InfoTextInputGroup.propTypes = {};

export default InfoTextInputGroup;
