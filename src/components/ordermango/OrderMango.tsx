
import React from 'react';
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { NavLink } from "react-router-dom";
import 'animate.css';
import { ImLocation2 } from "react-icons/im";
interface Mango {
    _id: string;
    name: string;
    amount: number;
    quantity: number;
    location: string;
    image: string;
    description: string;
  }

const OrderMango: React.FC = () => {
    const axiosPublic = useAxiosPublic();
  const {
    data: mango = [] as Mango[],
    isLoading,
    refetch,
  } = useQuery<Mango[]>({
    queryKey: ["mango"],
    queryFn: async () => {
      const res = await axiosPublic.get<Mango[]>("/mangoInformation");
      return res.data;
    },
  });

  if (isLoading) {
    return <div>Loading.....</div>;
  }
    return (
      <div className='p-6 lg:p-10'>
        <div className="relative text-center mt-16 mb-10">
      <h1 className="text-4xl font-bold text-teal-600 z-10 relative">
        Our Premium Mangoes
      </h1>
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-r from-yellow-400 via-teal-200 to-yellow-400 w-2/3 h-11 mx-auto transform rounded-lg opacity-75"></div>
      {/* <div className="absolute inset-x-0 top-0 h-6 bg-gradient-to-r from-yellow-400 via-teal-200 to-yellow-400 w-2/3 mx-auto transform skew-y-3 rounded-lg opacity-75"></div> */}
    </div>
      {/* <h1 className="h-24 text-white">text</h1> */}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 space-x-4 mt-5 space-y-7 animate__animated animate__fadeInDownBig" style={{ animationDuration: '2s' }}>
      {mango?.map((item, index) => {
        return(
          <div className="card bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 border border-gray-200 rounded-lg overflow-hidden">
          <figure className="relative">
            <img
              src={`${item.image}`}
              className="w-full h-60 object-cover transition-opacity duration-500 hover:opacity-80 animate__animated animate__fadeInDownBig animate__delay-1s"
              style={{ animationDuration: '2s' }}
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
                </div>
            <div className="card-actions lg:justify-end">
              <NavLink to={`/dashboard/mangoOrder`}> <button className="btn btn-success text-white hover:bg-blue-400"> Order Mango </button> </NavLink>
            </div>
          </div>
        </div>
        )
      })}
      </div>
    </div>
    );
};

export default OrderMango;