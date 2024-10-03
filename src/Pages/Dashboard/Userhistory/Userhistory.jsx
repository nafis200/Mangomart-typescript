

import React, { useContext } from 'react';
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from '../../../providers/AuthProvider';
import useAxiosPublic from '../../../hooks/useAxiosPublic';


const Userhistory = () => {
    const axiosPublic = useAxiosPublic()
    const {user} = useContext(AuthContext)
    console.log(user?.email);
    const {
        data: Userinformation = [],
        isLoading,refetch
      } = useQuery({
        queryKey: ["information"],
        queryFn: async () => {
          const res = await axiosPublic.get(`/information/${user?.email}`);
          return res.data;
        },
      });
      if (isLoading) {
        return <div>Loading.....</div>;
      }

      refetch()
      
    return (
      <div className="overflow-x-auto mt-20">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>email</th>
            <th>Payment Id</th>
            <th>Qunatity</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {
            Userinformation?.map((item, index) => {
              return (
                <tr>
                  <td>{item?.email}</td>
                  <td>{item?.paymnetId}</td>
                  <td>{item?.quantity}</td>
                  <td>{item?.amount}</td>
                </tr>
              )
            })
          }

        </tbody>
      </table>
    </div>
    );
};

export default Userhistory;