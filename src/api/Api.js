
const Api = async (param, specialQuery = '') => {

    const baseUrl = process.env.REACT_APP_BASE_URL
    const api_key = process.env.REACT_APP_API_KEY
    const params = param

    const fetchMovies = await fetch(`${baseUrl}/${params}?api_key=${api_key}${specialQuery}`)
    const jsonMovies = await fetchMovies.json()
    return jsonMovies
}

export default Api