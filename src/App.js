import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Movie from './pages/Movie.js';
import Commencer from './pages/Acceuil.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Commencer />} />
        <Route path='/film/:id' element={<Movie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
