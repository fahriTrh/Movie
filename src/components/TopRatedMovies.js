import { useEffect, useState } from "react"
import Api from "../api/Api"
import Card from "./Card"

const TopRatedMovies = () => {
    const [movies, setMovies] = useState(null)

    useEffect(() => {
        const movielist = async () => {
            const list = await Api('movie/top_rated')
            setMovies(list)
        }

        movielist()
    }, [])

    return (
        <section className='top-rated-movie'>
            <div className="card-container">
                {
                    movies && (
                        movies.results.map(movie => {
                            return (
                                <Card key={movie.id} detailTo={`/detail/movie/${movie.id}`} poster={movie.poster_path} title={movie.original_title} />
                            )
                        })
                    )
                }
            </div>
        </section>
    )
}

export default TopRatedMovies