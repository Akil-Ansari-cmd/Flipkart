import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button className="bg-white border-r border-y border-black  absolute top-[35%] rounded-r-lg pt-5  z-50 h-16 w-8 pl-2 md:flex hidden"  onClick={onClick}  >
    <IoIosArrowBack/>
    </button>
  );
}

// Custom Right Arrow
function NextArrow(props) {
  const {onClick } = props;
  return (
    <button className="bg-white border-l border-y border-black z-[999] absolute top-[35%] rounded-l-lg right-0 h-16 w-8 pl-2 pt-5 md:flex hidden"  onClick={onClick}  >
    <IoIosArrowForward/>
    </button>
  );
}




const UseEffect2 = () => {
  const [data, setData] = useState();
  const [content, setContent] = useState(false);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setData(data.products))
      .catch((e) => {
        console.log(e)
      })
  }, [])

  console.log("Data aa gya:", data);



  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    nextArrow: <NextArrow />, // Custom next arrow
    prevArrow: <PrevArrow />, // Custom previous arrow
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
    ]
  };



  return (
    
        // <div className=' lg:block hidden mt-3 mx-4 bg-white h-[65vh]'><div className='text-xl font-semibold pl-8 pt-5'>499 only</div>
        //   <div className="flex gap-3 overflow-x-scroll mt-10 mx-5">
        //     {data &&
        //       data.map((items) => (
        //         <div className=" w-48">
        //           <div className='border border-black rounded-lg p-3'><img className='h-44 w-48 ' onClick={() => setContent(!content)} src={items.images} />
        //             <div className='mx-auto truncate w-32 font-normal'>{items.title}</div>
        //             <div className='text-center text-black font-semibold'>{items.price}</div>
        //           </div>
        //           <div>{content ? `${items.description}` : ""}</div>
        //         </div>
        //       ))
        //     }
        //   </div>
      
        // </div>

        <div className="slider-container mx-5  hidden lg:block  bg-white"> 
      <Slider {...settings}>
         {data &&
              data.map((items) => (
                <div className="mb-5">
                  <div className='border h-60 border-black mx-5 rounded-lg p-3'><img className='h-40 mx-auto w-28 ' onClick={() => setContent(!content)} src={items.images} />
                    <div className='text-center truncate  font-normal'>{items.title}</div>
                    <div className='text-center text-black font-semibold'>{items.price}</div>
                  </div>
                  <div>{content ? `${items.description}` : ""}</div>
                </div>
              ))
            }
      </Slider>
    </div>
  )
}

export default UseEffect2
