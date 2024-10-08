import React, { useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { AuthContext } from "../../../providers/AuthProvider";
import { useNavigate } from "react-router";

const Userform = () => {
  const axiosPublic = useAxiosPublic();

  const navigate = useNavigate()

  const { user } = useContext(AuthContext);
  const [startDate, setStartDate] = useState(new Date());
  const [id, setId] = useState(null);

  const {
    data: Mangos = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["Mango"],
    queryFn: async () => {
      const res = await axiosPublic.get("/mangoInformation");
      return res.data;
    },
  });
  if (isLoading) {
    return <div>Loading.....</div>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    let email = form.email.value;
    let name = form.name.value;
    let Phone_number = form.phone_number.value;
    let date = form.date.value;
    let Mango = form.mango.value;
    let quantity = parseInt(form.quantity.value);

    let Mangofilter = Mangos.filter((item) => item.name === Mango);
    document.getElementById(id).close();
    const taka = Mangofilter[0].amount;
    if (Mangofilter[0].quantity < quantity) {
      Swal.fire({
        title: "Sorry!",
        text: `I have not ${quantity} kg Mango`,
        icon: "error",
      });
      return;
    }

    let amount = taka * quantity;


    const Information = {
      email,
      name,
      Phone_number,
      date,
      Mango,
      quantity,
      amount,
      id
    };

    navigate('/dashboard/paymentScreen', { state: Information })
    location.reload()

  };

  return (
    <div>
      <div className="overflow-x-auto mt-16">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>MangoName</th>
              <th>Quantity</th>
              <th>MangoPrice</th>
              <th>Order</th>
            </tr>
          </thead>
          {Mangos?.map((item, index) => {
            return (
              <tbody key={index}>
                <tr>
                  <th>{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.quantity}kg</td>
                  <td>{item.amount}per kg</td>
                  <td>
                    <button
                      className="btn btn-success text-white"
                      onClick={() => {
                        document.getElementById(item._id).showModal();
                        setId(item._id);
                      }}
                    >
                      Order
                    </button>
                    <section>
                      <dialog
                        id={item._id}
                        className="modal modal-middle sm:modal-middle"
                      >
                        <div className="modal-box">
                          <h3 className="font-bold text-lg text-center text-green-700">
                            Order Information
                          </h3>
                          <form onSubmit={handleSubmit} className="card-body">
                            <div className="flex space-x-3 ml-[-20px]">
                              <div className="">
                                <label className="label">
                                  <span className="label-text text-black ">
                                    Name
                                  </span>
                                </label>
                                <input
                                  type="text"
                                  placeholder="nafis ahamed"
                                  className="input input-bordered"
                                  defaultValue={user?.displayName}
                                  name="name"
                                  readOnly="true"
                                  required
                                />
                              </div>
                              <div className="">
                                <label className="label">
                                  <span className="label-text text-black ">
                                    Email
                                  </span>
                                </label>
                                <input
                                  type="email"
                                  placeholder="nafis@gmail.com"
                                  className="input input-bordered"
                                  defaultValue={user?.email}
                                  name="email"
                                  readOnly="true"
                                  required
                                />
                              </div>
                            </div>
                            <div className="flex space-x-3 ml-[-20px]">
                              <div className="">
                                <label className="label">
                                  <span className="label-text text-black ">
                                    MangoName
                                  </span>
                                </label>
                                <input
                                  type="text"
                                  placeholder="Himsagor"
                                  className="input input-bordered"
                                  defaultValue={item.name}
                                  name="mango"
                                  readOnly="true"
                                  required
                                />
                              </div>
                              <div className="">
                                <label className="label">
                                  <span className="label-text text-black ">
                                    Qunatity
                                  </span>
                                </label>
                                <input
                                  type="number"
                                  placeholder="5kg"
                                  className="input input-bordered"
                                  name="quantity"
                                  required
                                />
                              </div>
                            </div>
                            <div className="flex space-x-3 ml-[-20px]">
                              <div className="">
                                <label className="label">
                                  <span className="label-text text-black ">
                                    Phone Number
                                  </span>
                                </label>
                                <input
                                  type="text"
                                  placeholder="+880 019xxxx"
                                  className="input input-bordered"
                                  name="phone_number"
                                  required
                                />
                              </div>
                              <div className="">
                                <label className="label">
                                  <span className="label-text text-black font-bold">
                                    Date
                                  </span>
                                </label>
                                <DatePicker
                                  name="date"
                                  className="input input-bordered "
                                  selected={startDate}
                                  onChange={(date) => setStartDate(date)}
                                />
                              </div>
                            </div>

                            <div className="flex justify-center">
                              <input
                                type="submit"
                                className="lg:mt-4 md:mt-4 mt-2 btn btn-success text-white w-24 lg:w-[200px] "
                                value="Order"
                              />
                            </div>
                          </form>
                          <div className="modal-action">
                            <form method="dialog">
                              <button className="btn">Close</button>
                            </form>
                          </div>
                        </div>
                      </dialog>
                    </section>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Userform;
