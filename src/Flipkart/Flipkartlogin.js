import React from 'react'
import Flipkartheader from './Flipkartheader'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Flipkartfooter2 from './Flipkartfooter2';
function Flipkartlogin() {
    return (
        <div>
            <div>
                <Flipkartheader />
            </div>
            <div className='bg-gray-100'>
                <div className='flex justify-evenly h-[8vh] border shadow-lg bg-white'>
                    <div className='flex justify-center items-center relative'>
                        Electronics
                        <div className='absolute ml-24'><ArrowDropDownIcon /></div>
                    </div>
                    <div className='flex justify-center items-center'>
                        Appliances
                        <div className='absolute ml-24'><ArrowDropDownIcon /></div>
                    </div>
                    <div className='flex justify-center items-center'>
                        Men
                        <div className='absolute ml-14'><ArrowDropDownIcon /></div>
                    </div>
                    <div className='flex justify-center items-center'>
                        Women
                        <div className='absolute ml-20'><ArrowDropDownIcon /></div>
                    </div>
                    <div className='flex justify-center items-center'>
                        Baby & Kids
                        <div className='absolute ml-28'><ArrowDropDownIcon /></div>
                    </div>
                    <div className='flex justify-center items-center'>
                        Furniture
                    </div>
                    <div className='flex justify-center items-center'>
                        Sports & Books
                        <div className='absolute ml-32'><ArrowDropDownIcon /></div>
                    </div>
                    <div className='flex justify-center items-center'>
                        Flight
                    </div>
                    <div className='flex justify-center items-center'>
                        Offer Zone
                    </div>
                    <div className='flex justify-center items-center'>
                        Grocery
                    </div>
                </div>
            </div>
            <div className='h-[85vh] pt-[5vh] w-[100vw]'>
                <form className='h-[80vh] m-auto w-[60vw] border shadow-lg'>
                    <div className='grid grid-cols-2 w-full h-full'>
                        <div className='bg-blue-500 w-[25vw]'>
                            <div className='mt-10 ml-10 font-semibold text-3xl text-white'>
                                Login
                            </div>
                            <div className='mt-8 ml-10 font-semibold text-lg text-white'>
                                Get access to your Orders, Wishlist and Recommendations
                            </div>
                            <div className='mt-28 ml-14'>
                                <img className="h-48 text-white" src='https://iconape.com/wp-content/png_logo_vector/flipkart.png' />
                            </div>
                        </div>
                        <div className=''>
                            <div className='mt-10 border-b w-80'>
                                <input type='text' placeholder='Enter Email/Mobile Number' className='outline-none w-52' />
                            </div>
                            <div className='mt-8 text-xs'>
                                <span className='text-gray-500'>By continuing, you agree to Flipkart's</span> <span className='text-blue-500'>Terms of Use</span> and <span className='text-blue-500'>Privacy Policy.</span>
                            </div>
                            <div className='mt-8 w-80 h-12 bg-red-500'>
                                <div className='text-center pt-3 text-white'>Request OTP</div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className=''>
                <Flipkartfooter2/>
            </div>
        </div>
    )
}

export default Flipkartlogin
