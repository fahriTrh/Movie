import { Link } from "react-router-dom";

const Footer = () => {

    return (
        <footer>
            <h1>Movie</h1>

            <ul className='menu'>
                <li>
                    <Link to="/">Trending movies</Link>
                </li>
                <li>
                    <Link to="/">Top rated movies</Link>
                </li>
                <li>
                    <Link to="/">Trending series</Link>
                </li>
                <li>
                    <Link to="/">Top rated series</Link>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;