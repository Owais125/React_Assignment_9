import React from 'react'
import image from '../assets/pexels-alex-staudinger-1732414.jpg'


const Seation_1 = () => {
  return (
    <div className='d-flex'>
        <div className='w-2/4 p-5  '>
            <h1>We make it Easy for tanats and landlords</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam maiores sunt quam culpa ut officia placeat maxime laudantium. Numquam fugiat dignissimos voluptate consequuntur, at in ullam nihil nemo illo odit?  es sunt quam culpa ut officia placeat maxime laudantium. Numquam fugiat dignissimos voluptate consequuntur, at in ullam nihil nemo illo odit?              </p>

        </div>



        <div className='w-2/4 d-flex justify-content-end 	'><img src={image }  style={{width: "80%"}} alt="" /></div>
   

    </div>
  )
}

export  {Seation_1}