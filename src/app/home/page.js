"use client";
import React from "react";
import "./page.css";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <section>
        <Image
          src="https://th.bing.com/th/id/OIP.4SHV3qmzMoDXhqgTm24YJQHaEo?pid=ImgDet&rs=1"
          alt="Next.js Logo"
          width={600}
          height={430}
        />
        <Image
          src="https://th.bing.com/th/id/OIP.4SHV3qmzMoDXhqgTm24YJQHaEo?pid=ImgDet&rs=1"
          alt="Next.js Logo"
          width={600}
          height={430}
        />
        <Image
          src="https://th.bing.com/th/id/OIP.4SHV3qmzMoDXhqgTm24YJQHaEo?pid=ImgDet&rs=1"
          alt="Next.js Logo"
          width={600}
          height={430}
          onClick={(e) => {
            alert("Vamos lio");
          }}
        />
        <Image
          src="https://th.bing.com/th/id/OIP.4SHV3qmzMoDXhqgTm24YJQHaEo?pid=ImgDet&rs=1"
          alt="Next.js Logo"
          width={600}
          height={430}
        />
        <Image
          src="https://th.bing.com/th/id/OIP.4SHV3qmzMoDXhqgTm24YJQHaEo?pid=ImgDet&rs=1"
          alt="Next.js Logo"
          width={600}
          height={430}
        />
      </section>
    </>
  );
};

export default Home;
