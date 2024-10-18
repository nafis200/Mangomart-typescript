import React from 'react';
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { NavLink } from "react-router-dom";

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
  } = useQuery<Mango[]>({
    queryKey: ["mango"],
    queryFn: async () => {
      const res = await axiosPublic.get<Mango[]>("/mangoInformation");
      return res.data;
    },
  });

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">
      <div className="text-2xl font-semibold">Loading.....</div>
    </div>;
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className='h-20'>For Spacing</h1>
      <h1 className="text-4xl font-bold text-center text-teal-600 my-8">Order Your Premium Mangoes</h1>
      
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
        {mango?.map((item) => (
          <div data-aos="zoom-in"
           key={item._id} className="card max-w-xs mx-auto bg-white hover:bg-orange-300 shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <figure className="w-full h-48">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-800">Name: {item.name}</h2>
              <p className="mt-2 text-lg text-gray-600">Price: {item.amount} Taka per kg</p>
              <p className="mt-1 text-sm text-gray-500">Location: {item.location}</p>

              <div className="mt-4">
                <NavLink to={`/dashboard/mangoOrder`}>
                  <button className="w-full btn bg-green-600 text-white py-2 rounded-lg hover:bg-teal-500 focus:outline-none transition duration-300">
                    Order Mango
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

export default OrderMango;
