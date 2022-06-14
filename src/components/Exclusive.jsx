import React, { useState , useEffect } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function Exclusive() {

   const API_KEY = process.env.REACT_APP_MY_API_KEY;
   const API_URL = 'https://api.themoviedb.org/3/';

   const [movie, setMovie] = useState([])

   useEffect(() => {
      getElements()
   },[])

   const getElements = async () => {
      const api = await fetch(
         `${API_URL}trending/movie/day?api_key=${API_KEY}`
      )
      const data = await api.json()
   
      setMovie(data.results)

      console.log(data.results)
   }
   return (
      <section className="exclusive">

         
         <div className='splide__buttons'>
               <h1>Exclusive Videos</h1>
               <a href='https://www.youtube.com' target='_blank' rel='noopener noreferrer'>See more</a>
         </div>
         
         <Splide
            
            className='splide'
            
            options={{
               perPage:1,
            }}

            aria-label="React Splide Example"
         >
         {movie.map((response) => {
            return (
               <SplideSlide className='video__slide' key={response.id}>
                  <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" className='video__slide--card'>
                     <div className="video__slide--img">
                        <img src={`https://image.tmdb.org/t/p/original//${response.backdrop_path}`} alt="Image1"/>
                     </div>
                     <div className='video__slide--title'>
                        <p>{response.title}</p>
                     </div>

                  </a>
               </SplideSlide>
            );
         })}
         </Splide>
         
      </section>
    );
}

export default Exclusive