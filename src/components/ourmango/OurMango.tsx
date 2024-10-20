import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { NavLink } from "react-router-dom";
import { ImLocation2 } from "react-icons/im";
import "animate.css/animate.compat.css"


interface Mango {
  _id: string;
  name: string;
  amount: number;
  quantity: number;
  location: string;
  image: string;
  description: string;
}

const OurMango: React.FC = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: mango = [] as Mango[],
    isLoading,
  } = useQuery<Mango[]>({
    queryKey: ["mango"],
    queryFn: async () => {
      const res = await axiosPublic.get<Mango[]>("/mangoInformation");
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl font-bold text-green-500 animate-pulse">
          Loading Mangoes...
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 lg:p-10">
      {/* <h1 className="text-4xl font-bold text-center text-teal-600 mt-16 mb-10">
        Our Premium Mangoes
      </h1> */}
      <div className="relative text-center mt-16 mb-10">

        <div data-aos="fade-in">

          <h1 className="text-xl md:text-4xl font-bold text-green-600 z-10 relative">
            Our Premium Mangoes
          </h1>
        </div>



        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-r from-orange-400 via-green-400 to-orange-400 w-2/3 h-11 mx-auto transform rounded-lg opacity-75"></div>
        {/* <div className="absolute inset-x-0 top-0 h-6 bg-gradient-to-r from-yellow-400 via-teal-200 to-yellow-400 w-2/3 mx-auto transform skew-y-3 rounded-lg opacity-75"></div> */}
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-8">
        {mango?.map((item, index) => (
          // <div data-aos="zoom-out"></div>
          <div data-aos="zoom-out"
            key={index}
            className="card bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 border border-gray-200 rounded-lg overflow-hidden"
          >
            <figure className="relative">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-60 object-cover transition-opacity duration-500 hover:opacity-80"
              />
              <span className="absolute top-2 right-2 bg-yellow-500 text-white text-sm font-bold px-2 py-1 rounded-md">
                {item.amount} Taka
              </span>
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title text-lg font-semibold text-gray-800">
                {item.name}
              </h2>
              <p className="text-gray-600">{item.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <p className="text-teal-500 font-bold"><ImLocation2 />
                  {item.location}
                </p>
                <NavLink to={`/singlemango/${item._id}`}>
                  <button className="btn btn-outline border-orange-500 text-orange-500 hover:bg-teal-500 hover:text-white">
                    Show Details
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurMango;
