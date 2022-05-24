import React from 'react'
// import Navbar from '../navbar/Navbar';
import NavAndSearch from '../search/NavAndSearch';
import records from './db.json';

const Home = () => {

  return (
      <>
   {/* <Navbar/> */}
   {/* <Search Data={records}/> */}
   <NavAndSearch Data={records}/>
      </>
  )
}

export default Home