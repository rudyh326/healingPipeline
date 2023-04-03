import { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import heartIcon from './heartsearch.svg';
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
  
            <h4 style={{ color: 'red' }}>ENJOY</h4>
            <p style={{ color: 'blue' }}>Fun</p>

            {
                movies?.length > 0
                  ? (
                    <div>
                      {movies.map((movie) => (
                          <MovieCard movie={movie} />
                      ))}
                    </div> 
                  ) : (
                    <div>
                      <h2>No movies found</h2>
                    </div>
                  )
            }

                        
                <h2 style={{ color: 'red' }}>Go ahead search</h2>

                <input
                  value={searchTerm}
                  placeholder='Find'
                  onChange={(e) => setSearchTerm(e.target.value)} 
                />
                
                <h4 style={{ color: 'blue' }}>Take a look</h4>

                <h2 style={{ color: 'white' }}>Movies</h2>

                <p style={{ color: 'red' }}>Wait and see</p>

                <img
                  src={heartIcon}
                  id="searchicon"
                  onClick={() => searchMovies(searchTerm)}
                />

                <h2 style={{ color: 'green' }}>Open a new website</h2>
                
                <input
                  value={searchWeb}
                  placeholder='Navigate to'
                  onChange={(e) => setSearchWeb(e.target.value)} 
                />
                <img
                  src={SearchIcon}
                  id="navigating"
                  onClick={() => window.open(searchWeb, '_blank')}
                />

                <h4 style={{ color: 'green' }}>Finally</h4>



                   
        </div>

        

    );
}

export default App;