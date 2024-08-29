"use client";
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

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

  const dataCategory = ["Indian", "Italian", "Chinese", "Lebanese", "Bar"];

  const dataPrice = ["$$ - $$$", "$$$$"];

  return (
    <div className="py-3 px-[5%] md:px-[10%] border-y">
      <div className="max-w-6xl mx-auto flex justify-between text-sm text-center gap-x-1">
        <div className="flex items-center gap-x-1 sm:gap-x-5 font-semibold">
          <h1 className="hidden sm:flex">Filter by:</h1>
          <div
            className={`flex items-center px-2 sm:px-3 py-1 border-b space-x-2 transition-all ${
              checked && "text-white bg-blue-950 rounded-lg"
            }`}
          >
            <input
              type="radio"
              checked={checked}
              onChange={() => setChecked(true)}
            />
            <h1 className="sm:hidden">Open</h1>
            <h1 className="hidden sm:flex">Open Now</h1>
          </div>
          <div>
            <button
              onClick={() => setMenuPrice(!menuPrice)}
              className={`flex items-center px-2 sm:px-3 py-1 border-b space-x-2 sm:space-x-3 transition-all ${
                price !== "" && "text-white bg-blue-950 rounded-lg"
              }`}
            >
              <span>Price</span>
              <IoIosArrowDown
                className={`${
                  menuPrice ? `-rotate-180` : `-rotate-60`
                } transition-all`}
              />
            </button>
            {menuPrice && (
              <div className="w-[69px] sm:w-[81px] absolute flex flex-col font-normal text-green-600 bg-white px-1 py-1 space-y-1 rounded-md transition-all">
                {dataPrice?.map((d, i) => {
                  return (
                    <button
                      key={i}
                      onClick={() => {
                        setPrice(d);
                        setMenuPrice(false);
                      }}
                      className={`${
                        price === `${d}` && "bg-gray-200 rounded-md"
                      } px-0.5 text-left`}
                    >
                      {i === 0 ? "$$" : d}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
          <div>
            <button
              onClick={() => setMenuCategory(!menuCategory)}
              className={`flex items-center px-2 sm:px-3 py-1 space-x-2 sm:space-x-3 border-b transition-all ${
                category !== "" && "text-white bg-blue-950 rounded-lg"
              }`}
            >
              <span>Categories</span>
              <IoIosArrowDown
                className={`${
                  menuCategory ? `-rotate-180` : `-rotate-60`
                } transition-all`}
              />
            </button>
            {menuCategory && (
              <div className="w-[105px] sm:w-[117px] absolute flex flex-col font-normal bg-white px-1 py-1 space-y-1 rounded-md">
                {dataCategory?.map((d, i) => {
                  return (
                    <button
                      key={i}
                      onClick={() => {
                        setCategory(d);
                        setMenuCategory(false);
                      }}
                      className={`${
                        category === `${d}` && "bg-gray-200 rounded-sm"
                      } px-1 text-left`}
                    >
                      {d}
                    </button>
                  );
                })}
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
              setMenuPrice(false);
              setMenuCategory(false);
            }}
            className="uppercase px-3 sm:px-5 py-1 border active:scale-95 transition-all"
          >
            <span className="hidden sm:flex transition-all">Clear all</span>
            <span className="flex sm:hidden transition-all">Clear</span>
          </button>
        </div>
      </div>
    </div>
  );
};
