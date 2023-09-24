import './App.css';
import { useState,useEffect } from 'react';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Trending from './components/Trending';
import {Routes,Route} from 'react-router-dom';
import Search  from './components/Search';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Trending/>}/>
        <Route path='/search' element={<Search/>}/>
      </Routes>
    </div>
  );
}

export default App;
