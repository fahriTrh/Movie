import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';


const Nav = () => {
    // show / hide Nav
    const [navDisplay, setNavDisplay] = useState('flex');
    const [navOpacity, setNavOpacity] = useState('1');

    useEffect(() => {

        document.querySelector('nav').style.display = navDisplay;
        document.querySelector('nav').style.opacity = navOpacity;

        window.addEventListener('resize', () => {

            if (window.innerWidth >= 768) {
                setNavDisplay('flex')
            }

        })

        if (navDisplay == 'flex') {
            document.querySelector('.offcanvas').style.opacity = '0'

            setTimeout(() => {
                document.querySelector('.offcanvas').style.display = 'none'
            }, 300);

        } else {
            document.querySelector('.offcanvas').style.display = 'block'
            setTimeout(() => {
                document.querySelector('.offcanvas').style.opacity = '1'
            }, 300);
        }


    }, [navDisplay])

    const handleMenuClick = () => {
        setNavOpacity('0')

        setTimeout(() => {
            setNavDisplay('none');
        }, 300);

        document.body.onclick = (event) => {
            if (event.target.className != 'offcanvas' && event.target.className != 'offcanvas-menu') {
                setNavDisplay('flex')
                setNavOpacity('1')
            }
        }
    }

    // sticky nav
    useEffect(() => {

        window.addEventListener('scroll', () => {
            document.querySelector('nav').classList.toggle('sticky', window.scrollY > 0)
        })

    }, [])
    return (
        <>
            <nav>
                <div className='content'>
                    <Link to='/' className='brand'>
                        <h2>Movie</h2>
                    </Link>


                    <div className='menu' onClick={handleMenuClick}>
                        <svg width="24" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fillRule="evenodd"><path d="M0 0h24v2H0zM0 7h24v2H0zM0 14h24v2H0z" /></g></svg>
                    </div>

                    <ul className='list-menu'>
                        <li>
                            <NavLink to='/'>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/movies'>
                                Movies
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/series'>
                                Series
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className='offcanvas'>
                <h2 className='brand'>Movie</h2>
                <ul className='offcanvas-menu'>
                    <li>
                        <NavLink to='/' className='menu-item'>
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth={0}
                                viewBox="0 0 1024 1024"
                                className="icon"
                                height="1.2em"
                                width="1.2em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z" />
                            </svg>
                            <span>Home</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/movies' className='menu-item'>
                            <svg
                                stroke="currentColor"
                                fill="none"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="icon"
                                height="1.2em"
                                width="1.2em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <desc />
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <rect x={4} y={4} width={16} height={16} rx={2} />
                                <line x1={8} y1={4} x2={8} y2={20} />
                                <line x1={16} y1={4} x2={16} y2={20} />
                                <line x1={4} y1={8} x2={8} y2={8} />
                                <line x1={4} y1={16} x2={8} y2={16} />
                                <line x1={4} y1={12} x2={20} y2={12} />
                                <line x1={16} y1={8} x2={20} y2={8} />
                                <line x1={16} y1={16} x2={20} y2={16} />
                            </svg>
                            <span>Movies</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/series' className='menu-item'>
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth={0}
                                viewBox="0 0 24 24"
                                className="icon"
                                height="1.2em"
                                width="1.2em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path fill="none" d="M0 0h24v24H0V0z" />
                                <path d="M9 10v8l7-4zm12-4h-7.58l3.29-3.29L16 2l-4 4h-.03l-4-4-.69.71L10.56 6H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 14H3V8h18v12z" />
                            </svg>
                            <span>Series</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Nav;