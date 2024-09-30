
import React from 'react';
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from './../../hooks/useAxiosPublic';


const OurMango = () => {
    const axiosPublic = useAxiosPublic()
    const {
        data: mango = [],
        isLoading,
        refetch,
      } = useQuery({
        queryKey: ["mango"],
        queryFn: async () => {
          const res = await axiosPublic.get("/mangoInformation");
          return res.data;
        },
      });
      if (isLoading) {
        return <div>Loading.....</div>;
      }
      console.log(mango);
      
    return (
        <div>
            
        </div>
    );
};

export default OurMango;