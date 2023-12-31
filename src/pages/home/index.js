import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import BannerHome from '../../components/BannerHome';
import Nav from '../../components/Nav';
import TrendingMovies from '../../components/TrendingMovie';
import TopRatedMovies from '../../components/TopRatedMovies';
import TrendingSeries from '../../components/TrendingSeries';
import TopRatedSeries from '../../components/TopRatedSeries';


const Home = () => {
    // const [movies]



    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
    }, [])

    return (
        <div className="App">
            <header>
                <Nav />
                <BannerHome />
            </header>

            <div className='movie-section'>
                <h1>Trending Movies</h1>

                <Link to='/movies'>View all</Link>
            </div>
            <TrendingMovies />

            <div className='movie-section'>
                <h1>Top rated Movies</h1>

                <Link to='/movies'>View all</Link>
            </div>
            <TopRatedMovies />

            <div className='movie-section'>
                <h1>Trending Series</h1>

                <Link to='/series'>View all</Link>
            </div>
           <TrendingSeries /> 

            <div className='movie-section'>
                <h1>Top rated Series</h1>

                <Link to='/series'>View all</Link>
            </div>
            <TopRatedSeries />

            <Footer />


        </div>
    )
}

export default Home;