import React from 'react'
import Flipkartheader from './Flipkartheader'
import Header1 from './Header1'
import Flipkartbody from './Flipkartbody'
import Flipkartbody2 from './Flipkartbody2'
import Flipkartfooter from './Flipkartfooter'
import Flipkartfooter2 from './Flipkartfooter2'
import Flipkartlogin from './Flipkartlogin'
import Form from './Form'
import Notification from './Notification'
import Electronic2 from './Electronic2'
import Header3 from './Header3'
import Product from './Product'
import Product2 from './Product2'

function Flipkart() {
  return (
    <div className='bg-gray-200'>
    {/* <Product/> */}
    {/* // <div>
    // <Header3/> */} 
     {/* <Electronic2/> */}
      <Flipkartheader/>
      <Header1/>
      <Flipkartbody/>
      <Flipkartbody2/>
      <Flipkartfooter/>
      <Flipkartfooter2/> 
      {/* <Notification/> */}
    {/* {/* <Flipkartlogin/> */}
    {/* <Form/> */}

    {/* <div className='relative flex' >
      <div className='sticky top-5  w-[40%] '></div>
      <div></div>
    </div> */}
    </div>
  )
}

export default Flipkart
