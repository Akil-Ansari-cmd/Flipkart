import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom'
function Header1() {
    const navigate = useNavigate();
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 10,
        initialSlide: 0,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 8,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    initialSlide:2
                }
            }
        ]
    };
    return (
        <div className="slider-container bg-white md:border md:m-3   mb-3 h-32">
            <Slider {...settings}>
            
                <div onClick={() => navigate("Offers")}
                    className='flex mt-3 ml-3 justify-center items-center w-[10%] cursor-pointer'>
                    <div className='flex flex-col gap-2'>
                        <div><img className='h-16' src='https://rukminim1.flixcart.com/fk-p-flap/96/96/image/698ba0cebe456aaf.jpg?q=100' /></div>
                        <div className='flex  font-semibold'>Top Offers</div>
                    </div>
                </div>
                <div onClick={() => navigate("Mobile")}
                    className='flex mt-3 ml-3 justify-center items-center w-[10%] cursor-pointer'>
                    <div className='flex flex-col gap-2'>
                        <div><img className='h-16' src='https://rukminim1.flixcart.com/fk-p-flap/96/96/image/44e10b16e649b691.jpg?q=100' /></div>
                        <div className='flex font-semibold'>Mobiles</div>
                    </div>
                </div>
                <div onClick={() => navigate("Electronic")}
                    className='flex mt-3 ml-3 justify-center items-center w-[10%] cursor-pointer'>
                    <div className='flex flex-col gap-2'>
                        <div><img className='h-16' src='https://rukminim1.flixcart.com/fk-p-flap/96/96/image/717b5077a5e25324.jpg?q=100' /></div>
                        <div className='flex  font-semibold'>Electronics</div>
                    </div>
                </div>
                <div onClick={() => navigate("Laptop")}
                    className='flex mt-3 ml-3 justify-center items-center w-[10%] cursor-pointer'>
                    <div className='flex flex-col gap-2'>
                        <div><img className='h-16' src='https://rukminim1.flixcart.com/fk-p-flap/96/96/image/4da1d0d19350cc84.jpg?q=100' /></div>
                        <div className='flex font-semibold'>Laptops</div>
                    </div>
                </div>
                <div onClick={() => navigate("Fashion")}
                    className='flex mt-3 ml-3 justify-center items-center w-[10%] cursor-pointer'>
                    <div className='flex flex-col gap-2'>
                        <div><img className='h-16' src='https://rukminim1.flixcart.com/fk-p-flap/96/96/image/9d4e9c605fc1d2d3.jpg?q=100' /></div>
                        <div className='flex  font-semibold'>Fashion</div>
                    </div>
                </div>
                <div onClick={() => navigate("Kids")}
                    className='flex mt-3 ml-3 justify-center items-center w-[10%] cursor-pointer'>
                    <div className='flex flex-col gap-2'>
                        <div><img className='h-16' src='https://rukminim1.flixcart.com/fk-p-flap/96/96/image/a5e656672d0548dd.jpg?q=100' /></div>
                        <div className='flex ml-3 font-semibold'>Kids</div>
                    </div>
                </div>
                <div onClick={() => navigate("Appliances")}
                    className='flex mt-3 ml-3 justify-center items-center w-[10%] cursor-pointer'>
                    <div className='flex flex-col gap-2'>
                        <div><img className='h-16' src='https://rukminim1.flixcart.com/fk-p-flap/96/96/image/5b813b64a3179898.jpg?q=100' /></div>
                        <div className='flex  font-semibold'>Appliances</div>
                    </div>
                </div>
                <div onClick={() => navigate("Furniture")}
                    className='flex mt-3 ml-3 justify-center items-center w-[10%] cursor-pointer'>
                    <div className='flex flex-col gap-2'>
                        <div><img className='h-16' src='https://rukminim1.flixcart.com/fk-p-flap/96/96/image/7a5e96c10ada8a56.jpg?q=100' /></div>
                        <div className='flex  font-semibold'>Furnitures</div>
                    </div>
                </div>
                <div onClick={() => navigate("Bookings")}
                    className='flex mt-3 ml-3 justify-center items-center w-[10%] cursor-pointer'>
                    <div className='flex flex-col gap-2'>
                        <div><img className='h-16' src='https://rukminim1.flixcart.com/fk-p-flap/96/96/image/57fe1ffe54569c41.jpg?q=100' /></div>
                        <div className='flex  font-semibold'>Bookings</div>
                    </div>
                </div>
                <div onClick={() => navigate("Grocery")}
                    className='flex mt-3 ml-3 justify-center items-center w-[10%] cursor-pointer'>
                    <div className='flex flex-col gap-2'>
                        <div><img className='h-16' src='https://rukminim1.flixcart.com/fk-p-flap/96/96/image/25f400c36bc3487d.jpg?q=100' /></div>
                        <div className='flex  font-semibold'>Grocery</div>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default Header1

// import React from 'react'
// import { useNavigate } from 'react-router-dom'
// function Header1() {
//     const navigate = useNavigate();
//     return (
//         <div className='flex h-[25vh] m-3 border bg-white'>
//             <div onClick={() => navigate("Offers")}
//                 className='flex justify-center items-center w-[10%] cursor-pointer'>
//                 <div className='flex flex-col gap-2'>
//                     <div><img className='h-16' src='https://rukminim1.flixcart.com/fk-p-flap/96/96/image/698ba0cebe456aaf.jpg?q=100' /></div>
//                     <div className='flex justify-center font-semibold'>Top Offers</div>
//                 </div>
//             </div>
//             <div onClick={() => navigate("Mobile")}
//                 className='flex justify-center items-center w-[10%] cursor-pointer'>
//                 <div className='flex flex-col gap-2'>
//                     <div><img className='h-16' src='https://rukminim1.flixcart.com/fk-p-flap/96/96/image/44e10b16e649b691.jpg?q=100' /></div>
//                     <div className='flex justify-center font-semibold'>Mobiles</div>
//                 </div>
//             </div>
//             <div onClick={() => navigate("Electronic")}
//                 className='flex justify-center items-center w-[10%] cursor-pointer'>
//                 <div className='flex flex-col gap-2'>
//                     <div><img className='h-16' src='https://rukminim1.flixcart.com/fk-p-flap/96/96/image/717b5077a5e25324.jpg?q=100' /></div>
//                     <div className='flex justify-center font-semibold'>Electronics</div>
//                 </div>
//             </div>
//             <div onClick={() => navigate("Laptop")}
//                 className='flex justify-center items-center w-[10%] cursor-pointer'>
//                 <div className='flex flex-col gap-2'>
//                     <div><img className='h-16' src='https://rukminim1.flixcart.com/fk-p-flap/96/96/image/4da1d0d19350cc84.jpg?q=100' /></div>
//                     <div className='flex justify-center font-semibold'>Laptops</div>
//                 </div>
//             </div>
//             <div onClick={() => navigate("Fashion")}
//                 className='flex justify-center items-center w-[10%] cursor-pointer'>
//                 <div className='flex flex-col gap-2'>
//                     <div><img className='h-16' src='https://rukminim1.flixcart.com/fk-p-flap/96/96/image/9d4e9c605fc1d2d3.jpg?q=100' /></div>
//                     <div className='flex justify-center font-semibold'>Fashion</div>
//                 </div>
//             </div>
//             <div onClick={() => navigate("Kids")}
//                 className='flex justify-center items-center w-[10%] cursor-pointer'>
//                 <div className='flex flex-col gap-2'>
//                     <div><img className='h-16' src='https://rukminim1.flixcart.com/fk-p-flap/96/96/image/a5e656672d0548dd.jpg?q=100' /></div>
//                     <div className='flex justify-center font-semibold'>Kids</div>
//                 </div>
//             </div>
//             <div onClick={() => navigate("Appliances")}
//                 className='flex justify-center items-center w-[10%] cursor-pointer'>
//                 <div className='flex flex-col gap-2'>
//                     <div><img className='h-16' src='https://rukminim1.flixcart.com/fk-p-flap/96/96/image/5b813b64a3179898.jpg?q=100' /></div>
//                     <div className='flex justify-center font-semibold'>Appliances</div>
//                 </div>
//             </div>
//             <div onClick={() => navigate("Furniture")}
//                 className='flex justify-center items-center w-[10%] cursor-pointer'>
//                 <div className='flex flex-col gap-2'>
//                     <div><img className='h-16' src='https://rukminim1.flixcart.com/fk-p-flap/96/96/image/7a5e96c10ada8a56.jpg?q=100' /></div>
//                     <div className='flex justify-center font-semibold'>Furnitures</div>
//                 </div>
//             </div>
//             <div onClick={() => navigate("Bookings")}
//                 className='flex justify-center items-center w-[10%] cursor-pointer'>
//                 <div className='flex flex-col gap-2'>
//                     <div><img className='h-16' src='https://rukminim1.flixcart.com/fk-p-flap/96/96/image/57fe1ffe54569c41.jpg?q=100' /></div>
//                     <div className='flex justify-center font-semibold'>Bookings</div>
//                 </div>
//             </div>
//             <div onClick={() => navigate("Grocery")}
//                 className='flex justify-center items-center w-[10%] cursor-pointer'>
//                 <div className='flex flex-col gap-2'>
//                     <div><img className='h-16' src='https://rukminim1.flixcart.com/fk-p-flap/96/96/image/25f400c36bc3487d.jpg?q=100' /></div>
//                     <div className='flex justify-center font-semibold'>Grocery</div>
//                 </div>
//             </div>
//         </div>

//     )
// }

// export default Header1