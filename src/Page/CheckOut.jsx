import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CheckOut = () => {
  const { cardsItem } = useSelector((state) => state.card);

  const total = cardsItem.reduce((p, c) => {
    return p + c.price * c.qty;
  }, 0);

  const tax = (total * 10) / 100;

  const delevery = (total * 9) / 100;

  const totalPrice = total + tax + delevery;

  const final = total;

  const cardTotal = cardsItem.reduce((p, c) => {
    return p + c.qty * c.price;
  }, 0);

  return (
    <div className="font-[sans-serif] bg-gray-50 p-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-[#333] text-center">
          Checkout
        </h2>
        <div className="grid lg:grid-cols-3 gap-8 mt-12">
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-[#333]">
              Choose your payment method
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 mt-6">
              <div className="flex items-center">
                <input
                  type="radio"
                  className="w-5 h-5 cursor-pointer"
                  id="card"
                  checked
                />
                <label for="card" className="ml-4 flex gap-2 cursor-pointer">
                  <img
                    src="https://readymadeui.com/images/visa.webp"
                    className="w-12"
                    alt="card1"
                  />
                  <img
                    src="https://readymadeui.com/images/american-express.webp"
                    className="w-12"
                    alt="card2"
                  />
                  <img
                    src="https://readymadeui.com/images/master.webp"
                    className="w-12"
                    alt="card3"
                  />
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  className="w-5 h-5 cursor-pointer"
                  id="paypal"
                />
                <label for="paypal" className="ml-4 flex gap-2 cursor-pointer">
                  <img
                    src="https://readymadeui.com/images/paypal.webp"
                    className="w-20"
                    alt="paypalCard"
                  />
                </label>
              </div>
            </div>
            <form className="mt-8">
              <div className="grid gap-6">
                <div className="grid sm:grid-cols-3 gap-6">
                  <input
                    type="number"
                    placeholder="Card number"
                    className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border rounded-md focus:border-[#007bff] outline-none"
                  />
                  <input
                    type="number"
                    placeholder="EXP."
                    className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border rounded-md focus:border-[#007bff] outline-none"
                  />
                  <input
                    type="number"
                    placeholder="CVV"
                    className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border rounded-md focus:border-[#007bff] outline-none"
                  />
                </div>
                <div className="sm:col-span-2 grid sm:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Name of card holder"
                    className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border rounded-md focus:border-[#007bff] outline-none"
                  />
                  <input
                    type="number"
                    placeholder="Postal code"
                    className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border rounded-md focus:border-[#007bff] outline-none"
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="lg:border-l lg:pl-8">
            <h3 className="text-xl font-bold text-[#333]">Summary</h3>
            <ul className="text-[#333] mt-6 space-y-4">
              <li className="flex flex-wrap gap-4 text-sm">
                Delevery Changes :{" "}
                <span className="ml-auto font-bold">{delevery}</span>
              </li>
              <li className="flex flex-wrap gap-4 text-sm">
                Tax : <span className="ml-auto font-bold">{tax}</span>
              </li>
              <li className="flex flex-wrap gap-4 text-base font-bold border-t pt-4">
                Total : <span className="ml-auto">₹{totalPrice}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 mt-10">
          <Link to={"/badge"}>
            <button
              type="button"
              className="px-6 py-3.5 text-sm bg-transparent border text-[#333] rounded-md hover:bg-gray-100"
            >
              Pay later
            </button>
          </Link>
          <button
            type="button"
            className="px-6 py-3.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
