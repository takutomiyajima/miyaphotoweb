import React from 'react';
import myphoto from './image/profile.JPG';
import tokyo from './image/station.JPG';
import './About.css';
import './App.css';

export const About = () => {
  return (
    
      <div className="About-container">
        <div className='About-titles'>  
          <h2 className="About-title">
            About
          </h2>
          <h3 className='About-subtitle'>
            夜景と景色と日常を。
          </h3>
          </div>  
        <div className='profile'>
          <img className='profile-photo' src= {myphoto}></img>
            <div className='profile-contents'>
              <p className='profile-title'>
                Profile
              </p>
              <p className='profile-detail1'>
                Name：Takuto Miyajima<br></br>
                Age：20<br></br>
                Like：Night Picture<br></br>
                From：Chiba<br></br>
              </p>
            </div>  
        </div>    
        <div className='profile'>
          <p className='profile-detail2'>
            はじめまして。<br></br>
            大学に入って東京の夜景に見惚れ<br></br>
            夜の写真撮影にはまった者です。
          </p>
          <img className='profile-photo2' src= {tokyo}></img>
        </div> 
        <div className='profile'>  
          <img className='profile-photo2' src= {tokyo}></img>
          <p className='profile-detail3'>
          大学に入って夜景や風景の写真にはまり、日々色々な場所をめぐり、撮影をしています。このサイトではそんな1大学生カメラマンの撮影記録を残していこうと思います。
          Instagramにもたくさん写真を上げているのでぜひ見てみて下さい。
          </p>
        </div>  
      
    </div>
  );
};
