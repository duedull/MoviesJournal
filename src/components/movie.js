import React, { useEffect, useState } from "react";
import './header_and_sidebar.css'
import './main.css'
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";

export default function MovieApp() {

    const [Movies, setMovies] = useState([]);
    const [searchQuery, setsearchQuery] = useState('');
    const [sortBy, setsortBy] = useState('popularity.desc');
    const [genres, setGenres] = useState([]);
    const [selectedGenre, setselectedGenre] = useState('');
    const [expandedMovieId, setexpandedMovieId] = useState(null);

    useEffect(()=>{
        const fetchGenres = async () => {
            const responce = await axios.get(
                'https://api.themoviedb.org/3/genre/movie/list?language=en',
                {
                    params: {
                        api_key: '8c700bfb27456d1eb60156a06e9d2fbf',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YzcwMGJmYjI3NDU2ZDFlYjYwMTU2YTA2ZTlkMmZiZiIsIm5iZiI6MTcyNTAyOTI5OS40Mzc5MTIsInN1YiI6IjY2Y2EwNTE5ODM0NjIwMjBiOWRlMDcyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4D4M7pkoJETVIlzOPCGKjnAyIF2q-p8NrVgN03rWARo'
                        
                    },
                },
            );
            setGenres(responce.data.genres);
        };
        fetchGenres();
    }, []);

    useEffect(() => {
        const fetchMovies = async () => {
          const response = await axios.get(
            'https://api.themoviedb.org/3/discover/movie',
            {
              params: {
                api_key: '0fa2853e7c4d6c8f146aba861c5e4a06',
                sort_by: sortBy,
                page: 1,
                with_genres: selectedGenre, 
                query: searchQuery,
              },
            }
          );
          setMovies(response.data.results);
        };
        fetchMovies();
      }, [searchQuery, sortBy, selectedGenre]);
    


    const handleSortChange = (event) => {
        setsortBy(event.target.value);
    }

    const handleGenreChange = (event) => {
        setselectedGenre(event.target.value);
    }

    const handleSearch = async () => {
        const responce = await axios.get(
            'https://api.themoviedb.org/3/search/movie',
            {
                params: {
                    api_key: '8c700bfb27456d1eb60156a06e9d2fbf',
                    query: searchQuery,
                }
            }
        );

        setMovies(responce.data.results);
        console.log(responce.data.results);
        //console.log(movies);
    };



    function handleSearchChange(event){
        setsearchQuery(event.target.value);
    }

    const toggleDescription = (movieId) => {
        setexpandedMovieId(expandedMovieId === movieId ? null : movieId); 
    } 

    return(
        <div>
        <div className="navbar">
        <div className="navbar-container">

            {/* <!-- section1 --> */}
            <div className="logo-container">
                <img src="favicon.png" className="mj-logo" alt="" />
                <h2 className="logo">
                    MoviesJournal.in
                </h2>
            </div>

            {/* <!-- section2 --> */}
            <div className="menu-container">
                <ui className="menu-list">
                    <li className="menu-list-item active-bold">Home</li>
                    <li className="menu-list-item" as={Link} to={''}>Explore</li>
                    <li className="menu-list-item">Chart</li>
                    <li className="menu-list-item">RanKING</li>
                    <li className="menu-list-item">Account</li>
                </ui>
            </div>
            {/* <!-- section3 --> */}
             <div className="search-bar">
                <label className="search-label">
                <input type="text" value={searchQuery} onChange={handleSearchChange} name="text" className="input" placeholder="Search any movie..." />
                <FaSearch />
                 <button onClick={handleSearch}>Search</button>
                </label>
             </div>
        </div>
    </div>
    <div className="filter">
    <select id="sort-by" value={sortBy} onChange={handleSortChange}>
          <option value="popularity.desc">Popularity Descending</option>
          <option value="popularity.asc">Popularity Ascending</option>
          <option value="vote_average.desc">Rating Descending</option>
          <option value="vote_average.asc">Rating Ascending</option>
          <option value="release_date.desc">Release Date Descending</option>
          <option value="release_date.asc">Release Date Ascending</option>
        </select>

        <label  className='genre-label genre-by'  htmlFor="genre"></label>
        <select id="genre" value={selectedGenre} onChange={handleGenreChange}>
          <option value="">All Genres</option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>
    </div>

    <div class="sidebar">
        <i class="sidebar-icons-1 fa-solid fa-1"></i>
        <i class="sidebar-icons fa-solid fa-magnifying-glass"></i>
        <i class="sidebar-icons fa-solid fa-users"></i>
        <i class="sidebar-icons fa-solid fa-bookmark"></i>
        <i class="sidebar-icons fa-solid fa-tv"></i>
        <i class="sidebar-icons fa-solid fa-hourglass-half"></i>
        <i class="sidebar-icons fa-solid fa-cart-shopping"></i>
    </div>

    <div className="container">
    <div class="marquee-container" >
        <marquee id="top" behavior="" direction="">Stree 2 box office collection day 15: Rajkummar Rao-Shraddha Kapoor's blockbuster is now among top 10
           Hindi movies in history, nears Rs 650 crore worldwide | Pacfic rim uprising series is getting a new film</marquee>
        </div>

        <div class="main-text"> New Releases:</div>
    <div className="movie-wrapper">
        {Movies.map((movie) => (
          <div key={movie.id} className="movie">
            <a href="https://www.themoviedb.org/movie/533535-deadpool-wolverine">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            </a>
            <h2>{movie.title}</h2>
            <p className='rating'><i class="fa-solid fa-star"></i> Rating: {movie.vote_average}</p>
            {expandedMovieId === movie.id ? (
              <p>{movie.overview}</p>
            ) : (
              <p>{movie.overview.substring(0, 150)}...</p>
            )}
            <button onClick={() => toggleDescription(movie.id)} className='read-more'>
              {expandedMovieId === movie.id ? 'Show Less' : 'Read More'}
            </button>
          </div>
        ))}
      </div>
    </div>
    </div>
    )
}