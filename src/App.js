import React from 'react';
import { BrowserRouter as Router , Routes, Route  } from 'react-router-dom';
import Header from './components/Header/Header.jsx'

import './App.css'
import Home from './Pages/Home/Home.jsx';
import MovieList from './components/movieList/movieList.jsx';
import Movie from './Pages/movieDetail/movie.jsx';
// import movieList from './components/Header/movieList/movieList.jsx';

function App() {
  return (
    <div className="App">
          <Router>
            <Header/>
            
            <Routes>
              <Route index element={<Home/>}></Route>
              <Route path='movie/:id' element={<Movie/>}></Route>
              <Route path='movies/:type' element={<MovieList/>}></Route>
              <Route path='/*' element={<h1>Error Page</h1>}></Route>
            </Routes>
          </Router>
    </div>
  );
}

export default App;
