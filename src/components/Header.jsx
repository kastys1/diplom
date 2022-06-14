import React , {useState, useEffect} from 'react'

import Imdb from '../images/imdb__logo.svg'
import PlayBtn from '../images/playBtn.svg'
import RottenTomato from '../images/rottenTomato.svg'

function Header() {

   const API_KEY = process.env.REACT_APP_MY_API_KEY;
   const API_URL = 'https://api.themoviedb.org/3/';

   const [movie, setMovie] = useState([])

   const BACKDROP_URL = `https://image.tmdb.org/t/p/original//${movie.backdrop_path}`

   const TRAILER_URL = `https://www.google.com/search?q=${movie.title}`
   
   useEffect(() => {
      getElements()
   },[])

   const getElements = async () => {
      const api = await fetch(
         `${API_URL}movie/${Math.floor(Math.random() * 560)}?api_key=${API_KEY}`
      )
      const data = await api.json()
   
      setMovie(data)

      console.log(data)
   }
  return (
     <header>
        <div className="poster__container">
           <img src={BACKDROP_URL} alt="/" className="poster__img" />
        </div>
        <div className="header__info">
              <div className="header__title">
                  <h1>{movie.title}</h1>
              </div>
              <div className="header__ratings">
                 <div className='Imdb'>
                    <img src={Imdb} alt="Imdb" />
                    <p>{movie.vote_average}/10</p>
                 </div>
                 <div className='RottenTomato'>
                    <img src={RottenTomato} alt="rotten tomato" />
                    <p>{movie.vote_count}</p>
                 </div>
              </div>
              <div className='header__descrpition'>
                  <p>{movie.overview}</p>
              </div>
              <a href={TRAILER_URL} target='_blank' rel='noopener noreferrer' className="header__buttons">
                    <img src={PlayBtn} alt="play" />
                    <p>Watch trailer</p>
              </a>
        </div>
    </header>
  )
}

export default Header