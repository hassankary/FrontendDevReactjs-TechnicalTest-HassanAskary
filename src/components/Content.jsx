"use client";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Rate } from "antd";

export const Content = ({ dataResto }) => {
  const [data, setData] = useState(null);
  const [more, setMore] = useState({ a: 0, b: 8 });
  const [category, setCategory] = useState("");
  const [checked, setChecked] = useState(false);
  const [price, setPrice] = useState("");

  useEffect(() => {
    console.log("dataResto =>", dataResto);
    setData(dataResto);
  }, [dataResto]);

  useEffect(() => {
    console.log("category parent =>", category);
  }, [category]);

  useEffect(() => {
    console.log("price=>", price);
  }, [price]);

  useEffect(() => {
    console.log("data ==>", data);
  }, [data]);

  const categoryHandler = (msg) => {
    setCategory(msg);
    if (msg === "") {
      setData(dataResto);
      return;
    }
    const filteredItems =
      checked && price !== ""
        ? dataResto?.filter(
            (d) =>
              d.establishmentTypeAndCuisineTags[0] === msg &&
              d.currentOpenStatusCategory === "OPEN" &&
              d.priceTag === price
          )
        : price !== ""
        ? dataResto?.filter(
            (d) =>
              d.establishmentTypeAndCuisineTags[0] === msg &&
              d.priceTag === price
          )
        : checked
        ? dataResto?.filter(
            (d) =>
              d.establishmentTypeAndCuisineTags[0] === msg &&
              d.currentOpenStatusCategory === "OPEN"
          )
        : dataResto?.filter(
            (d) => d.establishmentTypeAndCuisineTags[0] === msg
          );
    setData(filteredItems);
  };

  const checkedHandler = (data) => {
    setChecked(data);
    if (data === false) {
      setData(dataResto);
      return;
    }
    const filteredItems =
      category !== "" && price !== ""
        ? dataResto?.filter(
            (d) =>
              d.currentOpenStatusCategory === "OPEN" &&
              d.establishmentTypeAndCuisineTags[0] === category &&
              d.priceTag === price
          )
        : category !== ""
        ? dataResto?.filter(
            (d) =>
              d.currentOpenStatusCategory === "OPEN" &&
              d.establishmentTypeAndCuisineTags[0] === category
          )
        : price !== ""
        ? dataResto?.filter(
            (d) =>
              d.currentOpenStatusCategory === "OPEN" && d.priceTag === price
          )
        : dataResto?.filter((d) => d.currentOpenStatusCategory === "OPEN");
    setData(filteredItems);
  };

  const priceHandler = (data) => {
    setPrice(data);
    if (data === "") {
      setData(dataResto);
      return;
    }
    const filteredItems =
      category !== "" && checked
        ? dataResto?.filter(
            (d) =>
              d.priceTag === data &&
              d.establishmentTypeAndCuisineTags[0] === category &&
              d.currentOpenStatusCategory === "OPEN"
          )
        : category !== ""
        ? dataResto?.filter(
            (d) =>
              d.priceTag === data &&
              d.establishmentTypeAndCuisineTags[0] === category
          )
        : checked
        ? dataResto?.filter(
            (d) => d.priceTag === data && d.currentOpenStatusCategory === "OPEN"
          )
        : dataResto?.filter((d) => d.priceTag === data);
    setData(filteredItems);
  };

  return (
    <div className="flex flex-col justify-center">
      <div className="py-12 px-[5%] md:px-[10%] space-y-3">
        <h1 className="font-bold text-3xl ">Resturants</h1>
        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <Navbar
        sendCategory={categoryHandler}
        sendChecked={checkedHandler}
        sendPrice={priceHandler}
      />
      <div className="py-12 px-[5%] md:px-[10%]">
        {!data ? (
          <div className="w-full h-[300px] flex justify-center items-center animate-pulse">
            <div>Loading...</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data?.slice(more.a, more.b).map((d, i) => {
              const imageUrl = `${d.squareImgUrl}`;
              return (
                <div
                  key={i}
                  className="flex flex-col text-black justify-between rounded-xl shadow-xl"
                >
                  <div>
                    <div className="h-[150px]">
                      <img
                        src={imageUrl}
                        alt={d.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="p-2 text-sm">
                      <h1 className="font-semibold text-base">{d.name}</h1>
                      <h1>{d.parentGeoName}</h1>
                      <Rate
                        value={d.averageRating}
                        allowHalf
                        disabled
                        style={{ color: "#172554" }}
                        className="py-1.5 text-[16px]"
                      />
                      <div className="flex justify-between text-xs uppercase">
                        <div className="flex space-x-1">
                          <h1 className="">
                            {d.establishmentTypeAndCuisineTags[0]} •
                          </h1>
                          <h1 className=" text-green-600">{d.priceTag}</h1>
                        </div>
                        <h1>
                          <span
                            className={
                              d.currentOpenStatusCategory === "OPEN"
                                ? "text-green-500"
                                : "text-red-500"
                            }
                          >
                            {"• "}
                          </span>
                          {d.currentOpenStatusCategory
                            ? d.currentOpenStatusCategory
                            : "closed"}
                        </h1>
                      </div>
                    </div>
                  </div>
                  <Link
                    to={`/detail/${d.id}`}
                    className="w-full flex text-white text-xs justify-center py-3 bg-blue-950 hover:bg-blue-900 hover:font-semibold uppercase transition-all"
                  >
                    learn more
                  </Link>
                </div>
              );
            })}
          </div>
        )}
        <div className="w-full flex justify-center py-9 font-semibold ">
          {more.b !== data?.length && more.b < data?.length ? (
            <button
              onClick={
                more.b !== 24
                  ? () => setMore({ ...more, b: more.b + 8 })
                  : () => setMore({ ...more, b: more.b + 6 })
              }
              className="w-[400px] py-2 uppercase text-sm ring-1 active:scale-95 ring-black transition-all"
            >
              load more
            </button>
          ) : (
            <div> You have seen all.</div>
          )}
        </div>
      </div>
    </div>
  );
};
