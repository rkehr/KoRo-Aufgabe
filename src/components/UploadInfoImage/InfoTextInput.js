import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const InfoTextInput = ({
  index,
  titleValue,
  textValue,
  contentCallback,
  deleteCallback,
}) => {
  const [content, setContent] = useState([titleValue, textValue]);
  useEffect(() => {
    contentCallback(index, content);
  }, [content, index, contentCallback]);
  return (
    <div className="info-text-input">
      <p>Titel:</p>
      <input
        value={titleValue}
        type="text"
        onChange={(e) => {
          const newValue = e.target.value;
          setContent([newValue, content[1]]);
        }}
      />
      <p>Beschreibung:</p>
      <textarea
        value={textValue}
        onChange={(e) => {
          const newValue = e.target.value;
          setContent([content[0], newValue]);
        }}
      ></textarea>
      <button
        onClick={() => {
          deleteCallback(index);
        }}
      >
        Delete
      </button>
    </div>
  );
};

InfoTextInput.propTypes = {
  index: PropTypes.number,
  titleValue: PropTypes.string,
  textValue: PropTypes.string,
  contentCallback: PropTypes.func,
  deleteCallback: PropTypes.func,
};

export default InfoTextInput;
