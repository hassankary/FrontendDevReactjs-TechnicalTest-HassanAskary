"use client";

import { Rate } from "antd";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MdLocationPin } from "react-icons/md";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { MdFastfood } from "react-icons/md";

const Details = () => {
  const { id } = useParams();
  const [restaurantDetail, setRestaurantDetail] = useState(null);
  const [imgSrc, setImgSrc] = useState(null);

  const getRestaurantDetail = async () => {
    const request = await fetch(`https://mock-api-roan.vercel.app/resto/${id}`);
    const response = await request.json();
    setRestaurantDetail(response);
    setImgSrc(response.heroImgUrl || "/no-image.png");
  };

  useEffect(() => {
    getRestaurantDetail();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="px-[5%] sm:px-[10%] my-5">
      <div className="max-w-6xl mx-auto flex flex-col text-start">
        <div className="flex text-xl my-2">
          <Link to={`/`} className="flex items-center justify-center gap-2">
            <BsArrowLeftSquareFill className="h-8 w-8" />
            <span>Back</span>
          </Link>
        </div>
        <div className="py-2 text-sm text-black">
          <h1 className="font-bold text-3xl py-1 ">
            {restaurantDetail?.name}{" "}
          </h1>
          <div className="flex items-center divide-x">
            <Rate
              value={restaurantDetail?.averageRating}
              allowHalf
              disabled
              style={{ color: "#172554" }}
              className="flex flex-nowrap py-1.5 text-[16px] pr-2"
            />
            <h1 className="text-nowrap px-2 font-semibold">
              {restaurantDetail?.userReviewCount} reviews
            </h1>
            <h1 className="px-2 text-nowrap">{restaurantDetail?.priceTag}</h1>
            <div className="hidden sm:flex items-center px-2 space-x-2 overflow-hidden truncate">
              <MdFastfood className="w-[15px] h-[15px]" />
              {restaurantDetail?.establishmentTypeAndCuisineTags.map((d, i) => {
                return (
                  <h1 key={i} className="text-nowrap">
                    {d}
                    {i !==
                    restaurantDetail?.establishmentTypeAndCuisineTags.length - 1
                      ? ","
                      : "."}
                  </h1>
                );
              })}
            </div>
          </div>
          <div className="flex items-center sm:hidden mb-1 space-x-1 overflow-hidden truncate">
            <MdFastfood className="w-[15px] h-[15px]" />
            {restaurantDetail?.establishmentTypeAndCuisineTags.map((d, i) => {
              return (
                <h1 key={i} className="text-nowrap">
                  {d}
                  {i !==
                  restaurantDetail?.establishmentTypeAndCuisineTags.length - 1
                    ? ","
                    : "."}
                </h1>
              );
            })}
          </div>
          <div className="flex items-center space-x-1">
            <MdLocationPin className="w-4 h-4" />
            <span>{restaurantDetail?.parentGeoName}</span>
          </div>
        </div>
        <div className="h-[400px] w-full my-2 flex gap-2">
          <div className="flex justify-center items-center w-2/3 text-white bg-[#F2F2F2] overflow-hidden rounded-l-xl">
            <img
              src={imgSrc}
              alt={`${restaurantDetail?.name} Pic`}
              onError={() => setImgSrc("/no-image.png")}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-1/3 flex flex-col gap-2 overflow-hidden rounded-r-xl ">
            <div className="flex h-1/2">
              <img
                src={"/no-image.png"}
                alt={`${restaurantDetail?.name} Pic 2`}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex h-1/2">
              <img
                src={"/no-image.png"}
                alt={`${restaurantDetail?.name} Pic 3`}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
        <div className="py-2">
          <div className="flex flex-col lg:flex-row p-6 border rounded-xl">
            <div className="w-full lg:w-2/5 flex flex-col font-bold mb-5">
              <h1>Ratings and review</h1>
              <div className="flex items-center gap-2">
                <p className="flex text-2xl">
                  {restaurantDetail?.averageRating}
                </p>
                <Rate
                  value={restaurantDetail?.averageRating}
                  allowHalf
                  disabled
                  style={{ color: "#172554" }}
                  className="text-[16px]"
                />
                <h1 className="font-semibold">
                  {restaurantDetail?.userReviewCount} reviews
                </h1>
              </div>
            </div>
            <div className="w-full lg:w-3/5 -mt-0 lg:-mt-3 border-t lg:border-t-0 divide-y">
              {restaurantDetail?.reviewSnippets?.reviewSnippetsList?.map(
                (d, i) => {
                  return (
                    <div className="flex flex-col py-4 space-y-2">
                      <div className="flex gap-2">
                        <div className="h-9 w-9 overflow-hidden rounded-full">
                          <img
                            src={"/dummy.jpg"}
                            alt={`User Pic ${i}`}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="flex flex-col justify-center text-xs">
                          <h1 className="font-bold text-sm">User</h1>
                          <p className=" font-normal">
                            <span className="font-semibold">2</span>{" "}
                            contributions
                          </p>
                        </div>
                      </div>
                      <div>
                        <Rate
                          value={restaurantDetail?.averageRating}
                          allowHalf
                          disabled
                          style={{ color: "#172554" }}
                          className="text-[16px]"
                        />
                        <p>{d.reviewText}</p>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
