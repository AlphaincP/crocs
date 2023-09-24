import React from 'react';
import {BsCameraVideo, BsHouseFill, BsPersonCircle, BsSearch, BsTvFill} from 'react-icons/bs';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='Footer'>
       <div className='footer_list'>
        <ul>
            <li><Link to='/'><BsHouseFill className='footer_icon'/></Link></li>
            <li><Link to='/search'><BsSearch className='footer_icon'/></Link></li>
        </ul>
       </div>
    </div>
  )
}

export default Footer