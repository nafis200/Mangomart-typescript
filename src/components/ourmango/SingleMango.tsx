
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { NavLink } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

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
  const { id } = useParams();
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
        <div className="text-2xl font-semibold text-yellow-500 animate-pulse">
          Loading Mango Details...
        </div>
      </div>
    );
  }

  const selectedMango = mango.find((item) => item._id === id);

  if (!selectedMango) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl font-semibold text-red-500">
          Mango not found.
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 lg:p-10">
      <h1 className="text-3xl font-bold text-center text-teal-600 mt-16 mb-10">
        Mango Details
      </h1>
      <div className="lg:flex md:flex space-y-7 lg:space-y-0 md:space-y-0 lg:space-x-10 md:space-x-10">
        <div className="lg:w-1/2">
          <img
            src={selectedMango.image}
            alt={selectedMango.name}
            className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>
        {/* <div className="lg:w-1/2 p-6 bg-white shadow-md rounded-lg"> */}
        <div className="lg:w-1/2 p-6 bg-green-200 shadow-md rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            {selectedMango.name}
          </h2>
          <p className="text-lg text-gray-600 mb-2">
            <span className="font-bold">Location: </span>
            {selectedMango.location}
          </p>
          <p className="text-lg text-gray-600 mb-2">
            <span className="font-bold">Description: </span>
            {selectedMango.description}
          </p>
          <p className="text-lg text-gray-600 mb-4">
            <span className="font-bold">Price: </span>
            {selectedMango.amount} Taka per kg
          </p>
          <NavLink to="/ourmango">
            <button className="btn btn-outline w-full mt-5 hover:bg-teal-500">
              <FaArrowLeft />
              Go Back
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SingleMango;
