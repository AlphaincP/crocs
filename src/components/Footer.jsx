import React from 'react';
import {BsCameraVideo, BsHouseFill, BsPersonCircle, BsSearch, BsTvFill} from 'react-icons/bs';
import './Footer.css';

const Footer = () => {
  return (
    <div className='Footer'>
       <div className='footer_list'>
        <ul>
            <li><BsHouseFill className='footer_icon'/></li>
            <li><BsCameraVideo className='footer_icon'/></li>
            <li><BsTvFill className='footer_icon'/></li>
            <li><BsSearch className='footer_icon'/></li>
        </ul>
       </div>
    </div>
  )
}

export default Footer