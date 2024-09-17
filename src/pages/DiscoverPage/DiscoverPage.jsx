import React, { useState, useEffect } from 'react';
import MovieCard from '../../components/MovieCard/MovieCard';
import ActionButtons from '../../components/ActionButtons/ActionButtons';
import './DiscoverPage.css';

const DiscoverPage = () => {
  const [movies, setMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchMovies(currentPage);
  }, [currentPage]);

  const fetchMovies = async (page) => {
    try {
      setLoading(true);
      const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=cb0c80642b5ca3648c36a061e126ecae&language=en-US&sort_by=popularity.desc&page=${page}`);
      const data = await response.json();

      // Filtrar las películas que ya están en favoritos
      const filteredMovies = data.results.filter(movie => !isFavorite(movie.id));
      setMovies((prevMovies) => [...prevMovies, ...filteredMovies]);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching movies:', error);
      setLoading(false);
    }
  };

  // Comprobar si la película ya está en favoritos
  const isFavorite = (movieId) => {
    return favorites.some(favorite => favorite.id === movieId);
  };

  const handleSave = () => {
    const currentMovie = movies[currentIndex];
    const updatedFavorites = [...favorites, currentMovie];
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites)); // Guardar en localStorage
    handleNext();
  };

  const handleNext = () => {
    // Verificar si estamos cerca del final y solicitar más películas si es necesario
    if (currentIndex + 2 >= movies.length && !loading) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
    setCurrentIndex(currentIndex + 1);
  };

  const hasMoreMovies = currentIndex < movies.length;

  return (
    <div className="discover-page">
      {hasMoreMovies ? (
        <>
          <MovieCard movie={movies[currentIndex]} />
          <ActionButtons onSave={handleSave} onNext={handleNext} />
        </>
      ) : loading ? (
        <p className="loading">Loading more movies...</p>
      ) : (
        <p className="no-more">No more movies to show!</p>
      )}
    </div>
  );
};

export default DiscoverPage;
