import { Dialog } from "primereact/dialog";
import React, { useEffect, useState } from "react";
import UiLoader from "../UiLoader/UiLoader";
import "./UiModal.css"
import UiMovieDetail from "../UiMovieDetail/UiMovieDetail";

const getMovie = (id) => {
  return fetch(`${process.env.NEXT_API_BASE_URL}/${id}?language=en-US`, {
    headers: {
      Authorization:
        process.env.NEXT_API_KEY,
    },
  })
    .then((res) => res.json())
    .catch((err) => { throw new Error })
};

const UiModal = (props) => {
  const [movie, setMovie] = useState({});
  const [isLoading, setLoading] = useState(false)
  const [isError, setError] = useState(false)


  useEffect(() => {
    setLoading(true)
    getMovie(props.movie.id)
      .then((data) => {
        setMovie(data);
      })
      .catch((error) => {
        setError(true)
        console.log(error)
      })
      .finally(() => setLoading(false));
  }, [props.movie]);

  return (
    <Dialog
      header={props.movie.title}
      visible={props.visible}
      onHide={props.onHide}
    >
      <div className="flex flex-col justify-center h-full items-center">
        {isLoading ? <UiLoader /> : isError ? (<div className='flex justify-center'><h3 className='p-4 text-center border-red-500 border-2 text-red-500 w-full'>Ocurrió un error cargando &quot;{props.movie.title}&quot;</h3></div>) : <UiMovieDetail movie={movie} posterPath={movie.poster_path} originalTitle={movie.original_title} overview={movie.overview} releaseDate={movie.release_date} runtime={movie.runtime} />}
      </div>
    </Dialog>
  );
};

export default UiModal;
