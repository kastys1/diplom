import React from 'react'

import Header from '../components/Header'
import FeaturedMovie from '../components/FeaturedMovie'
import NewArrivals from '../components/NewArrivals'
import Exclusive from '../components/Exclusive'

function Home() {
  return (
     <section className='home'>
      <Header />
      <FeaturedMovie />
      <NewArrivals />
      <Exclusive />
    </section>
  )
}

export default Home