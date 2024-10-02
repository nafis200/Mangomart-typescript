import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const CardContainer = () => {
    const axiosPublic = useAxiosPublic();

    const { data: mangoInformation = [], isLoading } = useQuery({
        queryKey: ['mangoInformation'],
        queryFn: async () => {
            const res = await axiosPublic.get('/mangoInformation');
            return res.data;
        }
    });

    if (isLoading) {
        return <div className="flex justify-center items-center h-screen">
            <span className="loading loading-spinner loading-lg"></span>
        </div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-center text-green-600 mb-8">Available Mango Varieties</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {mangoInformation.map((mango) => (
                    <div key={mango._id} className="card shadow-xl">
                        <figure>
                            <img src={mango.image} alt={mango.name} className="w-full h-48 object-cover" />
                        </figure>
                        <div className="card-body hover:shadow-xl bg-green-200 text-black">
                            <h2 className="card-title text-2xl justify-center">{mango.name}</h2>
                            <p className="text-center mt-2">{mango.description}</p>
                            <p className="text-center text-xl mt-4">
                                Amount Available: <span className="font-bold">{mango.amount}</span> kg
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardContainer;
