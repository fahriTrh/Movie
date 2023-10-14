import { useEffect, useState } from "react"
import Api from "../api/Api"
import Card from "./Card"

const TopRatedSeries = () => {
    const [topSeries, setTopSeries] = useState(null)


    useEffect(() => {
        const topSeries = async () => {
            const series = await Api('tv/top_rated')

            setTopSeries(series)
        }

        topSeries()
    })


    return (
        <section className='trending-movie'>
            <div className="card-container">
                {
                    topSeries && (
                        topSeries.results.map(series => {
                            return (
                                <Card key={series.id} detailTo={`/detail/tv/${series.id}`} title={series.original_name} poster={series.poster_path} />
                            )
                        })
                    )
                }
            </div>
        </section>
    )
}

export default TopRatedSeries