import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import loopForAnimate from './/loopForAnimate'
import { useEffect, useState } from 'react';
import Api from '../api/Api';
import { Link } from 'react-router-dom';

const BannerHome = () => {
    const [movies, setMovies] = useState(null)

    useEffect(() => {
        const movieList = async () => {
            const lists = await Api('movie/popular')
            setMovies(lists)
        }
        movieList()
    }, [])

    const handleSlideChange = () => {
        const cards = document.querySelectorAll('.card-image')
        const headings = document.querySelectorAll('.text-content h1')
        const paragraphs = document.querySelectorAll('.text-content p')
        const buttons = document.querySelectorAll('.button-group button')


        loopForAnimate(cards, 'zoom-out')
        setTimeout(() => {
            loopForAnimate(headings, 'vall-down')
        }, 150);
        setTimeout(() => {
            loopForAnimate(paragraphs, 'vall-down')
        }, 100);
        setTimeout(() => {
            loopForAnimate(buttons, 'vall-down')
        }, 50);
    }

    const handleOnClickTrailer = (event) => {

        const trailers = async () => {
            const trailers = await Api(`movie/${event.target.getAttribute('data-movie')}/videos`)
            trailers.results.map(trailer => {
                if (trailer.type === 'Trailer') {
                    document.querySelector('.trailer-banner-wrapper').style.display = 'block'
                    document.querySelector('.trailer-banner').style.display = 'block'
                    document.querySelector('.trailer-banner').src = `https://www.youtube.com/embed/${trailer.key}`
                }
            })
        }
        trailers()
    }

    const handleOnClickClose = () => {
        document.querySelector('.trailer-banner-wrapper').style.display = 'none'
        document.querySelector('.trailer-banner').src = ''
        document.querySelector('.trailer-banner').style.display = 'none'
    }

    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay]}
                className="mySwiper"
                onSlideChange={handleSlideChange}
            >
                {
                    movies && (
                        movies.results.slice(0, 5).map(movie => {
                            return (
                                <SwiperSlide key={movie.id}>
                                    <div className='banner' style={{ backgroundImage: `url(${process.env.REACT_APP_POSTER}original${movie.backdrop_path})` }}>
                                        <div className='content'>
                                            <div className='text-content'>
                                                <h1>{movie.original_title}</h1>
                                                <p>{movie.overview}</p>
                                                <div className='button-group'>
                                                    <button>
                                                        <Link to={`/detail/movie/${movie.id}`} className='btn-primary'>
                                                            Watch Now
                                                        </Link>
                                                    </button>
                                                    <button onClick={handleOnClickTrailer} data-movie={movie.id} >Watch trailer</button>
                                                </div>
                                            </div>
                                            <div className='card-image' style={{ backgroundImage: `url(${process.env.REACT_APP_POSTER}w500${movie.poster_path})` }}></div>
                                        </div>
                                        <div className='overlay'></div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    )
                }

            </Swiper>
            <div className='trailer-banner-wrapper'>
                <iframe src="" frameBorder="0" className='trailer-banner'></iframe>
                <div className='close' onClick={handleOnClickClose}>
                    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M17.778.808l1.414 1.414L11.414 10l7.778 7.778-1.414 1.414L10 11.414l-7.778 7.778-1.414-1.414L8.586 10 .808 2.222 2.222.808 10 8.586 17.778.808z" fill="#FFF" fillRule="evenodd" /></svg>
                </div>
            </div>
        </>
    )
}

export default BannerHome