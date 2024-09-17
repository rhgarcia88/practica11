import React from 'react';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div className="movie-card">
      <div className="movie-card-background" style={{ backgroundImage: `url(${posterUrl})` }}></div>
      <div className="gradient-overlay"></div>
      <img src={posterUrl} alt={movie.title} className="movie-poster-center" />
      <div className="movie-info">
        <h2 className="card-title">{movie.title}</h2>
        <p className="card-date">{movie.release_date}</p>
        <p className="card-overview">{movie.overview}</p>
      </div>
    </div>
  ); 
};

export default MovieCard;
