import React from 'react'
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
import MenuItem from '@mui/material/MenuItem';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import Drawer from './Drawer';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 765,
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
  return (
    <div className='flex h-16 items-center space-x-2 md:space-x-5 lg:space-x-8 md:sticky md:top-0 bg-white z-10 md:border' >

      <div className='md:hidden flex  ' >
        <Drawer/>
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
      <FaDownload className='w-6 h-6'/> 
      </div>

      <div className='flex items-center' >
        <MdOutlineAccountCircle className='h-6 w-10 ' />
        <span className='text-lg  ' onClick={handleOpen}>Login</span>
        <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    slots={{ backdrop: Backdrop }}
                    slotProps={{
                        backdrop: {
                            timeout: 500,
                        },
                    }}
                    sx={{
                        "& .MuiBackdrop-root":{
                            background:"transparent"
                        }
                    }}
                >
                    <Fade in={open}>
                        <Box sx={style} className='!outline-none !rounded-xl'>
                            <form className='h-[90vh] m-auto w-[60vw] shadow-lg rounded-xl'>
                                <div className='grid grid-cols-2 w-full h-full rounded-xl'>
                                    <div className='bg-white w-[30vw] rounded-l-xl'>
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
                                            Don't have an account?<span
                                                onClick={() => Navigate("login")}
                                                className='text-blue-500 hover:cursor-pointer'>Singup</span>
                                        </div>
                                    </div>

                                    <div className='bg-blue-500 rounded-r-xl'>
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
        <BsThreeDotsVertical  className='md:flex  md:ml-3  hidden' id="demo-positioned-button"
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
                        <MenuItem onClick={() => Navigate("notification")}><NotificationsNoneIcon/>Notification Preferences</MenuItem>
                        <MenuItem onClick={handleClose}><SupportAgentIcon/>24x7 Customer Care</MenuItem>
                        <MenuItem onClick={handleClose}><AutoAwesomeIcon/>Advertise</MenuItem>
                        <MenuItem onClick={handleClose}><FileDownloadOutlinedIcon/>Download App</MenuItem>
                    </Menu>
       
      </div>
    </div>
  )
}

export default Flipkartheader

