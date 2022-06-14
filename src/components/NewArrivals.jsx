import React , { useEffect , useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


import Imdb from '../images/imdb__logo.svg'
import RottenTomato from '../images/rottenTomato.svg'

function NewArrivals() {

   const API_KEY = process.env.REACT_APP_MY_API_KEY;
   const API_URL = 'https://api.themoviedb.org/3/';

   const [movie, setMovie] = useState([])

   useEffect(() => {
      getElements()
   },[])

   const getElements = async () => {
      const api = await fetch(
         `${API_URL}trending/movie/week?api_key=${API_KEY}`
      )
      const data = await api.json()
   
      setMovie(data.results)

      console.log(data.results)
   }

   return (
      <section className="featured__movie">

         
         <div className='splide__buttons'>
               <h1>New Arrival</h1>
               <a href='https://www.youtube.com' target='_blank' rel='noopener noreferrer'>See more</a>
         </div>
         
         <Splide
            
            className='splide'
            
            options={{
               rewind: true,
               perPage: 4,
               pagination:false,
            }}

            aria-label="React Splide Example"
         >
               {movie.map((response) => {
                  return (
                     <SplideSlide className='slide' key={response.id}>
                        <div className='slide__card'>
                           <div className="slide__card--img">
                              <img src={`https://image.tmdb.org/t/p/original//${response.poster_path}`} alt="Image1"/>
                           </div>
                           <div className='slide__card--date'>
                              <p>Release Date: {response.release_date}</p>
                           </div>
                           <div className='slide__card--title'>
                              <h2>{response.title}</h2>
                           </div>
                           <div className="slide__card--ratings">
                              <div className='Imdb'>
                                 <img src={Imdb} alt="Imdb" />
                                 <p>{response.vote_average}/10</p>
                              </div>
                              <div className='RottenTomato'>
                                 <img src={RottenTomato} alt="rotten tomato" />
                                 <p>{response.vote_count}</p>
                              </div>
                           </div>
                           <div className='slide__card--type'>
                              <p>{response.adult ? '18+' : 'For Everyone'}</p>
                           </div>
                        </div>
                     </SplideSlide>
                  );
               })}
         </Splide>
         
      </section>
    );
}

export default NewArrivals