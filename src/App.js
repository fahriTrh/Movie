import './css/Style.css';
import './css/Breakpoints.css';
import './css/Animations.css';
import Home from './pages/home';
import { Routes, Route } from 'react-router';
import Movies from './pages/movies';
import Series from './pages/series';
import DetailMovie from './pages/detail/movie';
import DetailTv from './pages/detail/tv';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/movies' element={<Movies />} />
      <Route path='/series' element={<Series />} />
      <Route path='/detail/movie/:id' element={<DetailMovie />} />
      <Route path='/detail/tv/:id' element={<DetailTv />} />
    </Routes>
  );
}

export default App;