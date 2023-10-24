"use client";
import React from "react";
import { useState } from "react";
import UiImage from "@/components/UiImage";

const Home = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <section className="relative flex w-full h-[430px]">
        <UiImage
          url="https://th.bing.com/th/id/OIP.4SHV3qmzMoDXhqgTm24YJQHaEo?pid=ImgDet&rs=1"
          addClassname={
            "w-0 grow object-cover opacity-60 transition-all duration-300 ease-linear hover:opacity-100 hover:w-[300px] hover:contrast-125 "
          }
          onClick={(e) => setShow(!show)}
        />
        <UiImage
          url="https://th.bing.com/th/id/OIP.4SHV3qmzMoDXhqgTm24YJQHaEo?pid=ImgDet&rs=1"
          addClassname={
            "w-0 grow object-cover opacity-60 transition-all duration-300 ease-linear hover:opacity-100 hover:w-[300px] hover:contrast-125 "
          }
          onClick={(e) => setShow(!show)}
        />
        <UiImage
          url="https://th.bing.com/th/id/OIP.4SHV3qmzMoDXhqgTm24YJQHaEo?pid=ImgDet&rs=1"
          addClassname={
            "w-0 grow object-cover opacity-60 transition-all duration-300 ease-linear hover:opacity-100 hover:w-[300px] hover:contrast-125 "
          }
          onClick={(e) => setShow(!show)}
        />
        <UiImage
          url="https://th.bing.com/th/id/OIP.4SHV3qmzMoDXhqgTm24YJQHaEo?pid=ImgDet&rs=1"
          addClassname={
            "w-0 grow object-cover opacity-60 transition-all duration-300 ease-linear hover:opacity-100 hover:w-[300px] hover:contrast-125 "
          }
          onClick={(e) => setShow(!show)}
        />
        <UiImage
          url="https://th.bing.com/th/id/OIP.4SHV3qmzMoDXhqgTm24YJQHaEo?pid=ImgDet&rs=1"
          addClassname={
            "w-0 grow object-cover opacity-60 transition-all duration-300 ease-linear hover:opacity-100 hover:w-[300px] hover:contrast-125 "
          }
          onClick={(e) => setShow(!show)}
        />
        <UiImage
          url="https://th.bing.com/th/id/OIP.4SHV3qmzMoDXhqgTm24YJQHaEo?pid=ImgDet&rs=1"
          addClassname={
            "w-0 grow object-cover opacity-60 transition-all duration-300   ease-linear hover:opacity-100 hover:w-[300px] hover:contrast-125 "
          }
          onClick={(e) => setShow(!show)}
        />
      </section>
    </>
  );
};

export default Home;
