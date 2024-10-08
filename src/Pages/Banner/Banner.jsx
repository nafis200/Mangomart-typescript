import React, { useRef } from "react";
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ban1 from "../../assets/images/1.jpeg"
import ban2 from "../../assets/images/2.jpg"
import ban3 from "../../assets/images/3.jpg"
import { Link } from "react-router-dom";
// import ban5 from "../../assets/images/5.jpg"
import { RiShoppingBasketFill } from "react-icons/ri";
import { FaLongArrowAltRight } from "react-icons/fa";


const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true, // show arrow navigation
    };

    return (
        <div className="relative">
            <Slider {...settings}>

                <div className="relative h-80 md:h-96 lg:h-128">
                    <img src={ban3} alt="" className="w-full h-full object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-r from-transparent to-green-400 bg-opacity-75 text-white text-center h-full">
                        <h2 className="text-2xl font-bold mt-28">Welcome to Mango Mart</h2>
                        <p className="text-lg">
                            Mangoes at your doorstep .
                        </p>
                    </div>
                </div>

                <div className="relative h-80 md:h-96 lg:h-128">
                    <img src={ban2} alt="" className="w-full h-full object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-r from-transparent to-green-400 bg-opacity-75 text-white text-center h-full">
                        <h2 className="text-2xl font-bold mt-28">Explore Our Mangoes.</h2>
                        <p className="text-lg">
                            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. */}
                        </p>
                        <button className="bg-yellow-300 hover:bg-green-500 hover:text-yellow-300 hover:font-bold text-green-500 px-4 py-2 rounded-full mt-2 font-bold text-xl">
                            <Link to="/ourmango" className="flex items-center gap-2">
                                <FaLongArrowAltRight />
                                Explore
                            </Link>
                        </button>
                    </div>
                </div>

                <div className="relative h-80 md:h-96 lg:h-128">
                    <img src={ban1} alt="" className="w-full h-full object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-r from-transparent to-orange-400 bg-opacity-75 text-white text-center h-full">
                        {/* <h2 className="text-2xl font-bold mt-16">Welcome to <span className="text-xl md:text-3xl text-green-500">Mango Mart</span></h2> */}
                        <p className="text-lg">
                            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. */}
                        </p>
                        <button className="bg-green-400 hover:bg-orange-300 hover:text-green-400 hover:font-bold text-white px-4 py-2 rounded-full mt-28 font-bold text-xl">
                            <Link to="/OrderMango" className="flex items-center gap-2">
                                <RiShoppingBasketFill />
                                Order
                            </Link>
                        </button>
                    </div>
                </div>


            </Slider>
        </div>
    );
};

export default Banner;