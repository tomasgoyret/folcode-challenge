"use client";
import React, { useEffect, useState } from "react";
import "./page.css";
import UiImage from "@/components/UiImage";
import UiModal from "@/components/UiModal/UiModal";
import UiLoader from "@/components/UiLoader/UiLoader";
import NowPlayingComponent from "@/components/NowPlayingComponent/NowPlayingComponent";
import MostRankedComponent from "@/components/TopRatedComponent/TopRatedComponent";
import TopRatedComponent from "@/components/TopRatedComponent/TopRatedComponent";
import Upcoming from "@/components/UpcomingComponent/Upcoming";
import MoviesCarousel from "@/components/MoviesCarousel/MoviesCarousel";

const Home = () => {

  const [movie, setMovie] = useState();
  const [visible, setVisible] = useState(false);

  const handleSelectedMovie = (movie) => {
    setMovie(movie);
    setVisible(true);
  }

  return (
    <>
      <h1 className="flex text-base justify-center text-white md:text-4xl m-4">Movies App</h1>
      <h2 className="flex text-sm justify-center text-white md:text-2xl m-4">Elige tus películas y series favoritas</h2>

      <NowPlayingComponent onClick={handleSelectedMovie} />
      <TopRatedComponent onClick={handleSelectedMovie} />
      <Upcoming onClick={handleSelectedMovie} />

      {movie && (
        <UiModal
          movie={movie}
          visible={visible}
          onHide={() => setVisible(false)}
        />
      )}

    </>
  );
};

export default Home;
