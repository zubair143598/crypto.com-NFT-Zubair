import React from 'react'
import Cards from '../Components/Elements/Cards'
import Dashboard from '../Components/Elements/Dashboard'
import Hero from '../Components/Elements/Hero'
import TopCollection from '../Components/Elements/TopCollection'


const Home = () => {
  return (
    <>
    
    <TopCollection/>
    <div className='d-flex justify-content-center'>
    <Dashboard/>
    <Cards/>
    </div>
    </>
  )
}

export default Home