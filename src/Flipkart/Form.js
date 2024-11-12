import React from 'react'
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
function Form() {
    return (
        <div>
            <div className='h-[100vh] pt-[5vh] w-[100vw] bg-gray-200'>
                <form className='h-[90vh] m-auto w-[60vw] shadow-lg'>
                    <div className='grid grid-cols-2 w-full h-full'>
                        <div className='bg-white w-[30vw]'>
                            <div className='ml-10 font-semibold'>
                                <img className="h-36 text-white" src='https://iconape.com/wp-content/png_logo_vector/flipkart.png' />
                            </div>
                            <div className='ml-10 font-semibold text-lg'>
                                Get access to your Orders, Wishlist and Recommendations
                            </div>
                            <div className='ml-10 font-medium text-base text-gray-400'>
                                Login to your Account
                            </div>
                            <div className='mt-10 ml-10 border-b w-80'>
                                <input type='text' placeholder='Enter Email/Mobile Number' className='outline-none w-52' />
                            </div>
                            <div className='mt-5 ml-10 border-b w-80'>
                                <input type='text' placeholder='Enter Password' className='outline-none w-52' />
                            </div>
                            <div>
                                <div className='flex justify-between'>
                                    <div className='flex mt-3 ml-10'>
                                        <CheckBoxOutlineBlankOutlinedIcon style={{ color: "lightgray" }} />
                                        <div className='text-gray-500 text-sm'> Keep me signed in</div>
                                    </div>
                                    <div className='mt-3 mr-10 text-sm text-blue-500'>
                                        Forgot Password?
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-evenly mr-8'>
                                <div className='ml-10 mt-8 w-40 h-10 bg-red-500 rounded-md'>
                                    <div className='text-center pt-2 text-white'>Login</div>
                                </div>
                                <div className=' mt-9'>or</div>
                                <div className=' mt-9 text-blue-500'>Request OTP</div>
                            </div>
                            <div className='ml-10 mt-8 text-gray-500'>
                                Don't have an account?<span className='text-blue-500'>Singup</span>
                            </div>
                        </div>

                        <div className='bg-blue-500'>
                        <div className='mt-20 ml-10 font-medium text-base text-white'>
                                India's biggest Online Store for moblies,
                                Fashion (Clothes/Shoes), Electronics, Home
                                Appliances, Books, Home, Furniture,
                                Grocery, Jewelry, Sporting goods.
                            </div>
                            <div>
                                <img className='h-80' src='https://innovativecodes.com/assets/Uploads/service-ecommerce-v2.png'/>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form