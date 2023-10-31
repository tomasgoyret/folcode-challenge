import React from 'react'
import UiImage from '../UiImage'

const UiMovieDetail = (props) => {
    return (
        <div className='flex flex-col md:flex-row gap-2'>
            <UiImage addClassname={" min-h-fit md:w-72 rounded-md shadow-white shadow-[15px_15px_15px_-15px_rgba(0,0,0,0.3)]"} url={`${process.env.NEXT_IMAGE_URL}/${props?.posterPath}`}
            />
            <div className='flex flex-col  gap-4 p-8'>
                <div className='text-sm md:text-base'><strong>Descripción:</strong> {props.overview}</div>
                <div className='text-sm md:text-base'><strong>Lanzamiento:</strong> {props.releaseDate}</div>
                <div className='text-sm md:text-base'><strong>Duración:</strong> {props.runtime} minutos</div>
            </div>
        </div>
    )
}

export default UiMovieDetail