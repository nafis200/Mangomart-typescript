import React from "react";
import { useLocation } from "react-router";
import useAxiosPublic from "./../../../hooks/useAxiosPublic";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Checkoutform from "./Checkoutform";
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

import { FaStripe } from "react-icons/fa";
import { RiCodeSSlashLine } from "react-icons/ri";
const PaymentScreen = () => {
  const axiosPublic = useAxiosPublic();
  const location = useLocation();
  const data = location?.state;

  const handle = () => {
    document.getElementById("my_modal_2").close();
    axiosPublic
      .post("http://localhost:5000/sslComerece", {
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
          does not come payment gateway Please reload{" "}
        </h1>
      </div>
      <div className="flex justify-center items-center space-x-4">
        <button
          className="btn"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          Payment by stripe <span> <FaStripe className="text-4xl text-blue-400" /> </span>
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
          Payment by SSLCommerce <RiCodeSSlashLine className="text-4xl text-violet-400" />
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

      <section className="lg:mt-40 md:mt-10 mt-10">
        <footer className="footer footer-center bg-green-200 text-base-content rounded p-10">
          <nav className="grid grid-flow-col gap-4">
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <div className="grid grid-flow-col gap-4">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current">
                  <path
                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current">
                  <path
                    d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current">
                  <path
                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </nav>
          <aside>
            <p>Copyright © {new Date().getFullYear()} Powered by Nafis Ahamed and Rakesh Biswas</p>
          </aside>
        </footer>
      </section>

    </div>
  );
};

export default PaymentScreen;
