import React, { useEffect, useState } from "react"
import Footer from "../../components/Footer"
import Nav from "../../components/Nav"
import loopForAnimate from "../../components/loopForAnimate"
import Api from "../../api/Api"
import { useParams } from "react-router"
import Card from "../../components/Card"

const DetailTv = () => {
    const { id } = useParams()
    const [tv, setTv] = useState(null)
    const [credits, setCredits] = useState(null)
    const [trailers, setTrailers] = useState(null)
    const [similars, setSimilars] = useState(null)

    const headings = document.querySelectorAll('.single-content h2')
    const genres = document.querySelectorAll('.genre .item')
    const descriptions = document.querySelectorAll('.single-content .description')
    const topCastCards = document.querySelectorAll('.topcast-card .item')
    const cardImage = document.querySelectorAll('.single-card-image')

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, [])

    useEffect(() => {

        setTimeout(() => {
            loopForAnimate(headings, 'vall-down')
        }, 150);

        setTimeout(() => {
            loopForAnimate(cardImage, 'vall-down')
        }, 170);

        setTimeout(() => {
            loopForAnimate(genres, 'vall-down')
        }, 100);

        setTimeout(() => {
            loopForAnimate(descriptions, 'vall-down')
        }, 50);

        setTimeout(() => {
            loopForAnimate(topCastCards, 'vall-down')
        }, 25);

    }, [id])

    useEffect(() => {
        const detailTv = async () => {
            const tv = await Api(`tv/${id}`)
            setTv(tv)
        }

        detailTv()
    }, [tv])

    useEffect(() => {
        const getCredits = async () => {
            const credits = await Api(`tv/${id}/credits`)
            setCredits(credits)
        }

        getCredits()
    }, [credits])

    useEffect(() => {
        const trailers = async () => {
            const trailer = await Api(`tv/${id}/videos`)
            setTrailers(trailer)
        }

        trailers()
    }, [trailers])

    useEffect(() => {
        const similars = async () => {
            const similar = await Api(`tv/${id}/similar`)
            setSimilars(similar)
        }

        similars()
    }, [])

    const handleOnClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <div className='App'>
            <header>
                <Nav />
                {
                    tv && (

                        <div className='single-banner' style={{ backgroundImage: `url(${process.env.REACT_APP_POSTER}original${tv.backdrop_path})` }}>
                            <div className='wrapp'>
                                <div className='single-card-image' style={{ backgroundImage: `url(${process.env.REACT_APP_POSTER}w500${tv.poster_path})` }}></div>

                                <div className='single-content'>
                                    <h2>{tv.original_name}</h2>

                                    <div className='genre'>
                                        {
                                            tv.genres.map(genre => {
                                                return (
                                                    <div className="item" key={genre.id}><p>{genre.name}</p></div>
                                                )
                                            })
                                        }
                                    </div>

                                    <div className='description'>
                                        <p>{tv.overview}</p>
                                    </div>

                                    <h3>Top Cast</h3>
                                    <div className='topcast-card'>
                                        {
                                            credits && (
                                                credits.cast.slice(0, 5).map(cast => {
                                                    return (
                                                        <div key={cast.id} className="item" style={{ backgroundImage: `url(${process.env.REACT_APP_POSTER}w500${cast.profile_path})` }}><p>{cast.original_name}</p></div>
                                                    )
                                                })
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </header>

            <section className='trailer'>

                {
                    trailers && (
                        trailers.results.map(trailer => {
                            return (
                                <div key={trailer.id}>
                                    <h2>{trailer.type}</h2>
                                    <iframe
                                        src={`https://www.youtube.com/embed/${trailer.key}`}
                                        frameBorder={0}
                                        allowFullScreen={true}
                                        style={
                                            {pointerEvents: `auto`}
                                        }
                                    />
                                </div>
                            )
                        })
                    )
                }

            </section>

            <div className='movie-section'>
                <h1>Similar Series</h1>
            </div>
            <section className='trending-movie'>
                <div className="card-container">
                    {
                        similars && (
                            similars.results.map(similar => {
                                return (
                                    <Card onClick={handleOnClick} key={similar.id} title={similar.original_title} detailTo={`/detail/tv/${similar.id}`} poster={similar.poster_path} />
                                )
                            })
                        )
                    }
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default DetailTv