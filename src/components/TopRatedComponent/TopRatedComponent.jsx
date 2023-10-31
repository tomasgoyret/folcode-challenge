import React, { useEffect, useState } from 'react'
import MoviesCarousel from '../MoviesCarousel/MoviesCarousel';

const TopRatedComponent = ({ onClick }) => {


    return (
        <>
            <h3 className="w-full text-sm md:text-base flex justify-center py-8">Las mas valoradas</h3>
            <MoviesCarousel url={"top_rated?language=es-US&page=1"} onClick={onClick} />
        </>
    )
}

export default TopRatedComponent