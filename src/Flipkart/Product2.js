
import React from "react";
import Slider from "react-slick";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;

        return (
            <button className="bg-white absolute top-[30%] z-50 rounded-l-lg right-20 h-16 w-12 pl-2 pt-2 "  onClick={onClick}  >
            <IoIosArrowForward/>
            </button>
          );
  }
  

function SampleNextArrow(props) {
    const {onClick } = props;
    return (
        <button className="bg-white absolute top-[30%] rounded-r-lg pt-2 left-0  z-50 h-16 w-8 pl-2"  onClick={onClick}  >
        <IoIosArrowBack/>
        </button>
    );
  }
  

  function CustomArrows() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
}
var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
    
};

const Product2 = () => {
    const product = [{
        id: 1,
        src: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/8/v/0/-original-imah5ywfebrs9bfg.jpeg?q=70&crop=false",
        name: "SAMSUNG Galaxy S23 ",
        des: "(Mint, 128 GB)",
        price: "₹28,999",
        dis: "₹79,999",
        offer: "63% off",
        rating: "4.3*",
        type: "(43,454)",
        pic: "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
    }, {
        id: 2,
        src: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/8/v/0/-original-imah5ywfebrs9bfg.jpeg?q=70&crop=false",
        name: "SAMSUNG Galaxy S23",
        des: "(Mint, 128 GB)",
        price: "₹28,999",
        dis: "₹79,999",
        offer: "63% off",
        rating: "4.3*",
        type: "(43,454)",
        pic: "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
    }, {
        id: 3,
        src: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/8/v/0/-original-imah5ywfebrs9bfg.jpeg?q=70&crop=false",
        name: "SAMSUNG Galaxy S23",
        des: "(Mint, 128 GB)",
        price: "₹28,999",
        dis: "₹79,999",
        offer: "63% off",
        rating: "4.3*",
        type: "(43,454)",
        pic: "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
    }, {
        id: 4,
        src: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/8/v/0/-original-imah5ywfebrs9bfg.jpeg?q=70&crop=false",
        name: "SAMSUNG Galaxy S23",
        des: "(Mint, 128 GB)",
        price: "₹28,999",
        dis: "₹79,999",
        offer: "63% off",
        rating: "4.3*",
        type: "(43,454)",
        pic: "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
    }, {
        id: 5,
        src: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/8/v/0/-original-imah5ywfebrs9bfg.jpeg?q=70&crop=false",
        name: "SAMSUNG Galaxy S23",
        des: "(Mint, 128 GB)",
        price: "₹28,999",
        dis: "₹79,999",
        offer: "63% off",
        rating: "4.3*",
        type: "(43,454)",
        pic: "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
    },
         {
            id: 6,
            src: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/8/v/0/-original-imah5ywfebrs9bfg.jpeg?q=70&crop=false",
            name: "SAMSUNG Galaxy S23 FE",
            des: "(Mint, 128 GB)",
            price: "₹28,999",
            dis: "₹79,999",
            offer: "63% off",
            rating: "4.3*",
            type: "(43,454)",
            pic: "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
        }, {
            id: 7,
            src: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/8/v/0/-original-imah5ywfebrs9bfg.jpeg?q=70&crop=false",
            name: "SAMSUNG Galaxy S23 FE",
            des: "(Mint, 128 GB)",
            price: "₹28,999",
            dis: "₹79,999",
            offer: "63% off",
            rating: "4.3*",
            type: "(43,454)",
            pic: "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
        }, {
            id: 8,
            src: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/8/v/0/-original-imah5ywfebrs9bfg.jpeg?q=70&crop=false",
            name: "SAMSUNG Galaxy S23 FE",
            des: "(Mint, 128 GB)",
            price: "₹28,999",
            dis: "₹79,999",
            offer: "63% off",
            rating: "4.3*",
            type: "(43,454)",
            pic: "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
        }, {
            id: 9,
            src: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/8/v/0/-original-imah5ywfebrs9bfg.jpeg?q=70&crop=false",
            name: "SAMSUNG Galaxy S23 FE",
            des: "(Mint, 128 GB)",
            price: "₹28,999",
            dis: "₹79,999",
            offer: "63% off",
            rating: "4.3*",
            type: "(43,454)",
            pic: "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
        }, {
            id: 10,
            src: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/8/v/0/-original-imah5ywfebrs9bfg.jpeg?q=70&crop=false",
            name: "SAMSUNG Galaxy S23 FE",
            des: "(Mint, 128 GB)",
            price: "₹28,999",
            dis: "₹79,999",
            offer: "63% off",
            rating: "4.3*",
            type: "(43,454)",
            pic: "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
        },]
    return (

        <div className="slider-container ml-10 mt-16">
            <Slider {...settings}>
                {
                    product.map((items) =>
                        <div key={items.id}>
                            <div>
                                <img className='w-40' src={items.src} />
                            </div>
                            <div className='mt-4 flex flex-col'>
                                <div className='text-sm'>{items.name}</div>
                                <div className='text-sm'>{items.des}</div>
                            </div>
                            <div className='flex gap-2'>
                                <div className='mt-1 border w-16 bg-green-600 text-white text-sm text-center rounded-lg'>{items.rating}</div>
                                <div className='font-semibold text-gray-500'>{items.type}</div>
                                <div className='mt-1'> <img className='w-20 h-5' src={items.pic} /></div>
                            </div>
                            <div className='flex gap-1 mt-1'>
                                <div className='font-semibold'>{items.price}</div>
                                <div className=' text-gray-500 line-through'>{items.dis}</div>
                                <div className='text-green-700'>{items.offer}</div>
                            </div>
                        </div>

                    )
                }
            </Slider>
        </div>
    )
}

export default Product2
