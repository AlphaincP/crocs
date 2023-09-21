import './App.css';
import { useState,useEffect } from 'react';
import { imageLink } from './components/link';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Trending from './components/Trending';
import {Routes,Route} from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Trending/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
