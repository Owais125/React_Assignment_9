import React from 'react'

const Header = () => {
  return (
    <div className='d-flex justify-content-end pt-4 back'>
        <div className='w-1/'>
            <h1 className='text-light'>We all Build <br /> House of Your <br /> dream</h1>
            <br /><br />
           <h6 className='text-light'>We Have 9000 more review <br /> and our customers  trust on out property <br /> and quaility products.</h6><br /><br />
          <div className='gap-5'>
          <button type="button" className="btn btn-dark">Buy Now</button>
           <button type="button" class="btn btn-outline-secondary">Explore Now</button>
          </div>
        </div>
        <div className='w-9/12 main'>

        </div>
    </div>
  )
}

export  {Header}