import React from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import AutoPlaySlider from './Slider';
import { useNavigate } from 'react-router-dom';
import UseEffect2 from './UseEffect2';
const Flipkartbody = () => {
    const Navigate = useNavigate();
    return (
        
        <div>
            <div className='relative mx-5'>
                <AutoPlaySlider />
                {/* <div className='top-[30%] absolute bg-white h-20 w-12 rounded-r-lg'>
                    <div className='mt-6 mx-2'><KeyboardArrowLeftIcon  style={{ color: "black" }} /></div>
                </div>
                <div className='top-[30%] absolute bg-white h-20 w-12 rounded-l-lg right-0'>
                    <div className='mt-6 mx-4'><KeyboardArrowRightIcon style={{ color: "black" }} /></div>
                </div> */}
            </div>
            <div className='mt-8 mx-5 bg-white pl-4'>
                <div className='font-bold text-xl md:pt-4 pt-8 md:pl-4 pl-5'>Best of Electonics</div>
                <div className='md:flex grid  md:gap-4 gap-0 w-[100%]'>
                    <div 
                    onClick={() => Navigate("product")}
                    className='md:border md:border-slate-400 md:rounded md:mt-8 mt-5 p-4 mb-20 md:grid flex'>
                        <img className='md:h-48 md:top-0 h-20' src='https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTyiAyPnVgX3bRTU66mMX8502hHLPAs6HfvwWqF3G_-HJyTXJXOlxmRqxIUpfI0pPpRmTl_HyzOoHZkLBmaqXEQU_3icRIyE-HR1T86qBjvkgWz3HrdJIcpIw' />
                        <div className='md:flex md:flex-col  md:mt-1 mt-4'>
                            <div className='md:text-sm text-xl md:flex md:justify-center md:font-normal font-semibold md:ml-0 ml-8'>Best Headphone</div>
                            <div className='md:flex md:justify-center md:font-semibold md:ml-0 ml-8'>Grab Now</div>
                        </div>
                    </div>
                    <div className='md:border md:border-slate-400 md:rounded md:mt-8 -mt-16 p-4 mb-20 md:grid flex'>
                        <img className='md:h-48 md:top-0 h-20' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7BqNAqUF1EJy6QlpBu16vflZ2tMvO5ZFDAQ&s' />
                        <div className='md:flex md:flex-col  md:mt-1 mt-4'>
                            <div className='md:text-sm text-xl md:flex md:justify-center md:font-normal font-semibold md:ml-0 ml-8'>Noise SmartWatches</div>
                            <div className='md:flex md:justify-center md:font-semibold md:ml-0 ml-8'>From ₹1099</div>
                        </div>
                    </div>
                    <div className='md:border md:border-slate-400 md:rounded md:mt-8 -mt-16 p-4 mb-20 md:grid flex'>
                        <img className='md:h-48 md:top-0 h-20' src='https://store.in.panasonic.com/media/catalog/product/cache/40b589206cef99ab7dca1586fe425968/s/c/sc-tmax45_info_1_main.webp' />
                        <div className='md:flex md:flex-col  md:mt-1 mt-4'>
                            <div className='md:text-sm text-xl md:flex md:justify-center md:font-normal font-semibold md:ml-0 ml-8'>Best Selling Speaker</div>
                            <div className='md:flex md:justify-center md:font-semibold md:ml-0 ml-8'>From ₹499</div>
                        </div>
                    </div>
                    <div className='md:border md:border-slate-400 md:rounded md:mt-8 -mt-16 p-4 mb-20 md:grid flex'>
                        <img className='md:h-48 md:top-0 h-20' src='https://5.imimg.com/data5/IM/VC/MY-4329046/branded-lcd-projector.jpg' />
                        <div className='md:flex md:flex-col  md:mt-1 mt-4'>
                            <div className='md:text-sm text-xl md:flex md:justify-center md:font-normal font-semibold md:ml-0 ml-8'>Projector</div>
                            <div className='md:flex md:justify-center md:font-semibold md:ml-0 ml-8'>From ₹6990</div>
                        </div>
                    </div>
                    <div className='md:border md:border-slate-400 md:rounded md:mt-8 -mt-16 p-4 mb-20 md:grid flex'>
                        <img className='md:h-48 md:top-0 h-20' src='https://rukminim2.flixcart.com/image/400/400/xif0q/monitor/6/x/w/ls24c330gawxxl-full-hd-24-2024-ls24c330gawxxl-samsung-original-imagz7n8ncgykhqz.jpeg?q=70' />
                        <div className='md:flex md:flex-col  md:mt-1 mt-4'>
                            <div className='md:text-sm text-xl md:flex md:justify-center md:font-normal font-semibold md:ml-0 ml-8'>Monitors</div>
                            <div className='md:flex md:justify-center md:font-semibold md:ml-0 ml-8'>From ₹9999</div>
                        </div>
                    </div>
                    <div className='lg:flex hidden'>
                        <img className='h-[80%] w-56' src='https://rukminim2.flixcart.com/fk-p-flap/530/810/image/966815131b08564b.jpeg?q=20' />
                    </div>
                </div>
            </div>
            <div>
                <UseEffect2/>
            </div>
        </div>


    )
}

export default Flipkartbody

