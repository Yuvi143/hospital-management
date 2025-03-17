import React from 'react';
import Searchbar from "./components/Searchbar";
import Map from "./components/Map";
import RecommendedHospital from "./components/RecommendedHospital";
import  Review from "./components/Review";
import Footer from './components/Footer';

const Homepage = () => {
  return (
    <div>
        <Searchbar/>
        <Map/>
        <RecommendedHospital/>
        <Review/>
        <Footer/>


      it is homepage.
    </div>
  )
}

export default Homepage
