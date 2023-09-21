import React from 'react'
import Navigation from './Navigation'
import Footer from './Footer'
import Copyright from './copyright';
import './Search.css';
import { useState,useEffect } from 'react';

const Search = () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const [searchItem,setSearchItem] = useState('')
    const [content,setContent] = useState([]);

    const fetchSearch = async () =>{
      const data = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&query=${searchItem}&include_adult=false`);
      const {results} = await data.json();
      setContent(results);
    }

    useEffect(() =>{
        fetchSearch()
    },[])

    const Trigger = (e) =>{
        setSearchItem(e.target.value);
    }
    const PerformSearch = () =>{
        fetchSearch()
    }

  return (
    <div className='search'>
     <header>
        <Navigation/>
     </header>
     <div className='search_component'>
        <input type="search" placeholder='search movies....' onChange={Trigger}/>
        <button className='search_button' onClick={PerformSearch} >search</button>
     </div>
     <div className='search_result'>
        {
            content &&  
            content.map((val) =>{
                const {
                    name,
                    title,
                    poster_path,
                    first_air_date,
                    release_date,
                    media_type,
                    id,
                } = val;

                return(
                    <div key={id}>
                        <div className='search_image'>
                            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt=''/>
                        </div>
                    </div>
                )
            })
        }
     </div>
     <div className='footer'>
        <Footer/>
     </div>
    </div>
  )
}

export default Search