
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
    return <div>Loading.....</div>;
  }
  return (
    <div>
      <h1 className="h-24 text-white">text</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 space-x-4 mt-5 space-y-7">
        {mango?.map((item) => {
          return (
            <div className="card bg-green-100 shadow-xl mt-10 hover:bg-yellow-400 hover:shadow-black">
              <figure>
                <img
                  src={`${item.image}`}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Name: {item?.name} </h2>
                <h2 className="card-title">Price: {item?.amount} kg</h2>
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