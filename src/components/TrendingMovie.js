import React, { useEffect, useState } from "react"
import Card from "./Card"
import Api from "../api/Api"

const TrendingMovies = () => {
    const [movies, setMovies] = useState(null)

    useEffect(() => {
        const movielist = async () => {
            const list = await Api('movie/popular')
            setMovies(list)
        }

        movielist()
    }, [])

    return (
        <section className='trending-movie'>
            <div className="card-container">
                {
                    movies && (movies.results.map(movie => {
                        return (
                            <Card key={movie.id} detailTo={`/detail/movie/${movie.id}`} poster={movie.poster_path} title={movie.original_title} />
                        )
                    }))
                }
            </div>
        </section>
    )
}

export default TrendingMovies