// pages/MovieDetailPage/MovieDetailPage.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './MovieDetailPage.css';

const MovieDetailPage = () => {
  const { id } = useParams(); // Obtén el ID de la película desde la URL
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=cb0c80642b5ca3648c36a061e126ecae&language=en-US`);
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  const handleRemove = () => {
    // Obtener favoritos actuales desde localStorage
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    // Filtrar la película actual de los favoritos
    const updatedFavorites = savedFavorites.filter((movie) => movie.id !== parseInt(id, 10));
    // Actualizar localStorage con los favoritos restantes
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    // Redirigir a la página de Saved después de eliminar
    navigate('/saved');
  };

  if (!movie) {
    return <p>Loading movie details...</p>;
  }

  return (
    <div className="movie-detail-page">
      <div className="movie-detail-content">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="movie-detail-poster" />
        <div className="movie-detail-info">
          <h1>{movie.title}</h1>
          <p><strong>Release Date:</strong> {movie.release_date}</p>
          <p><strong>Overview:</strong> {movie.overview}</p>
          <p><strong>Rating:</strong> {movie.vote_average}</p>
          <button className="remove-button" onClick={handleRemove}>Remove</button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;
