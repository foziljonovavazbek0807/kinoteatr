import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Premiere from '../components/premiere/Premiere';
import Card from '../components/cards/Card';

function Main() {
  return (
    <div className="Main">
        <Navbar/>
        <Header/>
        <Premiere name="NEW"/>
        <Card name="MOVIES"/>
        <Card name="SERIALS"/>
        <Card name="CARTOONS"/>
        <Premiere name="SOON"/>
        <Footer/>
    </div>
  )
}

export default Main;