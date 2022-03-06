import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import Card from '../components/cards/Card';
import Tv from '../components/tv/Tv';

function Basic() {
  return (
    <div className="Basic">
        <Navbar/>
        <Tv/>
        <Card name="OFFER"/>
        <Footer/>
    </div>
  )
}

export default Basic;