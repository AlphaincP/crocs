import './App.css';
import { useState,useEffect } from 'react';
import { imageLink } from './components/link';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Trending from './components/Trending';

function App() {

  return (
    <div className="App">
      <header>
        <div className='app_navigation'>
           <Navigation/>
        </div>
      </header>
     
      <div className='trending'>
        <Trending/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
