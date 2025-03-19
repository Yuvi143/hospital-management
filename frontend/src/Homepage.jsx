import React from 'react';
import Searchbar from "./components/Searchbar";
import Map from "./components/Map";
import RecommendedHospital from "./components/RecommendedHospital";
import Footer from './components/Footer';
import PatientReviews from './components/PatientReviews';

const Homepage = () => {
  return (
    <div className='min-h-screen bg-gray-100 flex flex-col items-center justify-center'>
        <Searchbar/>
        <Map/>
        <RecommendedHospital/>
        <PatientReviews/>
        <Footer/>
    </div>
  )
}

export default Homepage
