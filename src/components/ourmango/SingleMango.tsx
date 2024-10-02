import React, { useState } from "react";
import { useParams } from "react-router";
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

const SingleMango = () => {
    const {id} = useParams()
    const axiosPublic = useAxiosPublic();
    const {
      data: mango = [] as Mango[],
      isLoading,
      refetch,
    } = useQuery<Mango[]>({
      queryKey: ["mango"],
      queryFn: async () => {
        const res = await axiosPublic.get<Mango[]>('/mangoInformation');
        return res.data;
      },
    });
  
    if (isLoading) {
      return <div>Loading.....</div>;
    }

    const Mangos = mango.filter((item)=> item._id === id)
    
  return(
    <div>
       <h1 className="text-white h-24"></h1>
       <div className="lg:flex md:flex space-x-7">
         <div>
         <img 
          src={`${Mangos[0].image}`} className="" alt="" />
         </div>
         <div className="mt-5">
           <h1>Name: <span className="font-bold">{Mangos[0].name}</span> </h1>
           <h1>location: <span className="font-bold">{Mangos[0].location}</span> </h1>
           <h1>Description: <span className="font-bold">{Mangos[0].description}</span> </h1>
           <h1>Price: <span className="font-bold">{Mangos[0].amount} per kg</span> </h1>
           <NavLink to="/ourmango"> <button className="btn btn-success mt-5">Go back</button> </NavLink>
         </div>
       </div>
    </div>
  )
};

export default SingleMango;
