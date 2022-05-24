import React from 'react'
import Navbar from '../navbar/Navbar';
import Search from '../search/Search';
import records from './db.json';

const Home = () => {

  return (
      <>
   <Navbar/>
   <Search Data={records}/>
      </>
  )
}

export default Home