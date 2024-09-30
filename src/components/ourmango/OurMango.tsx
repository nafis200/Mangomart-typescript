import React from "react";
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
      <div className="grid lg:grid-cols-3 md:grid-cols-2 space-x-4 mt-5">
      {mango?.map((item, index) => {
        return(
          <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src={`${item.image}`}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Name: {item?.name} </h2>
            <div className="card-actions justify-end">
              <NavLink to={`/singlemango/${item._id}`}> <button className="btn btn-success"> Show details </button> </NavLink>
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
