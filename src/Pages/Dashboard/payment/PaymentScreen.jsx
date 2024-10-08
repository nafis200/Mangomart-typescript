import React from "react";
import { useLocation } from "react-router";
import useAxiosPublic from "./../../../hooks/useAxiosPublic";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Checkoutform from "./Checkoutform";
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const PaymentScreen = () => {
  const axiosPublic = useAxiosPublic();
  const location = useLocation();
  const data = location?.state;

  const handle = () => {
    document.getElementById("my_modal_2").close();
    axiosPublic
      .post("https://backend-two-theta-46.vercel.app/sslComerece", {
        data,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          window.location.replace(res.data.paymentUrl);
        }
      });
  };

  return (
    <div className="mt-20">
      <div>
        <h1 className="text-center mt-5 mb-10 font-bold bg-green-700 p-6 text-white">
          Please pay {data.amount} taka for {data.quantity} kg {data.Mango} if
          does not payment gateway come Please reload{" "}
        </h1>
      </div>
      <div className="flex justify-center items-center space-x-4">
        <button
          className="btn"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          Payment by stripe
        </button>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <Elements stripe={stripePromise}>
              <Checkoutform id={"my_modal_1"} amount={data.amount} quantity={data.quantity} _id={data.id} ></Checkoutform>
            </Elements>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>

        <button
          className="btn"
          onClick={() => document.getElementById("my_modal_2").showModal()}
        >
          Payment by SSLCommerce
        </button>
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box bg-green-400 text-white">
            <h3 className="font-bold text-lg text-center to go ahead">
              Are you agree
            </h3>
            <p className="mt-5 text-center font-bold">
              Your total bill {data.amount}{" "}
            </p>
            <div className="flex justify-center mt-5">
              <button onClick={handle} className="btn btn-success text-white">
                Pay the bill
              </button>
            </div>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default PaymentScreen;
