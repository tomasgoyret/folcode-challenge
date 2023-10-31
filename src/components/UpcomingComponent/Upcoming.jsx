import UiImage from '../UiImage';

import { Carousel } from 'primereact/carousel';
import MoviesCarousel from '../MoviesCarousel/MoviesCarousel';

const Upcoming = ({ onClick }) => {

    return (
        <>
            <h3 className="w-full text-sm md:text-base flex justify-center py-8">Proximamente</h3>
            <MoviesCarousel url={"upcoming?language=en-US&page=1"} onClick={onClick} />
        </>
    )
}

export default Upcoming