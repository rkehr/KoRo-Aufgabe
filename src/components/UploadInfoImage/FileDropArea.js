import React, { useState } from 'react';
import PropTypes from 'prop-types';

const FileDropArea = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div
      className="file-drop-area"
      onDragEnter={(e) => {
        e.stopPropagation();
        e.preventDefault;
      }}
    >
      <span>Drop Your Image Here!</span>
    </div>
  );
};

FileDropArea.propTypes = {};

export default FileDropArea;
