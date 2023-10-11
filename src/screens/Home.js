import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import '../css/Home.css'
import Carousal from '../components/Carousal'


function Home() {

  return (
    <div className='home_body' >
      <div><Navbar /></div>
      <div><Carousal/></div>
      <div className='card_body' >
      <div className='card_1 m-4 ' style={{display:"flex"}}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        </div>
        </div>
      <div><Footer /></div>
    </div>
  )
}

export default Home