import React, { useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import ReplyIcon from '@mui/icons-material/Reply';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import Divider from '@mui/material/Divider';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Product2 from './Product2';
import Flipkartfooter from './Flipkartfooter';
import Flipkartfooter2 from './Flipkartfooter2';
import Flipkartheader from './Flipkartheader';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'; 
import FavoriteIcon from '@mui/icons-material/Favorite'; 
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
const Product = () => {
    const [color, setColor] = useState(false)

    
    
    return (
        <div>
        <div className='sticky top-0 z-50'>
            <Flipkartheader/>
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
            <div className='flex relative'>
                <div className='w-[40%] h-screen self-start sticky top-0'>
                    <div onClick={() => setColor(!color)} 
                    className=' border border-slate-200 m-12 mr-8 relative'>
                        <img className='ml-12 my-5' src='https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/4/f/r/-original-imah5ywfzzjzfkcn.jpeg?q=70&crop=false' />
                    <div className={`absolute top-3 w-8 right-7 bg-white shadow-lg rounded-full p-2 ${color?"text-red-500":"text-gray-200"}`}  ><MdFavorite  className=''/></div>
                    </div>
                    <div className='flex gap-2 ml-16 h-screen  relative top-0'>
                        <div className=' w-48 h-14 pt-4 pl-14 bg-orange-400 text-white font-semibold'>ADD TO CART
                            <div className='absolute top-4 left-7'><ShoppingCartIcon style={{ color: "white" }} /></div>
                        </div>
                        <div className=' w-48 h-14 pt-4 pl-16 bg-red-400 text-white font-semibold'>BUY NOW
                            <div className='absolute top-4 left-60'><BoltOutlinedIcon style={{ color: "white" }} /></div>
                        </div>
                    </div>
                </div>
                <div className='flex-1 w-[60%] mt-12'>
                    <div className='flex w-[95%] gap-3 border border-slate-200 p-2 bg-yellow-50'>
                        <div>
                            <img className='h-10' src='https://rukminim2.flixcart.com/fk-p-flap/92/92/image/c6ddf0e744dee27f.jpg?q=90' />
                        </div>
                        <div className='pt-2 font-semibold'>Big Diwali Sale Starts in11 hrs : 10 mins : 33 secs</div>
                    </div>
                    <div className='flex mt-4 relative text-gray-400'>
                        <div className='text-sm'>Home
                            <div className='absolute top-0 left-12'><ArrowForwardIosOutlinedIcon style={{ fontSize: "10px" }} /></div>
                        </div>
                        <div className='text-sm ml-8 relative'>Mobile & A...
                            <div className='absolute top-0 left-24'><ArrowForwardIosOutlinedIcon style={{ fontSize: "10px" }} /></div>
                        </div>
                        <div className='text-sm ml-8 relative'>Mobiles
                            <div className='absolute top-0 left-16'><ArrowForwardIosOutlinedIcon style={{ fontSize: "10px" }} /></div>
                        </div>
                        <div className='text-sm ml-8 relative'>SAMSUNG...
                            <div className='absolute top-0 left-24'><ArrowForwardIosOutlinedIcon style={{ fontSize: "10px" }} /></div>
                        </div>
                        <div className='flex ml-52 gap-14'>
                            <div className='relative gap-3 text-sm'>
                                Compare
                                <div className='top-0 absolute right-16'><CheckBoxOutlineBlankOutlinedIcon style={{ color: "gray", fontSize: "18px" }} /></div>
                            </div>
                            <div className='relative text-sm'>
                                Share
                                <div className='top-0 absolute right-10'><ReplyIcon style={{ color: "gray", fontSize: "20px" }} /></div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-2 text-xl'>
                        SAMSUNG Galaxy S23 FE (Purple, 256 GB)  (16 GB RAM) <span className='text-gray-400'>#JustHere</span>
                    </div>
                    <div className='flex'>
                        <div className='border w-14 h-7 bg-green-600 rounded-lg mt-2 font-semibold'>
                            <div className='relative text-sm pt-0.5 pl-3 text-white'>4.3
                                <div className='absolute top-0 left-8'><StarBorderIcon style={{ fontSize: "15px" }} /></div>
                            </div>
                        </div>
                        <div className='mt-2 ml-4 font-semibold text-gray-400'>43,033 Ratings & 2,249 Reviews</div>
                        <div className='ml-4 mt-3'><img className='h-5 w-20' src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png' /></div>
                    </div>
                    <div className='font-semibold text-sm mt-2 text-green-700'>Extra ₹52000 off</div>
                    <div className='flex gap-3 mt-1'>
                        <div className='text-2xl font-semibold'>₹32,999</div>
                        <div className='mt-1.5 line-through'>₹84,999</div>
                        <div className='mt-1.5 font-semibold text-green-700'>61% off</div>
                    </div>
                    <div className='flex flex-col mt-2'>
                        <div className='font-semibold'>Available offers</div>
                        <div className='flex mt-2 text-sm gap-2'>
                            <div className='mt-1'><img className='h-5' src='https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90' /></div>
                            <div><span className='font-semibold mt-1'>Bank Offer</span> 5% Unlimited Cashback on Flipkart Axis Bank Credit Card <span className='text-blue-500 font-semibold'>T&C</span></div>
                        </div>
                        <div className='flex mt-2 text-sm gap-2'>
                            <div className='mt-1'><img className='h-5' src='https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90' /></div>
                            <div><span className='font-semibold mt-1'>Special Price</span> Get extra ₹52000 off (price inclusive of cashback/coupon)  <span className='text-blue-500 font-semibold'>T&C</span></div>
                        </div>
                        <div className='flex mt-2 text-sm gap-2'>
                            <div className='mt-1'><img className='h-5' src='https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90' /></div>
                            <div><span className='font-semibold mt-1'>Freebie</span> Spotify Premium - 12M at ₹699  <span className='text-blue-500 font-semibold'>T&C</span></div>
                        </div>
                        <div className='flex mt-2 text-sm gap-2'>
                            <div className='mt-1'><img className='h-5' src='https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90' /></div>
                            <div className='mt-0.5'>₹1000 off of next purchase of Ref or TV  <span className='text-blue-500 font-semibold'>T&C</span></div>
                        </div>
                        <div className='font-semibold mt-2 text-sm text-blue-700'>View 11 more offers</div>
                    </div>
                    <div className='flex flex-col mt-5 gap-3 border border-gray-300 w-[60%]'>
                        <div className='flex gap-3 ml-5 mt-5'>
                            <div ml-8><RadioButtonUncheckedIcon style={{ fontSize: "18px" }} /></div>
                            <div>Buy without Exchange</div>
                            <div className='ml-36 font-semibold'>₹32,999</div>
                        </div>
                        <div className='w-full'>
                            <Divider />
                        </div>
                        <div className='flex gap-4 ml-5 mb-5'>
                            <div><RadioButtonUncheckedIcon style={{ fontSize: "18px" }} /></div>
                            <div>Buy with Exchange</div>
                            <div className='ml-24 font-semibold'>up to ₹30,400 off</div>
                        </div>
                    </div>
                    <div className='flex mt-8'>
                        <div className='border p-1'>
                            <img className='h-4 w-20' src='https://rukminim2.flixcart.com/image/160/160/prod-fk-cms-brand-images/9a95c8afa921a5b7f48302b1cb9d994a0a5e9f5b718ebab4affbae158c9a0068.jpg?q=90' />
                        </div>
                        <div className='text-sm ml-8'> 1 Year Manufacturer Warranty for Device and 6 Months for In-Box Accessories  <span className='font-semibold text-blue-600'>Know More</span></div>
                    </div>
                    <div className='flex mt-5'>
                        <div className='font-semibold text-gray-400'>Color</div>
                        <div className='ml-20 border border-gray-400 px-2'><img className='h-14 w-10' src='https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/x/k/h/-original-imah5ywff9rr76zh.jpeg?q=70&crop=false' /></div>
                        <div className='ml-3 border border-gray-400 px-2'><img className='h-14 w-10' src='https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/4/f/r/-original-imah5ywfzzjzfkcn.jpeg?q=70&crop=false' /></div>
                        <div className='ml-3 border border-gray-400 px-2'><img className='h-14 w-10' src='https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/8/v/0/-original-imah5ywfebrs9bfg.jpeg?q=70&crop=false' /></div>
                        <div className='font-semibold text-gray-400 ml-16'>Storage</div>
                        <div className='flex ml-16 gap-5'>
                            <div className='font-semibold border border-slate-200 w-16 h-10 text-center pt-2'>128 GB</div>
                            <div className='font-semibold border border-slate-200 w-16 h-10 text-center pt-2'>256 GB</div>
                        </div>
                    </div>
                    <div className='flex mt-7'>
                        <div className='font-semibold text-gray-400'>Delivery</div>
                        <div className='flex border-b-2 w-52 ml-16 border-blue-700'>
                            <div className=' font-semibold relative'>
                                226016
                                <div className='absolute top-0 right-16'><LocationOnIcon style={{ fontSize: "18px", color: "blue" }} /></div>
                            </div>
                            <div className='font-semibold ml-24 text-blue-700'>Change</div>
                        </div>
                    </div>
                    <div className='flex ml-24 mt-2'>
                        <div className='text-sm font-semibold mt-1'>Delivery by23 Oct, Wednesday</div>
                        <div className='flex border-l-2 ml-3'>
                            <div className='ml-3 font-semibold text-green-700 text-base'>Free <span className='line-through text-gray-500'>₹40</span></div>
                        </div>
                    </div>
                    <div className='flex ml-24 mt-1 font-semibold text-blue-700'>View Details</div>
                    <div className='flex mt-7'>
                        <div className='font-semibold text-gray-400'>Highlights</div>
                        <div className='flex flex-col ml-9'>
                            <div className='flex flex-col relative'>
                                <div className='ml-9 text-sm'>4 GB RAM | 64 GB ROM |
                                    <div className='absolute top-0 left-5'><FiberManualRecordIcon style={{ fontSize: "10px", color: "gray" }} /></div>
                                </div>
                                <div className='ml-9 text-sm'>Expandable Upto 1 TB</div>
                            </div>
                            <div className='flex flex-col relative mt-2'>
                                <div className='ml-9 text-sm'>16.76 cm (6.6 inch) Full HD+
                                    <div className='absolute top-0 left-5'><FiberManualRecordIcon style={{ fontSize: "10px", color: "gray" }} /></div>
                                </div>
                                <div className='ml-9 text-sm'>Display</div>
                            </div>
                            <div className='flex flex-col relative mt-2'>
                                <div className='ml-9 text-sm'>50MP + 2MP + 2MP | 13MP Front
                                    <div className='absolute top-0 left-5'><FiberManualRecordIcon style={{ fontSize: "10px", color: "gray" }} /></div>
                                </div>
                                <div className='ml-9 text-sm'>Camera</div>
                            </div>
                            <div className='flex flex-col relative mt-2'>
                                <div className='ml-9 text-sm'>5000 mAh Lithium Ion Battery
                                    <div className='absolute top-0 left-5'><FiberManualRecordIcon style={{ fontSize: "10px", color: "gray" }} /></div>
                                </div>
                            </div>
                            <div className='flex flex-col relative mt-2'>
                                <div className='ml-9 text-sm'>Exynos 1330 Processor
                                    <div className='absolute top-0 left-5'><FiberManualRecordIcon style={{ fontSize: "10px", color: "gray" }} /></div>
                                </div>
                            </div>
                        </div>
                        <div className='flex ml-12'>
                            <div className='flex flex-col'>
                                <div className='font-semibold text-gray-400'>Easy Payment</div>
                                <div className='font-semibold text-gray-400'>Options</div>
                            </div>
                            <div className='flex flex-col'>
                                <div className='flex flex-col relative'>
                                    <div className='ml-9 text-sm'>No cost EMI starting
                                        <div className='absolute top-0 left-5'><FiberManualRecordIcon style={{ fontSize: "10px", color: "gray" }} /></div>
                                    </div>
                                </div>
                                <div className='flex flex-col relative my-3'>
                                    <div className='ml-9 text-sm'>Cash on Delivery
                                        <div className='absolute top-0 left-5'><FiberManualRecordIcon style={{ fontSize: "10px", color: "gray" }} /></div>
                                    </div>
                                </div>
                                <div className='flex flex-col relative'>
                                    <div className='ml-9 text-sm'>Net banking & Credit/ Debit
                                        <div className='absolute top-0 left-5'><FiberManualRecordIcon style={{ fontSize: "10px", color: "gray" }} /></div>
                                    </div>
                                </div>
                                <div className='flex ml-8 text-sm mt-1 font-semibold text-blue-700'>View Details</div>
                            </div>
                        </div>
                    </div>
                    <div className='flex mt-5'>
                        <img className='h-24' src='https://rukminim2.flixcart.com/lockin/400/400/images/CCO__PP_2019-07-14.png?q=50' />
                    </div>
                    <div className='flex flex-col  border border-gray-200'>
                        <div className='ml-8 p-2 font-semibold text-xl'>Protect your product</div>
                        <div><Divider /></div>
                        <div className='flex relative'>
                            <div className='left-10 absolute top-5'><CheckBoxIcon style={{ color: "blue" }} /></div>
                            <div className='ml-20 mt-8 '>
                                <img className='h-32' src='https://rukminim2.flixcart.com/image/312/312/xif0q/damage-protection-plan/d/0/h/-original-imagksgfefawgqfs.jpeg?q=70' />

                            </div>
                            <div>
                                <div className='flex flex-col mt-8 ml-3'>
                                    <div className='font-semibold'>Complete Mobile Protection</div>
                                    <div className='text-sm mt-3'>
                                        Get brand authorised repairs for all phone damages with free pickup and drop.
                                    </div>
                                    <div className='text-sm'>we can't repair it, we will replace it!</div>
                                    <div className='text-sm text-gray-500 mt-1'>Save more than Rs 15,000 in repairs</div>
                                </div>
                                <div>
                                    <div className='flex mt-5 ml-3 gap-3'>
                                        <div className='font-semibold'>₹1,699</div>
                                        <div className='text-xs mt-1 line-through text-gray-500'>₹2,199</div>
                                        <div className='text-sm text-green-700 mt-0.5'>22% off</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='pt-3'><Divider /></div>
                        <div className='flex relative'>
                            <div className='left-10 absolute top-5'><CheckBoxIcon style={{ color: "blue" }} /></div>
                            <div className='ml-20 mt-14'>
                                <img className='h-20' src='https://rukminim2.flixcart.com/image/312/312/xif0q/extended-warranty-new/0/f/n/-original-imaggnvzhxwh7ssm.jpeg?q=70' />
                            </div>
                            <div>
                                <div className='flex flex-col mt-8 ml-3'>
                                    <div className='font-semibold'>Complete Mobile Protection</div>
                                    <div className='text-sm mt-3'>
                                        Get brand authorised repairs for all phone damages with free pickup and drop.
                                    </div>
                                    <div className='text-sm'>we can't repair it, we will replace it!</div>
                                    <div className='text-sm text-gray-500 mt-1'>Save more than Rs 15,000 in repairs</div>
                                </div>
                                <div>
                                    <div className='flex mt-5 ml-3 gap-3'>
                                        <div className='font-semibold'>₹1,699</div>
                                        <div className='text-xs mt-1 line-through text-gray-500'>₹2,199</div>
                                        <div className='text-sm text-green-700 mt-0.5'>22% off</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className='relative'>
                <Product2 />
                
            </div>
            <Flipkartfooter />
            <Flipkartfooter2/>
        </div>
    )
}

export default Product
