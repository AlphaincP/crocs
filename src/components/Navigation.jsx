import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className='Navigation'>
       <div className='nav_title'>
        <h3>crocs</h3>
       </div>
       <div className='nav_list'>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li>Movies</li>
            <li>Tv & Shows</li>
            <li>Account</li>
            <li className='nav_list_right'><Link to='search'>search</Link></li>
        </ul>
       </div>
    </div>
  )
}

export default Navigation