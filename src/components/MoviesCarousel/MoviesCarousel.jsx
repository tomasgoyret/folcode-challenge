import React, { useEffect, useState } from 'react'
import UiImage from '../UiImage';
import UiLoader from '../UiLoader/UiLoader';
import { Carousel } from 'primereact/carousel';
import { getData } from '@/app/utils';

const MoviesCarousel = ({ url, onClick }) => {

    const [currentMovies, setCurrentMovies] = useState([]);
    const [isError, setError] = useState(false)
    const [isLoading, setLoading] = useState(false)

    const responsiveOptions = [
        {
            breakpoint: '991px',
            numVisible: 4,
            numScroll: 2
        },
        {
            breakpoint: '767px',
            numVisible: 3,
            numScroll: 2
        },
        {
            breakpoint: '575px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '400px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    useEffect(() => {

        setLoading(true)
        getData(url)
            .then((data) => {
                setCurrentMovies(data.results);
            })
            .catch((err) => setError(true))
            .finally(() => setLoading(false))

    }, [url]);



    const itemTemplate = (movie) => {
        return <>
            <UiImage
                url={`${process.env.NEXT_IMAGE_URL}/${movie?.poster_path}`}
                onClick={() => onClick(movie)}
                addClassname={'transition-all sepia hover:sepia-0 opacity-80 hover:opacity-100 cursor-pointer '}
            />
        </>
    }


    return (
        <>
            {isLoading ? <div className='flex justify-center items-center min-h-[100px]'><UiLoader /></div> : isError ? (<div className='flex justify-center'><h3 className=' text-center border-red-500 border-2 text-red-500 w-1/2'>Ocurrió un error cargando las películas</h3></div>) : (<div className='flex justify-center'>
                <Carousel autoplayInterval={4000} value={currentMovies} responsiveOptions={responsiveOptions} numVisible={7} numScroll={3} style={{ maxWidth: '80%' }} itemTemplate={itemTemplate} />
            </div>)}
        </>
    )
}

export default MoviesCarousel