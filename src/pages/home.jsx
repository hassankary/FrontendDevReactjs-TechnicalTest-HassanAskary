"use client";

import { useEffect, useState } from "react";
import { Content } from "../components/Content";

const Home = () => {
  const [dataResto, setDataResto] = useState(null);

  //   const getResto = async () => {
  //     // I encountered a 'Too Many Requests' error with the API from RapidAPI.
  //     // I changed the fetch URL to a JSON server that I deployed on Vercel
  //     const url =
  //       "https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchRestaurants?locationId=304554";
  //     const options = {
  //       method: "GET",
  //       headers: {
  //         "x-rapidapi-key": "3dd4881ab3mshf7868525a929ee3p153d2cjsnd923c50ac8fd",
  //         "x-rapidapi-host": "tripadvisor16.p.rapidapi.com",
  //       },
  //     };

  //     try {
  //       const response = await fetch(url, options);
  //       const result = await response.json();
  //       setDataResto(result.data.data)
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  const getResto = async () => {
    const request = await fetch(`https://mock-api-roan.vercel.app/resto`);
    const response = await request.json();
    setDataResto(response);
  };

  useEffect(() => {
    getResto();
  }, []);

  return (
    <div className="flex flex-col font-sans min-h-screen">
      <Content dataResto={dataResto} />
    </div>
  );
};

export default Home;
