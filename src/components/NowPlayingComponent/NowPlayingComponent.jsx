import MoviesCarousel from '../MoviesCarousel/MoviesCarousel';

const NowPlayingComponent = ({ onClick }) => {

    return (
        <>
            <h3 className="w-full text-sm md:text-base flex justify-center py-8">En cartelera</h3>
            <MoviesCarousel url={"now_playing?language=en-US&page=1"} onClick={onClick} />
        </>
    )
}

export default NowPlayingComponent