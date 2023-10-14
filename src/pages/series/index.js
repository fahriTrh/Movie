import { useEffect, useState } from "react";
import Nav from "../../components/Nav"
import Api from '../../api/Api'
import Card from "../../components/Card";
import Footer from "../../components/Footer";

const Series = () => {
    const [series, setSeries] = useState(null)
    const [page, setPage] = useState(1)
    const [query, setQuery] = useState(null)

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, [])

    useEffect(() => {
        const getSeries = async () => {
            const series = await Api('discover/tv', `&vote_count.gte=100&page=${page}`)
            setSeries(series)
        }

        getSeries()
    }, [])

    const cardOnTarget = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    const handleOnClick = async () => {
        const nextPage = page + 1;
        setPage(nextPage);

        if (query) {
            const data = await Api('search/tv', `&query=${query}&page=${nextPage}`);
            if (data) {
                setSeries({
                    ...series,
                    results: [...series.results, ...data.results],
                })
            }
        } else {
            const data = await Api('discover/tv', `&vote_count.gte=100&page=${nextPage}`);
            if (data) {
                setSeries({
                    ...series,
                    results: [...series.results, ...data.results],
                })
            }
        }

    };

    const handleOnChangeForm = (event) => {
        setQuery(event.target.value)
    }

    const handleOnSubmitForm = (event) => {
        if (event.key == 'Enter') {
            if (query) {
                const searchSeries = async () => {
                    const results = await Api(`search/tv`, `&query=${query}`)
                    setSeries(results)
                }
                searchSeries()
            }
        }
    }

    return (
        <div className='App'>
            <header>
                <Nav />
                <div className="banner-movie">
                    <h1>Series</h1>
                </div>
            </header>

            <div className='search-input'>
                <div className='input-wrapp'>
                    <input type="text" placeholder='Search Series' onChange={handleOnChangeForm} onKeyDown={handleOnSubmitForm} />

                    <div className='search-icon'>
                        <svg
                            stroke="dodgerblue"
                            fill="dodgerblue"
                            strokeWidth={0}
                            viewBox="0 0 16 16"
                            height="1.1em"
                            width="1.1em"
                            xmlns="httpww.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"
                            />
                        </svg>

                    </div>
                </div>
            </div>

            <section className='card-container-movie'>
                {
                    series && (
                        series.results.map(tv => {
                            return (
                                <Card key={tv.id} title={tv.original_name} poster={tv.poster_path} detailTo={`/detail/tv/${tv.id}`} onClick={cardOnTarget} />
                            )
                        })
                    )
                }
            </section>

            <div className='btn-loadmore'>
                <button onClick={handleOnClick}>Loadmore</button>
            </div>

            <Footer />
        </div>
    )

}

export default Series