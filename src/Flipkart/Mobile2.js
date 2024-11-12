import React from 'react';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import Divider from '@mui/material/Divider';
// import Slider from '@mui/material/Slider';
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Mobilefooter from './Mobilefooter';
import { useNavigate } from 'react-router-dom';
function Mobile2() {
    const Navigate = useNavigate();
    return (
        <div>
            <div className='bg-gray-200'>
                <div className='relative'>
                    <img className='pr-6 pl-2 pt-2 h-[40vh]  ' src='https://rukminim2.flixcart.com/fk-p-flap/2000/2000/image/ae31cd0f19fcca0d.jpg?q=50' />
                    <div className='bg-white absolute w-14 h-24 shadow-lg rounded-r-md top-[30%] left-0'>
                        <div className='mt-8 mx-5 text-2xl'>
                            <ArrowBackIosIcon />
                        </div>
                    </div>
                    <div>
                        <div className='absolute rounded-l-md right-5 bg-white w-14 shadow-lg h-24 top-[30%]'>
                            <div className='mt-8 mx-3'>
                                <ArrowForwardIosIcon /></div>
                        </div>
                    </div>
                </div>
                <div className='grid'>
                    <div className='flex gap-0'>
                        <div className='pr-2 pl-2 pt-2'>
                            <img src='https://rukminim2.flixcart.com/fk-p-flap/400/400/image/1495d08460d39d7b.jpg?q=50' />
                        </div>
                        <div className='pr-2 pl-2 pt-2'>
                            <img src='https://rukminim2.flixcart.com/fk-p-flap/400/400/image/b5b9bc27e0ac6fe5.jpg?q=50' />
                        </div>
                        <div className='pr-2 pl-2 pt-2'>
                            <img src='https://rukminim2.flixcart.com/fk-p-flap/400/400/image/5370670d5f4673e7.jpg?q=50' />
                        </div>
                    </div>
                </div>
                <div>
                    <img className='pr-6 pl-2 pt-2' src='https://rukminim2.flixcart.com/fk-p-flap/2000/2000/image/5d5c9419663986eb.jpg?q=50' />
                </div>
                <div className='relative'>
                    <img className='pr-6 pl-2 pt-2' src='https://rukminim2.flixcart.com/fk-p-flap/2000/2000/image/9534af53fc261e08.jpg?q=50' />
                    <div className='bg-white absolute w-14 h-24 rounded-r-md shadow-lg top-[30%] left-0'>
                        <div className='mt-8 mx-5 text-2xl'>
                            <ArrowBackIosIcon />
                        </div>
                    </div>
                    <div>
                        <div className='absolute rounded-l-md right-6 shadow-lg bg-white w-14 h-24 top-[30%]'>
                            <div className='mt-8 mx-3'>
                                <ArrowForwardIosIcon /></div>
                        </div>
                    </div>
                </div>
                <div className='pr-6 pl-2 pt-2 mt-2 bg-white ml-2'>
                    <div className='flex justify-between mt-5'>
                        <div className='text-xl font-semibold'>Motorola smartphones</div>
                        <div className='text-base rounded-sm w-24 text-center font-semibold bg-blue-600 text-white p-1'>VIEW ALL</div>
                    </div>
                    <div className='flex border border-gray-300 mt-4'>
                        <div >
                            <div className='flex flex-col gap-0 relative'>
                                <img className='h-52 pr-6 pl-8 pt-8 ' src='https://motorolabefr.vtexassets.com/arquivos/ids/161013/1-motorola-edge-50-fusion-pdp-ecom-render-6-balladblue-.png?v=638488040717300000' />
                                <div className='absolute right-0 pt-10'>
                                    <FavoriteSharpIcon style={{ fontSize: "18px", color: "lightgray" }} />
                                </div>
                                <div className='pl-8 pt-1 text-sm'>Motorola Edge 50 Fusion</div>
                                <div className='pl-6 text-sm'>(Marshmallow Blue, 256 GB)</div>
                            </div>
                            <div>
                                <div className='flex pl-14 gap-2 mt-2'>
                                    <div className='text-sm text-white bg-green-600 w-14 text-center rounded-lg'>4.5*</div>
                                    <div>(58,450)</div>
                                </div>
                            </div>
                            <div>
                                <div className='flex pl-6 gap-2 '>
                                    <div className='font-semibold mt-2 text-base'>₹23,999</div>
                                    <div className='line-through text-base mt-2'>₹23,999</div>
                                    <div className='text-green-700 text-sm mt-2'>14% off</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='flex flex-col gap-0 relative'>
                                <img className='h-52 pr-6 pl-8 pt-8 ' src='https://motorolain.vtexassets.com/arquivos/ids/158550-800-auto?width=800&height=auto&aspect=true' />
                                <div className='absolute right-0 pt-10'>
                                    <FavoriteSharpIcon style={{ fontSize: "18px", color: "lightgray" }} />
                                </div>
                                <div className='pl-8 pt-1 text-sm'>Motorola Edge 50 Fusion</div>
                                <div className='pl-6 text-sm'>(Marshmallow Blue, 256 GB)</div>
                            </div>
                            <div>
                                <div className='flex pl-14 gap-2 mt-2'>
                                    <div className='text-sm text-white bg-green-600 w-14 text-center rounded-lg'>4.5*</div>
                                    <div>(58,450)</div>
                                </div>
                            </div>
                            <div>
                                <div className='flex pl-6 gap-2 '>
                                    <div className='font-semibold mt-2 text-base'>₹23,999</div>
                                    <div className='line-through text-base mt-2'>₹23,999</div>
                                    <div className='text-green-700 text-sm mt-2'>14% off</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='flex flex-col gap-0 relative'>
                                <img className='h-52 pr-6 pl-8 pt-8 ' src='https://motorolain.vtexassets.com/arquivos/ids/159119-800-auto?width=800&height=auto&aspect=true' />
                                <div className='absolute right-0 pt-10'>
                                    <FavoriteSharpIcon style={{ fontSize: "18px", color: "lightgray" }} />
                                </div>
                                <div className='pl-8 pt-1 text-sm'>Motorola Edge 50 Fusion</div>
                                <div className='pl-6 text-sm'>(Marshmallow Blue, 256 GB)</div>
                            </div>
                            <div>
                                <div className='flex pl-14 gap-2 mt-2'>
                                    <div className='text-sm text-white bg-green-600 w-14 text-center rounded-lg'>4.5*</div>
                                    <div>(58,450)</div>
                                </div>
                            </div>
                            <div>
                                <div className='flex pl-6 gap-2 '>
                                    <div className='font-semibold mt-2 text-base'>₹23,999</div>
                                    <div className='line-through text-base mt-2'>₹23,999</div>
                                    <div className='text-green-700 text-sm mt-2'>14% off</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='flex flex-col gap-0 relative'>
                                <img className='h-52 pr-6 pl-8 pt-8 ' src='https://motorolaroe.vtexassets.com/arquivos/ids/157449-800-auto?width=800&height=auto&aspect=true' />
                                <div className='absolute right-0 pt-10'>
                                    <FavoriteSharpIcon style={{ fontSize: "18px", color: "lightgray" }} />
                                </div>
                                <div className='pl-8 pt-1 text-sm'>Motorola Edge 50 Fusion</div>
                                <div className='pl-6 text-sm'>(Marshmallow Blue, 256 GB)</div>
                            </div>
                            <div>
                                <div className='flex pl-14 gap-2 mt-2'>
                                    <div className='text-sm text-white bg-green-600 w-14 text-center rounded-lg'>4.5*</div>
                                    <div>(58,450)</div>
                                </div>
                            </div>
                            <div>
                                <div className='flex pl-6 gap-2 '>
                                    <div className='font-semibold mt-2 text-base'>₹23,999</div>
                                    <div className='line-through text-base mt-2'>₹23,999</div>
                                    <div className='text-green-700 text-sm mt-2'>14% off</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='flex flex-col gap-0 relative'>
                                <img className='h-52 pr-6 pl-8 pt-8 ' src='https://motorolain.vtexassets.com/arquivos/ids/159022/moto-edge50-ultra-ecom-render-19-darkestspruce-vtuvhiaw.png?v=638542310445500000' />
                                <div className='absolute right-0 pt-10'>
                                    <FavoriteSharpIcon style={{ fontSize: "18px", color: "lightgray" }} />
                                </div>
                                <div className='pl-8 pt-1 text-sm'>Motorola Edge 50 Fusion</div>
                                <div className='pl-6 text-sm'>(Marshmallow Blue, 256 GB)</div>
                            </div>
                            <div>
                                <div className='flex pl-14 gap-2 mt-2'>
                                    <div className='text-sm text-white bg-green-600 w-14 text-center rounded-lg'>4.5*</div>
                                    <div>(58,450)</div>
                                </div>
                            </div>
                            <div>
                                <div className='flex pl-6 gap-2 '>
                                    <div className='font-semibold mt-2 text-base'>₹23,999</div>
                                    <div className='line-through text-base mt-2'>₹23,999</div>
                                    <div className='text-green-700 text-sm mt-2'>14% off</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='flex flex-col gap-0 relative'>
                                <img className='h-52 pr-6 pl-8 pt-8 ' src='https://motorolaroe.vtexassets.com/arquivos/ids/157630/1-motorola-edge-50-pro-PDP-ecomm-render-color2-19-5xqe90om.png?v=638488615642900000' />
                                <div className='absolute right-0 pt-10'>
                                    <FavoriteSharpIcon style={{ fontSize: "18px", color: "lightgray" }} />
                                </div>
                                <div className='pl-8 pt-1 text-sm'>Motorola Edge 50 Fusion</div>
                                <div className='pl-6 text-sm'>(Marshmallow Blue, 256 GB)</div>
                            </div>
                            <div>
                                <div className='flex pl-14 gap-2 mt-2'>
                                    <div className='text-sm text-white bg-green-600 w-14 text-center rounded-lg'>4.5*</div>
                                    <div>(58,450)</div>
                                </div>
                            </div>
                            <div>
                                <div className='flex pl-6 gap-2 '>
                                    <div className='font-semibold mt-2 text-base'>₹23,999</div>
                                    <div className='line-through text-base mt-2'>₹23,999</div>
                                    <div className='text-green-700 text-sm mt-2'>14% off</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div>
                    <Mobilefooter />
                </div>
            </div>
        </div>
        // <div className='bg-gray-200'>
        //     <div className='flex gap-3 pl-2 pr-6 mt-2'>
        //         <div className='flex bg-white w-[18%] h-full border shadow-lg'>
        //             <div>
        //                 <div className='pl-4 pt-3 font-semibold text-xl p-3'>Filters</div>
        //                 <Divider />
        //                 <div className='pl-4 pt-3 font-semibold text-xs'>CATEGORIES</div>
        //                 <div className=' pl-7 pt-3 font-semibold text-sm text-gray-500 relative'>
        //                     Mobiles & Accessories
        //                     <div className='absolute top-3 left-4'>
        //                         <ArrowBackIosIcon style={{ fontSize: "12px" }} /></div>
        //                 </div>
        //                 <div className=' pl-7 pt-3 font-semibold text-sm text-black p-5'>Mobiles</div>
        //                 <Divider />
        //                 <div className=' pl-4 pt-3 font-semibold text-lg text-black p-5'>Price</div>
        //                 <div className='mx-4'><Slider /></div>
        //                 <div className='flex justify-between'>
        //                     <div className='ml-5 w-16 relative border border-gray-200'>Min
        //                         <div className='absolute top-0 left-10'>
        //                             <ArrowDropDownIcon /></div>
        //                     </div>
        //                     <div className='mr-10'>
        //                         <div className='ml-3 font-semibold text-gray-400'>to</div>
        //                     </div>
        //                     <div className='right-5 w-16 relative border border-gray-200'>30000
        //                         <div className='absolute top-0 left-10'>
        //                             <ArrowDropDownIcon /></div>
        //                     </div>
        //                 </div>
        //                 <div className=''>
        //                     <Divider className='pb-4' />
        //                 </div>
        //                 <div className='pl-4 pt-3 font-semibold text-lg p-3 relative'>Brand
        //                     <div className='absolute right-2 top-3 text-gray-400'>
        //                     <KeyboardArrowUpIcon/>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className='flex  w-[85%] h-full'>
        //             <div>
        //             <img className='w-full h-[100%]'src='https://rukminim2.flixcart.com/fk-p-flap/2000/2000/image/9fd462826e2c348f.jpg?q=50'/>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Mobile2
