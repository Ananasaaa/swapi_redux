import './App.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlanets, clearPlanets } from './store/actions';
import Footer from './Footer';


function App() {
  const dispatch = useDispatch();
  const planets = useSelector((state) => state.planets);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(fetchPlanets());
  }, [dispatch]);

  const handleClear = () => {
    dispatch(clearPlanets());
  };

  return (
    <div className="App">
      <h1>Star Wars Planets</h1>
      {loading && <p>Loading planets...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
      <ul>
        {planets.map((planet) => (
          <li key={planet.name}>
            <strong>{planet.name}</strong> - Population: {planet.population}
          </li>
        ))}
      </ul>
      )}
      <Footer onClear={handleClear} />
    </div>
  );
};

export default App;
