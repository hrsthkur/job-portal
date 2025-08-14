import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import JobListing from '../components/JobListing'
import Appdownload from '../components/Appdownload'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <JobListing />
      <Appdownload />
      <Footer></Footer>
     
    </div>
  )
}

export default Home
