import React from 'react'
import { Navbar } from '../Components/Navbar'
import { Header } from '../Components/Header'
import { Seation_1 } from '../Components/Seation_1'
import { Seation_2 } from '../Components/Section_2'
import { Section_3 } from '../Components/Section_3'




const Home = () => {
  return (
    <div>
        <div  className=' back'>
       <div className='container'>
       <Navbar/>
       </div>
        </div>
        <Header/>
        <Seation_1/>
        <Seation_2/>
        <Section_3/>


       
       
    </div>
  )
}

export  {Home}