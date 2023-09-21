import React from 'react';
import './Navigation.css';

const Navigation = () => {
  return (
    <div className='Navigation'>
       <div className='nav_title'>
        <h3>crocs</h3>
       </div>
       <div className='nav_list'>
        <ul>
            <li>Home</li>
            <li>Movies</li>
            <li>Tv & Shows</li>
            <li>Account</li>
            <li className='nav_list_right'>search</li>
        </ul>
       </div>
    </div>
  )
}

export default Navigation