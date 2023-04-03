import { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import HeartIcon from './heartsearch.svg';
import MovieCard from './MovieCard'

const API_URL = "http://www.omdbapi.com?apikey=9118604";

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('Spiderman');
    }, [] )


    return (
        <div className='app'>
            
            <h1>MovieLand</h1>

            {
                movies?.length > 0
                  ? (
                    <div className='container'>
                      {movies.map((movie) => (
                          <MovieCard movie={movie} />
                      ))}
                    </div> 
                  ) : (
                    <div className='empty'>
                      <h2>No movies found</h2>
                    </div>
                  )
            }

            <input
              placeholder='Find'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} 
            />
            <img
              id="searchicon"
              src={HeartIcon}
              alt="search"
              onClick={() => searchMovies(searchTerm)}
            />

        </div>

    );
}

export default App;