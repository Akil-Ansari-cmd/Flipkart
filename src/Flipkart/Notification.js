import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Divider from '@mui/material/Divider';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LockIcon from '@mui/icons-material/Lock';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Flipkartheader from './Flipkartheader';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import RedeemIcon from '@mui/icons-material/Redeem';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
function Notification() {
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
            <div className='bg-gray-100 h-screen w-screen'>
                <div className='flex'>
                    <div className='bg-white w-[30vw] ml-8 mt-5 h-[20vh]'>
                        <div className='flex'>
                            <div className='mt-4 ml-8'><div><NotificationsIcon style={{ color: "blue", }} /></div></div>
                            <div className='mt-5 ml-3 font-semibold text-medium text-gray-400'>NOTIFICATION PREFERENCES</div>
                        </div>
                        <div className='ml-20 mt-8 text-sm'>Desktop Notifications</div>
                    </div>
                    <div className='bg-white ml-5 mt-5 w-[40vw] h-[90vh]'>
                        <div className='mt-6 ml-6'>
                            <div className='text-lg font-semibold'>Desktop Notifications</div>
                            <div className='flex flex-col'>
                                <div className='flex '>
                                    <div className='mt-6'><CheckBoxIcon style={{ color: "lightskyblue", fontSize: "20px" }} /></div>
                                    <div className='ml-3 mt-4'>
                                        <div className='flex flex-col text-sm relative w-96'>
                                            <div className='text-gray-400'>My Orders</div>
                                            <div className='text-gray-400 text-xs mt-1'>Latest updates on your orders</div>
                                            <div className='absolute ml-80 mt-3'><KeyboardArrowDownIcon style={{ color: "gray" }} /></div>
                                            <div className='mt-4 mr-4'><Divider /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex '>
                                    <div className='mt-6'><CheckBoxIcon style={{ color: "lightskyblue", fontSize: "20px" }} /></div>
                                    <div className='ml-3 mt-4'>
                                        <div className='flex flex-col text-sm relative w-96'>
                                            <div className='text-gray-400'>My Orders</div>
                                            <div className='text-gray-400 text-xs mt-1'>Latest updates on your orders</div>
                                            <div className='absolute ml-80 mt-3'><KeyboardArrowDownIcon style={{ color: "gray" }} /></div>
                                            <div className='mt-4 mr-4'><Divider /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex '>
                                    <div className='mt-6'><CheckBoxIcon style={{ color: "lightskyblue", fontSize: "20px" }} /></div>
                                    <div className='ml-3 mt-4'>
                                        <div className='flex flex-col text-sm relative w-96'>
                                            <div className='text-gray-400'>My Orders</div>
                                            <div className='text-gray-400 text-xs mt-1'>Latest updates on your orders</div>
                                            <div className='absolute ml-80 mt-3'><KeyboardArrowDownIcon style={{ color: "gray" }} /></div>
                                            <div className='mt-4 mr-4'><Divider /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex '>
                                    <div className='mt-6'><CheckBoxIcon style={{ color: "lightskyblue", fontSize: "20px" }} /></div>
                                    <div className='ml-3 mt-4'>
                                        <div className='flex flex-col text-sm relative w-96'>
                                            <div className='text-gray-400'>My Orders</div>
                                            <div className='text-gray-400 text-xs mt-1'>Latest updates on your orders</div>
                                            <div className='absolute ml-80 mt-3'><KeyboardArrowDownIcon style={{ color: "gray" }} /></div>
                                            <div className='mt-4 mr-4'><Divider /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex '>
                                    <div className='mt-6'><CheckBoxIcon style={{ color: "lightskyblue", fontSize: "20px" }} /></div>
                                    <div className='ml-3 mt-4'>
                                        <div className='flex flex-col text-sm relative w-96'>
                                            <div className='text-gray-400'>My Orders</div>
                                            <div className='text-gray-400 text-xs mt-1'>Latest updates on your orders</div>
                                            <div className='absolute ml-80 mt-3'><KeyboardArrowDownIcon style={{ color: "gray" }} /></div>
                                            <div className='mt-4 mr-4'><Divider /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex '>
                                    <div className='mt-6'><CheckBoxIcon style={{ color: "lightskyblue", fontSize: "20px" }} /></div>
                                    <div className='ml-3 mt-4'>
                                        <div className='flex flex-col text-sm relative w-96'>
                                            <div className='text-gray-400'>My Orders</div>
                                            <div className='text-gray-400 text-xs mt-1'>Latest updates on your orders</div>
                                            <div className='absolute ml-80 mt-3'><KeyboardArrowDownIcon style={{ color: "gray" }} /></div>
                                            <div className='mt-4 mr-4'><Divider /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='bg-white mr-8 mt-5 w-[40vw]'>
                        <div className=''>
                            <div className='relative'>
                                <div className='ml-40 mt-12'>
                                    <img className='h-24' src='https://rukminim2.flixcart.com/www/132/132/promos/15/02/2019/70f33ee6-0763-4e66-adca-8b2fc2a8af9f.png?q=100' />
                                </div>
                                <div className='absolute top-0 ml-20'>
                                    <img className='h-24' src='https://rukminim2.flixcart.com/www/132/132/promos/15/02/2019/b2716b3f-3f6b-458f-ba09-3705401d2c18.png?q=100' />
                                </div>
                                <div className='absolute top-0 mr-20 right-0'>
                                    <img className='h-24' src='https://rukminim2.flixcart.com/www/132/132/promos/15/02/2019/8cb2568b-7940-4634-9e30-998733189fb4.png?q=100' />
                                </div>
                            </div>
                            <div>
                                <img className='h-20 ml-44' src='https://rukminim2.flixcart.com/www/132/132/promos/14/02/2019/611123aa-1534-4c7d-8537-85ad9f9e8f0b.png?q=100' />
                            </div>
                            <div className='relative'>
                                <div className='absolute top-0 ml-24'>
                                    <img className='h-24' src='https://rukminim2.flixcart.com/www/132/132/promos/15/02/2019/12722eb2-b1a3-4e2e-96c9-1b663ed41bcf.png?q=100' />
                                </div>
                                <div className='absolute ml-44 mt-8'>
                                    <img className='h-24' src='https://rukminim2.flixcart.com/www/132/132/promos/15/02/2019/c9ba4d44-5c23-4f0f-ae41-aec618a3326b.png?q=100' />
                                </div>
                                <div className='absolute top-0 right-0 mr-20'>
                                    <img className='h-24' src='https://rukminim2.flixcart.com/www/132/132/promos/15/02/2019/0a035c15-5aa5-411e-8622-23908c9fea87.png?q=100' />
                                </div>
                            </div>
                        </div>
                        <div className='mt-36 ml-20 text-red-500 font-semibold'>
                            <div className='text-xs ml-4'>Oops! You are missing out on a lot of important </div>
                            <div className='text-xs'>notifications. Please switch it on from Browser Settings.</div>
                        </div>
                        <div className='ml-44 mt-5 text-gray-500 text-xs font-semibold'>
                            How to unblock
                        </div>
                        <div className='flex ml-36'>
                            <div className='mt-0'><LockIcon style={{ fontSize: "18px", color: "green" }} /></div>
                            <div className='font-semibold text-xs mt-2'><ArrowForwardIosIcon style={{ fontSize: "12px" }} />Notifications</div>
                            <div className='font-semibold text-xs mt-2'><ArrowForwardIosIcon style={{ fontSize: "12px" }}></ArrowForwardIosIcon>Allow</div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            <div>
            <div>
                <div className='flex'>
                    <div className="py-5  bg-black">
                        <div className='flex w-[55vw] h-[40vh] border-r-2'>
                            <div className='flex flex-col'>
                                <div className='ml-16 mt-10 text-gray-300 font-normal text-xs'>
                                    ABOUT
                                </div>
                                <div className='ml-16 mt-2 font-bold text-sm text-white'>Contact Us</div>
                                <div className='ml-16 font-bold text-xs text-white'>About Us</div>
                                <div className='ml-16 font-bold text-xs text-white'>Careers</div>
                                <div className='ml-16 font-bold text-xs text-white'>Flipkart Stories</div>
                                <div className='ml-16 font-bold text-xs text-white'>Press</div>
                                <div className='ml-16 font-bold text-xs text-white'>Corporate Information</div>
                            </div>
                            <div className='flex flex-col'>
                                <div className='ml-8 mt-10 text-gray-300 font-normal text-xs'>
                                    GROUP COMPANIES
                                </div>
                                <div className='ml-8 mt-2 font-bold text-xs text-white'>Myntra</div>
                                <div className='ml-8 font-bold text-xs text-white'>Cleartrip</div>
                                <div className='ml-8 font-bold text-xs text-white'>Shopsy</div>
                            </div>
                            <div className='flex flex-col'>
                                <div className='ml-10 mt-10 text-gray-300 font-normal text-xs'>
                                    HELP
                                </div>
                                <div className='ml-10 mt-2 font-bold text-xs text-white'>Payment</div>
                                <div className='ml-10 font-bold text-xs text-white'>Shipping</div>
                                <div className='ml-10 font-bold text-xs text-white'>Cancellation &</div>
                                <div className='ml-10 font-bold text-xs text-white'>returns</div>
                                <div className='ml-10 font-bold text-xs text-white'>FAQ</div>
                            </div>
                            <div className='flex flex-col'>
                                <div className='ml-16 mt-10 text-gray-300 font-normal text-xs'>
                                    CONSUMER POLICY
                                </div>
                                <div className='ml-16 mt-2 font-bold text-xs text-white'>Cancellation &</div>
                                <div className='ml-16 font-bold text-xs text-white'>Returns</div>
                                <div className='ml-16 font-bold text-xs text-white'>Terms of Use</div>
                                <div className='ml-16 font-bold text-xs text-white'>Security</div>
                                <div className='ml-16 font-bold text-xs text-white'>Privacy</div>
                                <div className='ml-16 font-bold text-xs text-white'>Sitemap</div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-black w-[45vw] h-[50vh]'>
                        <div className='flex'>
                            <div className='flex flex-col'>
                                <div className='ml-16 mt-14 text-gray-300 font-normal text-xs'>Mail Us</div>
                                <div className='ml-16 mt-2 font-bold text-xs text-white'>Flipkart Internet Private Limited,</div>
                                <div className='ml-16 mt-2 font-bold text-xs text-white'>Lorem ipsum dolor sit amet.</div>
                                <div className='ml-16 mt-2 font-bold text-xs text-white'>Lorem ipsum dolor sit.</div>
                                <div className='ml-16 mt-2 font-bold text-xs text-white'>Lorem, ipsum.</div>
                                <div className='ml-16 mt-2 font-bold text-xs text-white'> Lorem, ipsum.</div>
                                <div className='ml-16 mt-4 text-gray-300 font-normal text-xs'>
                                    Social:
                                </div>
                                <div className='flex text-gray-300 ml-16 mt-2 gap-3'>
                                    <div>
                                        <FacebookOutlinedIcon />
                                    </div>
                                    <div>
                                        <XIcon />
                                    </div>
                                    <div>
                                        <YouTubeIcon />
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <div className='ml-16 mt-14 text-gray-300 font-normal text-xs'>Mail Us</div>
                                <div className='ml-16 mt-2 font-bold text-xs text-white'>Flipkart Internet Private Limited,</div>
                                <div className='ml-16 mt-2 font-bold text-xs text-white'>Lorem ipsum dolor sit amet.</div>
                                <div className='ml-16 mt-2 font-bold text-xs text-white'>Lorem ipsum dolor sit.</div>
                                <div className='ml-16 mt-2 font-bold text-xs text-white'>Lorem, ipsum.</div>
                                <div className='ml-16 mt-2 font-bold text-xs text-white'> Lorem, ipsum.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Divider />
            </div>
            <div>
                <div className='flex bg-black h-[12vh]'>
                    <div className='flex items-center mx-14 gap-2'>
                        <div className='text-yellow-500'><StorefrontIcon style={{ fontSize: '12px' }} /></div>
                        <div className='text-sm text-white'>Become a Seller</div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='text-yellow-500'><AutoAwesomeIcon style={{ fontSize: '12px' }} /></div>
                        <div className='text-sm font-normal text-white'>Advertise</div>
                    </div>
                    <div className='flex items-center mx-14 gap-2'>
                        <div className='text-yellow-500'><RedeemIcon style={{ fontSize: '12px' }} /></div>
                        <div className='text-sm font-normal text-white'>Gifts Cards</div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='text-yellow-500'><HelpOutlineOutlinedIcon style={{ fontSize: '12px' }} /></div>
                        <div className='text-sm font-normal text-white'>Help Center</div>
                    </div>
                    <div className='flex items-center mx-14 gap-2'>
                        <div className='text-sm font-normal text-white'>@Flipkart.com</div>
                    </div>
                    <div className='flex items-center'>
                        <img src='https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg' />
                    </div>
                </div>
            </div>
        </div>
            </div>
        </div>
    )
}

export default Notification
