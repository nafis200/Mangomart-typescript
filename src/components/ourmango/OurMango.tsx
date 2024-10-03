import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { NavLink } from "react-router-dom";
import 'animate.css';

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
    <div>
      <h1 className="h-24 text-white">text</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 space-x-4 mt-5 space-y-7 animate__animated animate__fadeInDownBig" style={{ animationDuration: '2s' }}>
      {mango?.map((item, index) => {
        return(
          <div className="card bg-green-100 shadow-xl mt-10 hover:bg-yellow-400 hover:shadow-black">
          <figure>
            <img
              src={`${item.image}`}
              className="lg:w-full h-60 object-cover animate__animated animate__fadeInDownBig animate__delay-1s"
              alt="Shoes" style={{ animationDuration: '2s' }}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title animate__animated animate__fadeInLeft animate__delay-2s" style={{ animationDuration: '2s' }} >Name: {item?.name} </h2>
            <div className="card-actions justify-end">
              <NavLink to={`/singlemango/${item._id}`}> <button className="btn btn-success text-white hover:bg-blue-400"> Show details </button> </NavLink>
            </div>
          </div>
        </div>
        )
      })}
      </div>
    </div>
  );
};

export default OurMango;
