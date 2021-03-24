import React, { useState } from 'react';
import PropTypes from 'prop-types';

const isImage = (file) => {
  const { type } = file;
  const isImage = type.split('/')[0] == 'image';
  return isImage;
};

const FileDropArea = () => {
  const [isActive, setIsActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const files = [...e.dataTransfer.files];
    if (files && files.length > 0) {
      if (isImage(files[0])) {
        setSelectedFile(files[0]);
      }
    }
    setIsActive(false);
  };
  return (
    <div
      className={'file-drop-area ' + (isActive && 'active')}
      onDragOver={(e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsActive(true);
      }}
      onDragLeave={(e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsActive(false);
      }}
      onDrop={handleDrop}
    >
      <span>Drop Your Image Here!</span>
      <br />
      {selectedFile && <span className="file-name">{selectedFile.name}</span>}
    </div>
  );
};

FileDropArea.propTypes = {};

export default FileDropArea;
