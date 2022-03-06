import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import Card from '../components/cards/Card';


function Search() {
  return (
    <div className="Search">
        <Navbar/>
        <Card name="OFFER"/>
        <Footer/>
    </div>
  )
}

export default Search