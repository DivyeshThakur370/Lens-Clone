"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useLogin } from "../../Hooks/useLogin";
import { Link } from "react-router-dom";

const AddToCard = () => {
  const { user } = useLogin();
  const [card, setcard] = useState([]);
  const [quantity, setQuantity] = useState({});

  const totalPrice = card.reduce(
    (acc, item) => acc + (Number(item.price) || 0) * (quantity[item._id] || 1),
    0
  );

  const deleteData = (productid) => {
    if (!productid) return;
    axios
      .delete(`http://localhost:8080/addtocart/delete/${productid}`, {
        withCredentials: true,
      })
      .then(() => {
        alert("Delete Data Success");
        addTOCard();
      })
      .catch((errr) => console.error(errr));
  };

  const addTOCard = () => {
    axios
      .get(`http://localhost:8080/addtocart/get`, {
        withCredentials: true,
      })
      .then((res) => setcard(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    addTOCard();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!user) {
    return (
      <main className="font-sans min-h-[60vh] flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <div className="mb-4 rounded-md border border-amber-200 bg-amber-50 px-4 py-3 text-amber-800">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-400 text-white text-xs">
                !
              </span>
              <div>
                <p className="text-sm font-medium">Please login first</p>
                <p className="text-sm opacity-90">
                  You need to be signed in to view your cart and proceed to
                  checkout.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-white p-6 shadow-sm">
            <h1 className="text-xl font-semibold text-gray-900">
              Sign in required
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              Access your saved items, track discounts, and complete your
              purchase.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <Link
                to="/"
                className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 transition-colors hover:bg-gray-50"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <div className="font-sans px-8">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-gray-200 px-5 py-3">
        <div className="flex items-center">
          <img
            className="h-10"
            src="https://static.lenskart.com/media/desktop/img/site-images/main_logo.svg"
            alt="Lenskart Logo"
          />
        </div>
        <div className="flex items-center">
          <span className="text-sm text-emerald-600">100% safe and secure</span>
        </div>
      </header>

      {/* Cart title */}
      <div className="my-2">
        <span className="ml-5 text-lg font-bold">
          Cart ({card.length} item{card.length !== 1 ? "s" : ""})
        </span>
      </div>

      {/* Content */}
      <div className="flex w-full flex-col gap-4 md:flex-row md:justify-between">
        {/* Left: Items list */}
        <div className="w-full md:basis-2/3">
          <div className="w-full rounded-md border border-gray-200 bg-white p-5">
            {card.map((obj, idx) => {
              const productQty = quantity[obj._id] || 1; // default to 1

              const increaseQty = () => {
                setQuantity((prev) => ({ ...prev, [obj._id]: productQty + 1 }));
              };

              const decreaseQty = () => {
                setQuantity((prev) => ({
                  ...prev,
                  [obj._id]: productQty > 1 ? productQty - 1 : 1,
                }));
              };
              return (
                <div
                  key={obj?._id ?? obj?.id ?? idx}
                  className="border-b border-gray-200 pb-5 mb-5 last:mb-0 last:border-none last:pb-0"
                >
                  <div className="flex flex-col md:flex-row">
                    <img
                      src={obj.imageUrl || "/placeholder.svg"}
                      alt="Blue Block Screen Glasses"
                      className="mb-5 h-auto w-full md:mb-0 md:h-24 md:w-auto md:mr-5"
                    />
                    <div className="flex-1">
                      <span className="mb-2 block text-sm font-bold md:text-base">
                        {obj.brand}: {obj.sizeCollection}
                        <br />
                        {obj.reviews} , {obj.rating}
                      </span>
                      <span className="mb-1 block text-sm md:text-base">
                        Final Price ₹{obj.price}
                      </span>
                      <span className="mb-1 block text-sm md:text-base">
                        total : ₹{obj.price * productQty}
                      </span>
                      <div className="mt-2 flex items-center gap-4 text-sm">
                        {/* Remove Button */}
                        <button
                          type="button"
                          onClick={() => deleteData(obj?._id)}
                          className="text-red-600 hover:text-red-800 hover:underline font-medium"
                        >
                          Remove
                        </button>

                        {/* Quantity Controls */}
                        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                          <button
                            onClick={decreaseQty}
                            type="button"
                            className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold"
                          >
                            -
                          </button>

                          <span className="px-4 py-1 text-gray-800 font-medium">
                            {productQty}
                          </span>

                          <button
                            onClick={increaseQty}
                            type="button"
                            className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {card.length === 0 && (
              <div className="text-center text-sm text-gray-600">
                Your cart is empty.
              </div>
            )}
          </div>
        </div>

        {/* Right: Bill details */}
        <div className="w-full md:basis-1/3">
          <div className="w-full rounded-md border border-gray-200 bg-white p-5">
            <div className="mb-5 text-lg font-bold">Bill Details</div>

            <div className="mb-2 flex items-center justify-between">
              <span>Total item price</span>
              <span>₹{totalPrice}</span>
            </div>

            <div className="mb-2 flex items-center justify-between">
              <span>Total discount</span>
              <span>-₹{(totalPrice * 25) / 100}</span>
            </div>

            <div className="mb-3 flex items-center justify-between text-base font-bold">
              <span>Total payable</span>
              <span>₹{totalPrice - (totalPrice * 25) / 100}</span>
            </div>

            <div className="mb-5 flex items-center justify-between">
              <span className="text-sm">LKFLASH applied</span>
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600">
                  You are saving ₹{(totalPrice * 25) / 100}
                </span>
                <a href="#" className="text-blue-600 hover:underline">
                  REMOVE
                </a>
              </div>
            </div>

            <button
              type="button"
              className="w-full rounded-md bg-emerald-500 px-4 py-2 text-white transition-colors hover:bg-emerald-600"
            >
              Proceed To Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCard;
