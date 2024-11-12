import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Flipkartheader from './Flipkartheader'
import Mobile2 from './Mobile2';
import Flipkartfooter from './Flipkartfooter';
import Flipkartfooter2 from './Flipkartfooter2';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
const style = {
  position: 'absolute',
  top: '65%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1200,
  bgcolor: 'background.paper',

};
function Mobile() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <div className='top-0 sticky z-10'>
        <Flipkartheader />
      </div>
      <div className='bg-gray-100'>
        <div className='flex justify-evenly h-[8vh] border shadow-lg bg-white'>
          <div className='flex justify-center items-center relative hover:cursor-pointer ' onMouseEnter={handleOpen}>
            Electronics
            <div className='absolute ml-24'>{open?<ArrowDropDownIcon />:<ArrowDropUpIcon/>}</div>
          </div>
          <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open}
                    onMouseOut={handleClose}
                    closeAfterTransition
                    slots={{ backdrop: Backdrop }}
                    slotProps={{
                        backdrop: {
                            timeout: 500,
                        },
                    }}

                >
                    <Fade in={open}>
                        <Box sx={style} className='!outline-none'>
                        <div>
            <div className='flex mx-4 h-[90vh]'>
                <div className='w-[20%] bg-white'>
                    <div className='flex flex-col pt-3 pl-5'>
                        <div className='font-semibold text-sm'>Mobiles<ArrowRightIcon style={{ color: "gray" }} /></div>
                        <div className='font-normal text-sm text-slate-400 pt-2'>
                            <div>Mi</div>
                            <div className='pt-2'>Realme</div>
                            <div className='pt-2'>Samsung</div>
                            <div className='pt-2'>Infinix</div>
                            <div className='pt-2'>OPPO</div>
                            <div className='pt-2'>Apple</div>
                            <div className='pt-2'>Vivo</div>
                            <div className='pt-2'>Honor</div>
                            <div className='pt-2'>Asus</div>
                            <div className='pt-2'>Poco X2</div>
                            <div className='pt-2'>realme Narzo 10</div>
                            <div className='pt-2'>Infinix Hot 9</div>
                            <div className='pt-2'>IQOO 3</div>
                            <div className='pt-2'>iphone SE</div>
                            <div className='pt-2'>Motorola razr</div>
                        </div>
                    </div>
                </div>
                <div className='w-[20%]'>
                    <div className='flex flex-col pt-3 pl-5'>
                        <div className='font-semibold text-sm'>Mobile Accessories<ArrowRightIcon style={{ color: "gray" }} /></div>
                        <div className='font-normal text-sm text-slate-400 pt-2'>
                            <div>Mi</div>
                            <div className='pt-2'>Realme</div>
                            <div className='pt-2'>Samsung</div>
                            <div className='pt-2'>Infinix</div>
                            <div className='pt-2'>OPPO</div>
                            <div className='pt-2'>Apple</div>
                            <div className='font-semibold text-sm pt-2 text-black'>Vivo<ArrowRightIcon style={{ color: "gray" }} /></div>
                            <div className='pt-2'>Honor</div>
                            <div className='pt-2'>Asus</div>
                            <div className='pt-2'>Poco X2</div>
                            <div className='font-semibold text-sm pt-2 text-black'>Realme Narxo 10<ArrowRightIcon style={{ color: "gray" }} /></div>
                            <div className='pt-2'>Infinix Hot 9</div>
                            <div className='pt-2'>IQOO 3</div>
                            <div className='pt-2'>iphone SE</div>
                            <div className='pt-2'>Motorola razr</div>
                        </div>
                    </div>
                </div>
                <div className='w-[20%] bg-white'>
                    <div className='flex flex-col pt-3 pl-5'>
                        <div className='font-semibold text-sm'>Laptops<ArrowRightIcon style={{ color: "gray" }} /></div>
                        <div className='font-normal text-sm text-slate-400 pt-2'>
                            <div>Mi</div>
                            <div className='font-semibold text-sm pt-2 text-black'>Desktop PCs<ArrowRightIcon style={{ color: "gray" }} /></div>
                            <div className='font-semibold text-sm pt-2 text-black'>Gaming & Accessories<ArrowRightIcon style={{ color: "gray" }} /></div>
                            <div className='font-semibold text-sm pt-2 text-black'>Computer Accessories<ArrowRightIcon style={{ color: "gray" }} /></div>
                            <div className='pt-2'>OPPO</div>
                            <div className='pt-2'>Apple</div>
                            <div className='font-semibold text-sm pt-2 text-black'>Vivo<ArrowRightIcon style={{ color: "gray" }} /></div>
                            <div className='pt-2'>Honor</div>
                            <div className='pt-2'>Asus</div>
                            <div className='pt-2'>Poco X2</div>
                            <div className='font-semibold text-sm pt-2 text-black'>Realme Narxo 10<ArrowRightIcon style={{ color: "gray" }} /></div>
                            <div className='pt-2'>Infinix Hot 9</div>
                            <div className='pt-2'>IQOO 3</div>
                        </div>
                    </div>
                </div>
                <div className='w-[20%]'>
                    <div className='flex flex-col pt-3 pl-5'>
                        <div className='font-normal text-sm text-gray-400'>Televisions</div>
                        <div className='font-normal text-sm text-slate-400 pt-2'>
                            <div>Mi</div>
                            <div className='font-semibold text-sm pt-2 text-black'>Speakers<ArrowRightIcon style={{ color: "gray" }} /></div>
                            <div className='font-semibold text-sm pt-2 text-black'>Gaming & Accessories<ArrowRightIcon style={{ color: "gray" }} /></div>
                            <div className='font-semibold text-sm pt-2 text-black'>Computer Accessories<ArrowRightIcon style={{ color: "gray" }} /></div>
                            <div className='pt-2'>OPPO</div>
                            <div className='pt-2'>Apple</div>
                            <div className='font-semibold text-sm pt-2 text-black'>Vivo<ArrowRightIcon style={{ color: "gray" }} /></div>
                            <div className='pt-2'>Honor</div>
                            <div className='pt-2'>Asus</div>
                            <div className='pt-2'>Poco X2</div>
                            <div className='font-semibold text-sm pt-2 text-black'>Realme Narxo 10<ArrowRightIcon style={{ color: "gray" }} /></div>
                            <div className='pt-2'>Infinix Hot 9</div>
                            <div className='pt-2'>IQOO 3</div>
                            <div className='pt-2'>Infinix Hot 9</div>
                            <div className='pt-2'>IQOO 3</div>
                            <div className='pt-2'>iphone SE</div>
                        </div>
                    </div>
                </div>
                <div className='w-[20%] bg-white'>
                    <div className='flex flex-col pt-3 pl-5'>
                        <div className='font-semibold text-sm'>Featured<ArrowRightIcon style={{ color: "gray" }} /></div>
                        <div className='font-normal text-sm text-slate-400 pt-2'>
                            <div>Mi</div>
                            <div className='pt-2'>Realme</div>
                            <div className='pt-2'>Samsung</div>
                            <div className='pt-2'>Infinix</div>
                            <div className='pt-2'>OPPO</div>
                            <div className='pt-2'>Apple</div>
                            <div className='pt-2'>Vivo</div>
                            <div className='pt-2'>Honor</div>
                            <div className='pt-2'>Asus</div>
                            <div className='pt-2'>Poco X2</div>
                            <div className='pt-2'>realme Narzo 10</div>
                            <div className='pt-2'>Infinix Hot 9</div>
                            <div className='pt-2'>IQOO 3</div>
                            <div className='pt-2'>iphone SE</div>
                            <div className='pt-2'>Motorola razr</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                        </Box>
                    </Fade>
                </Modal>
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
        <div>
          <div className='mt-5 font-semibold text-xl ml-2'>
            Mobile Phones
          </div>
          <div className='mt-2 font-semibold text-xs text-gray-500 ml-2'>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur facilis, commodi maxime amet odio mollitia dolorem nostrum repellendus reiciendis autem inventore molestiae eius sint voluptates pariatur dolor dignissimos laborum at non placeat velit aut totam! Unde possimus quisquam similique omnis a eos id commodi. Temporibus inventore corrupti, accusamus minima asperiores quaerat earum veritatis, praesentium enim officiis a impedit dolorum perferendis expedita? Sed expedita soluta cupiditate ipsa itaque repudiandae est hic esse odio rem alias dolores, obcaecati libero minus voluptates. Quo qui voluptas libero est? Laboriosam, dolorum accusamus. Maiores eos, temporibus officia et cum delectus qui magnam aliquam! Tenetur, itaque velit.</p>
          </div>
          <div className='mt-0 font-semibold text-xs text-blue-500 ml-2'>
            Phone 15 | iPhone 15 Plus | iPhone 15 Pro | iPhone 15 Pro Max | Vivo x 100 | OPPO Reno 11 | Xiaomi 14 CIVI | Infinix Note 40 5G | Pixel 7a | Moto Edge 40 | POCO C55 | Samsung Galaxy S24 5G | Motorola g04s
          </div>
          <div className='mt-2 font-semibold text-xs text-gray-500 ml-2'>
            Also Check out the <span className='text-blue-500'>Exchange offers on Mobile Phone.</span>
          </div>
        </div>
        <div>
          <img className='pr-6 pl-2 pt-2' src='https://rukminim2.flixcart.com/fk-p-flap/2000/2000/image/e2716386de95b1c2.jpg?q=50' />
        </div>
      </div>
      <div>
        <Mobile2 />
      </div>
      <div>
        <Flipkartfooter />
        <Flipkartfooter2 />
      </div>
    </div>
  )
}

export default Mobile