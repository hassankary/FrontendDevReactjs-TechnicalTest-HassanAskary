"use client";

import { useEffect, useState } from "react";

export const Navbar = ({ sendCategory, sendChecked }) => {
  const [menuCategory, setMenuCategory] = useState(false);
  const [category, setCategory] = useState("");
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    sendCategory(category);
  }, [category]);

  useEffect(() => {
    sendChecked(checked)
  }, [checked]);

  return (
    <div className="flex justify-between py-3 px-[10%] text-sm text-center border-y">
      <div className="flex items-center space-x-5 font-semibold">
        <h1>Filter by:</h1>
        <div className="flex py-2 border-b space-x-1">
          <input
            type="radio"
            checked={checked}
            onChange={() => setChecked(true)}
          />
          <h1>Open Now</h1>
        </div>
        <button className="px-2 ">Price</button>
        <div>
          <button onClick={() => setMenuCategory(!menuCategory)}>
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
          }}
          className=" uppercase px-5 py-1 border"
        >
          Clear all
        </button>
      </div>
    </div>
  );
};
