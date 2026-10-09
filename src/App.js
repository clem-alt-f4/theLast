import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Movie from './pages/Movie.js';
import Commencer from './pages/Acceuil.js';

function App() {
  return (
    // L'ajout du basename permet à React Router de comprendre qu'il est dans le sous-dossier /ghibli
    <BrowserRouter basename="/ghibli">
      <Routes>
        <Route path='/' element={<Commencer />} />
        <Route path='/film/:id' element={<Movie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

