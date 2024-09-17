// pages/SavedPage/SavedPage.js
import React, { useEffect, useState } from 'react';
import SimpleMovieCard from '../../components/SimpleMovieCard/SimpleMovieCard';
import './SavedPage.css';

const SavedPage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Cargar favoritos desde localStorage al montar el componente
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  return (
    <div className="saved-page">
      <h1>Your Saved Movies</h1>
      {favorites.length > 0 ? (
        <div className="saved-movies-grid">
          {favorites.map((movie) => (
            <SimpleMovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <p className="no-saved-movies">You have no saved movies yet!</p>
      )}
    </div>
  );
};

export default SavedPage;
