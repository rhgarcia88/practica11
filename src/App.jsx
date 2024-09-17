// App.js
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/Nav/Nav';
import DiscoverPage from './pages/DiscoverPage/DiscoverPage';
import NotFound from './pages/NotFound/NotFound';
import SavedPage from './pages/SavedPage/SavedPage';
import MovieDetailPage from './pages/MovieDetailPage/MovieDetailPage'; // Importa MovieDetailPage

function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<DiscoverPage />} />
        <Route path="/saved" element={<SavedPage />} />
        <Route path="/movie/:id" element={<MovieDetailPage />} /> {/* Añade la ruta para MovieDetailPage */}
        <Route path="*" element={<NotFound />} />
      </Routes>
   
    </div>
  );
}

export default App;
