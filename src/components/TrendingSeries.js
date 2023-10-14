import React, { useEffect, useState } from "react"
import Api from "../api/Api"
import Card from "./Card"

const TrendingSeries = () => {
    const [series, setSeries] = useState(null)

    useEffect(() => {
        const seriesList = async () => {
            const list = await Api('tv/popular')
            setSeries(list)
        }
        seriesList()
    }, [])

    return (
        <section className='trending-series'>
            <div className="card-container">
                {
                    series && (series.results.map(tv => {
                        return (
                            <Card key={tv.id} detailTo={`/detail/tv/${tv.id}`} title={tv.original_name} poster={tv.poster_path} />
                        )
                    }))
                }
            </div>
        </section>
    )
}

export default TrendingSeries