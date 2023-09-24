import React from 'react'
import { useState,useEffect } from 'react';
import './Trending.css';
import Navigation from './Navigation';
import Footer from './Footer';
import Copyright from './copyright';

const Trending = () => {
    const [isData,setData] = useState([]);
    const [isPage,setPage] = useState(1);
    const apiKey = process.env.REACT_APP_API_KEY;
   
    //fetch trending movies data
    const fetchTrending = async () =>{
     const data = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}&page=${isPage}`)
     const dataItems = await data.json();
     setData(dataItems.results);
     //console.log(dataItems.results)
    }
 
    useEffect(() =>{
     fetchTrending()
    },[])

     
    //button functions for next and previous page
    //prevoius Page
    const prevPage = () =>{
        if (isPage !== 1){
            setPage(isPage - 1)
        }else{
            setPage(isPage)
        }
    }

    const nextPage = () =>{
        if (isPage < 10 ){
           setPage(isPage + 1)
        }
    } 

  return (
    <>
    <header>
        <Navigation/>
    </header>
    <div className='Trending_Page'>
        {
            isData.map((val) => {
                const {
                    name,
                    title,
                    overview,
                    poster_path,
                    backdrop_path,
                    id,
                } = val;
                return(
                    <>
                    <div key={id}>
                        <div className='movie_gallery'>
                            <div className='movie_image'>
                            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt=''/>
                        </div> 
                        </div>
                        
                    </div>
                    
                        </>
                )
            })
        }
        <div className='play_button'>
                            <button className='prev' onClick={prevPage}>previous</button>
                            <button className='next' onClick={nextPage}>next</button>
                        </div>
    </div>
    <div className='copyright'>
        <Copyright/>
    </div>
    <Footer/>
    </>
  )
}

export default Trending