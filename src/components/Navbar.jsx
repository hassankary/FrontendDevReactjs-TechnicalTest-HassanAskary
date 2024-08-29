"use client";

import { useEffect, useState } from "react";

export const Navbar = ({ sendCategory, sendChecked, sendPrice }) => {
  const [menuCategory, setMenuCategory] = useState(false);
  const [category, setCategory] = useState("");
  const [menuPrice, setMenuPrice] = useState(false);
  const [price, setPrice] = useState("");
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    sendCategory(category);
  }, [category]);

  useEffect(() => {
    sendChecked(checked);
  }, [checked]);

  useEffect(() => {
    sendPrice(price);
  }, [price]);

  return (
    <div className="flex justify-between py-3 px-[10%] text-sm text-center border-y">
      <div className="flex items-center space-x-5 font-semibold">
        <h1>Filter by:</h1>
        <div
          className={`flex px-3 py-1 border-b space-x-2 transition-all ${
            checked && "text-white bg-blue-950 rounded-lg"
          }`}
        >
          <input
            type="radio"
            checked={checked}
            onChange={() => setChecked(true)}
          />
          <h1>Open Now</h1>
        </div>
        <div>
          <button
            onClick={() => setMenuPrice(!menuPrice)}
            className={`px-3 py-1 border-b transition-all ${
              price !== "" && "text-white bg-blue-950 rounded-lg"
            }`}
          >
            Price
          </button>
          {menuPrice && (
            <div className="absolute flex flex-col font-normal text-green-600 bg-white px-2 py-1 rounded-md">
              <button
                onClick={() => {
                  setPrice("$$ - $$$");
                  setMenuPrice(false);
                }}
                className="text-left"
              >
                $$
              </button>
              <button
                onClick={() => {
                  setPrice("$$$$");
                  setMenuPrice(false);
                }}
                className="text-left"
              >
                $$$$
              </button>
            </div>
          )}
        </div>
        <div>
          <button
            onClick={() => setMenuCategory(!menuCategory)}
            className={`px-3 py-1 border-b transition-all ${
              category !== "" && "text-white bg-blue-950 rounded-lg"
            }`}
          >
            Categories
          </button>
          {menuCategory && (
            <div className="absolute flex flex-col font-normal bg-white px-2 py-1 rounded-md">
              <button
                onClick={() => {
                  setCategory("Indian");
                  setMenuCategory(false);
                }}
                className="text-left"
              >
                Indian
              </button>
              <button
                onClick={() => {
                  setCategory("Italian");
                  setMenuCategory(false);
                }}
                className="text-left"
              >
                Italian
              </button>
              <button
                onClick={() => {
                  setCategory("Chinese");
                  setMenuCategory(false);
                }}
                className="text-left"
              >
                Chinese
              </button>
              <button
                onClick={() => {
                  setCategory("Lebanese");
                  setMenuCategory(false);
                }}
                className="text-left"
              >
                Lebanese
              </button>
              <button
                onClick={() => {
                  setCategory("Bar");
                  setMenuCategory(false);
                }}
                className="text-left"
              >
                Bar
              </button>
            </div>
          )}
        </div>
      </div>
      <div>
        <button
          onClick={() => {
            setCategory("");
            setChecked(false);
            setPrice("");
          }}
          className=" uppercase px-5 py-1 border active:scale-95 transition-all"
        >
          Clear all
        </button>
      </div>
    </div>
  );
};
