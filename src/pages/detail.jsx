"use client";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [restaurantDetail, setRestaurantDetail] = useState(null);

  const getRestaurantDetail = async () => {
    const request = await fetch(
      `https://mock-api-roan.vercel.app/resto/${id}`
    );
    const response = await request.json();
    setRestaurantDetail(response);
  };

  useEffect(() => {
    getRestaurantDetail();
  }, []);

  useEffect(() => {
    console.log("restaurant detail =>", restaurantDetail);
  }, [restaurantDetail]);

  return (
    <div className=" text-center text-xl text-black">
      Restaurant {restaurantDetail?.name}{" "}
    </div>
  );
};

export default Details;
