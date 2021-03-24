import React from 'react';
import PropTypes from 'prop-types';

import FileDropArea from './FileDropArea';
import InfoTextInputGroup from './InfoTextInputGroup';

const UploadInfoImage = () => {
  return (
    <>
      <FileDropArea />
      <InfoTextInputGroup />
    </>
  );
};

UploadInfoImage.propTypes = {};

export default UploadInfoImage;
