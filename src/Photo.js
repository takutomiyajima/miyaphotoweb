import React from 'react';
import tokyo from './image/station.JPG';
import akihabara from './image/akihabara.JPG'
import for1 from './image/for1.JPG'
import fuji from './image/fuji.JPG'
import fune1 from './image/fune1.JPG'
import irumi from './image/irumi.jpg'
import nemo from './image/nemo.JPG'
import re1 from './image/re1.JPG'
import re2 from './image/re2.JPG'
import toden from './image/toden.JPG'
import toden2 from './image/toden2.JPG'
import PhotoBox from './Photobox';
import './Photo.css'
import './App.css';

export const Photo = () => {
  const photos = [
    { src: tokyo, title: 'Photo 1' },
    { src: akihabara, title: 'Photo 2' },
    { src: for1, title: 'Photo 3' },
    { src: fuji, title: 'Photo 4' },
    { src: fune1, title: 'Photo 5' },
    { src: irumi, title: 'Photo 6' },
    { src: nemo, title: 'Photo 7' },
    { src: re2, title: 'Photo 8' },
    { src: toden, title: 'Photo 9' },
  ];

  return (
    <div className='Photo-container'>
      <h2 className='Photo-title'>Photo</h2>
      <h2 className='Picup-title'>
          Picup
      </h2>
      <div className='Picup-container'>
        <img className='Picup-photo' src= {fuji}></img>
        <div className='Picup-detail'>
          <p className='Picup-detail-title'>
            藤と映る金魚たち。
          </p>
          <p className='Picup-detail-context'>
            金魚の泳いでいる水槽の先には藤の花が。<br></br>
            6月らしいコラボが見られました。
          </p>
        </div>
      </div>  
        <div className='Photo-list'>
          {photos.map((photo, index) => (
          <PhotoBox key={index} imageSrc={photo.src} title={photo.title} />
          ))}
        </div>  
      <p>Photo page content goes here.</p>
    </div>
  );
};
