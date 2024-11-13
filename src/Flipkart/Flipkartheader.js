import React, { useState } from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineAccountCircle } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import { AiTwotoneShop } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaDownload } from "react-icons/fa";
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import { useNavigate } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import toast, { Toaster } from 'react-hot-toast';
import MenuItem from '@mui/material/MenuItem';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { RxCross1 } from "react-icons/rx";
import Drawer from './Drawer';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',

};



const Flipkartheader = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const Navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const openVertex = Boolean(anchorEl);
    const handleClick = (e) => {
        setAnchorEl(e);
    };
    const handleVertex = () => {
        setAnchorEl(null);
    };
    const [data, setData] = useState({
        username: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setData(() => ({
            ...data,
            [name]: value,
        }))
    }
    const handleSubmit = (e) =>{
        e.preventDefault();

        fetch('https://dummyjson.com/auth/login',{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                username:data.username,
                password:data.password,
                expiresInMins:30,
            })
        })
        .then(res=>res.json())
        .then(data=>{setData(data)
            if(data.accessToken){
                localStorage.setItem("token",data.accessToken)
                toast.success("Form Submitted")
            }else{
                toast.error(data.message);
            }
        })
        .catch((e) => {
            console.log(e);
        })
    }




    return (
        <div className='flex h-16 items-center space-x-2 md:space-x-5 lg:space-x-8 md:sticky md:top-0 bg-white z-10 md:border' >

            <div className='md:hidden flex  ' >
                <Drawer />
            </div>
            <div>
                <img src='https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg' alt='Error' className='md:w-40 md:h-24 w-48 h-32 md:ml-0 -ml-7'
                />
            </div>

            <div className='w-[40%] relative md:flex hidden '>
                <input type='text' placeholder="Search For Products, Brands & More" className='outline-none rounded-md w-[100%] bg-slate-100 p-2 pl-8' />
                <GoSearch className='absolute top-3 left-2' />
            </div>

            <div className='md:hidden flex pl-8'>
                <FaDownload className='w-6 h-6' />
            </div>

            <div className='flex items-center' >
                <MdOutlineAccountCircle className='h-6 w-10 ' />
                <span className='text-lg  ' onClick={handleOpen}>{localStorage.getItem("token")?<span className='text-base'>Logout</span>:<span className='text-base'>Login</span>}</span>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open}
                   
                    closeAfterTransition
                    slots={{ backdrop: Backdrop }}
                    slotProps={{
                        backdrop: {
                            timeout: 500,
                        },
                    }}
                    sx={{
                        "& .MuiBackdrop-root": {
                            background: "transparent"
                        }
                    }}
                >
                    <Fade in={open}>
                        <Box className='!outline-none !rounded-xl lg:w-[65%] !absolute lg:!top-[10%] lg:!left-[18%] !top-5 md:!right-16 left-5 !right-5 md:!left-28 '>
                            <form onSubmit={handleSubmit} className='relative lg:m-auto  lg:w-full   shadow-lg rounded-xl'>
                            <RxCross1  onClick={handleClose} className='absolute right-4 text-xl top-2'/>
                                <div className='grid grid-cols-1 lg:grid-cols-2 h-[50%] lg:h-full rounded-xl'>
                                    <div className='bg-white  rounded-l-xl'>
                                        <div className='lg:ml-10 font-semibold'>
                                            <img className="h-36 md:ml-10 ml-10 text-white" src='https://iconape.com/wp-content/png_logo_vector/flipkart.png' />
                                        </div>
                                        <div className='ml-10 font-semibold text-lg'>
                                            Get access to your Orders, Wishlist and Recommendations
                                        </div>
                                        <div className='ml-10 font-medium text-base text-gray-400'>
                                            Login to your Account
                                        </div>
                                        <div className='mt-10 ml-10 border-b w-80'>
                                            <input type='text' name="username" value={data.username} onChange={handleChange} placeholder='Enter Email/Mobile Number' className='outline-none w-52' />
                                        </div>
                                        <div className='mt-5 ml-10 border-b w-80'>
                                            <input type='text' placeholder='Enter Password' name="password" value={data.password} onChange={handleChange} className='outline-none w-52' />
                                        </div>
                                        <div>
                                            <div className='flex justify-between'>
                                                <div className='flex mt-3 ml-10'>
                                                    <CheckBoxOutlineBlankOutlinedIcon style={{ color: "lightgray" }} />
                                                    <div className='text-gray-500 text-sm'> Keep me signed in</div>
                                                </div>
                                                {/* <div className='mt-3 mr-10 text-sm text-blue-500'>
                                                    Forgot Password?
                                                </div> */}
                                            </div>
                                        </div>
                                        <div className='flex mr-8'>
                                            <div className='md:ml-10 ml-28 mt-8 w-40 h-10 bg-red-500 rounded-md'>
                                                <button type='submit' className='ml-16 pt-2  text-white'>Login</button>
                                            </div>
                                            {/* <div className=' mt-9'>or</div>
                                            <div className=' mt-9 text-blue-500'>Request OTP</div> */}
                                        </div>
                                        <div className='ml-10 mt-8 text-gray-500'>
                                            Don't have an account?<span
                                                onClick={() => Navigate("login")}
                                                className='text-blue-500 hover:cursor-pointer'>Singup</span>
                                        </div>
                                    </div>

                                    <div className='bg-blue-500 rounded-r-xl  lg:block hidden '>
                                        <div className='mt-20 ml-10 font-medium text-base text-white'>
                                            India's biggest Online Store for moblies,
                                            Fashion (Clothes/Shoes), Electronics, Home
                                            Appliances, Books, Home, Furniture,
                                            Grocery, Jewelry, Sporting goods.
                                        </div>
                                        <div>
                                            <img className='h-80' src='https://innovativecodes.com/assets/Uploads/service-ecommerce-v2.png' />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </Box>
                    </Fade>
                </Modal>
                <IoMdArrowDropdown className='ml-2 lg:flex md:flex hidden' />
            </div>


            <div className='flex items-center'>
                <MdOutlineShoppingCart className='h-6 w-10 md:ml-3 ' />
                <span className='xl:flex  hidden text-lg '>Cart</span>
            </div>

            <div className='flex items-center'>
                <AiTwotoneShop className='h-6 w-10 lg:flex md:flex hidden' />
                <span className='xl:flex hidden text-lg' >Become a Seller</span>
            </div>

            <div>
                <BsThreeDotsVertical className='md:flex  md:ml-3  hidden' id="demo-positioned-button"
                    aria-controls={open ? 'demo-positioned-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick} />
                <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    anchorEl={anchorEl}
                    open={openVertex}
                    onClose={handleVertex}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                >
                    <MenuItem onClick={() => Navigate("notification")}><NotificationsNoneIcon />Notification Preferences</MenuItem>
                    <MenuItem onClick={handleClose}><SupportAgentIcon />24x7 Customer Care</MenuItem>
                    <MenuItem onClick={handleClose}><AutoAwesomeIcon />Advertise</MenuItem>
                    <MenuItem onClick={handleClose}><FileDownloadOutlinedIcon />Download App</MenuItem>
                </Menu>

            </div>
        </div>
    )
}

export default Flipkartheader

