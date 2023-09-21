import './App.css';
import { useState,useEffect } from 'react';
import { imageLink } from './components/link';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Trending from './components/Trending';

function App() {
  const [isData,setData] = useState([]);
   
    const fetchTrending = async () =>{
     const data = await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=0beacfff39ac45b342761d635044d37d')
     const dataItems = await data.json();
     setData(dataItems.results[0]);
     console.log(dataItems.results[0])
    }
 
    useEffect(() =>{
     fetchTrending()
    },[])


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
