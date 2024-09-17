// components/SimpleMovieCard/SimpleMovieCard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SimpleMovieCard.css';

const SimpleMovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${movie.id}`); // Navegar a la página de detalles usando el ID de la película
  };

  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div className="simple-movie-card" onClick={handleClick}>
      <img src={posterUrl} alt={movie.title} className="simple-movie-poster" />
      <h3 className="simple-movie-title">{movie.title}</h3>
    </div>
  );
};

export default SimpleMovieCard;
