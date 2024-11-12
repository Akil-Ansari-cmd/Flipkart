import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'; // For arrow icons
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";



// Custom Left Arrow
function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button className="bg-white absolute top-[35%] rounded-r-lg pt-5  z-50 h-16 w-8 pl-2 md:flex hidden"  onClick={onClick}  >
    <IoIosArrowBack/>
    </button>
  );
}

// Custom Right Arrow
function NextArrow(props) {
  const {onClick } = props;
  return (
    <button className="bg-white absolute top-[35%] rounded-l-lg right-0 h-16 w-8 pl-2 pt-5 md:flex hidden"  onClick={onClick}  >
    <IoIosArrowForward/>
    </button>
  );
}



function AutoPlaySlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Autoplay enabled
    autoplaySpeed: 3000, // Autoplay speed set to 3 seconds (3000 ms)
    nextArrow: <NextArrow />, // Custom next arrow
    prevArrow: <PrevArrow />, // Custom previous arrow
  };

  const image = ["https://img-prd-pim.poorvika.com/pageimg/12-Instant-Discount-Web-banner-11zon.webp?width=1900&height=400&quality=75", "https://img-prd-pim.poorvika.com/pageimg/12-HDFC-Bank-Web-banner-11zon.webp?width=1900&height=400&quality=75", "https://img-prd-pim.poorvika.com/pageimg/iphone-16-web-banner-11zon.webp?width=1900&height=400&quality=75"]

  return (
    <div>
      <Slider {...settings}>
       
          
        {
          image.map((items,id) =>
            <div key={id} >
              <img className="md:h-auto h-32" src={items}
                alt="Error"
              />
            </div>
          )
        }

       
      </Slider>
    </div>
  );
}

export default AutoPlaySlider;