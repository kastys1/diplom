<!-- import React, { useState , useEffect} from 'react'

function Home() {

   const API_KEY = process.env.REACT_APP_MY_API_KEY;
   const API_URL = 'https://api.themoviedb.org/3/';

   const POSTER_URL = 'https://image.tmdb.org/t/p/original/'

   const [movie, setMovie] = useState([])
   
   useEffect(() => {
      getElements()
      getPoster()
   },[])

   const getElements = async () => {
      const api = await fetch(

         `${API_URL}movie/550?api_key=${API_KEY}`
      )
      const data = await api.json()
   
      setMovie(data)

      console.log(data)
   }

   const getPoster = async (api) => {
      const posterApi = await fetch(
         `${POSTER_URL}${movie.poster_path}`
      )
      const data = await posterApi.json() 
   }

  return (
     <main>
        <div className="card">
           <div>
              <h1>{movie.title}</h1>
              <p>{movie.adult ? '18+' : 'FTW'}</p>
           </div>

        </div>
    </main>
  )
}

export default Home -->