import React from 'react';
import './Photobox.css';

const PhotoBox = ({ imageSrc, title }) => {
  return (
    <div className="photo-box">
      <img src={imageSrc} alt={title} className="photo-box-image" />
      <div className="photo-box-title">{title}</div>
    </div>
  );
};

export default PhotoBox;
