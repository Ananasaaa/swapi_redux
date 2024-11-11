export const fetchPlanets = () => {
    return async (dispatch) => {
      dispatch({ type: 'FETCH_PLANETS_REQUEST' });
      try {
        const response = await fetch('https://swapi.py4e.com/api/planets/');
        if (!response.ok) {
          throw new Error('Failed to fetch planets');
        }
        const data = await response.json();
        dispatch({ type: 'FETCH_PLANETS_SUCCESS', payload: data.results });
      } catch (error) {
        dispatch({ type: 'FETCH_PLANETS_FAILURE', error: error.message });
      }
    };
  };
  
  export const clearPlanets = () => {
    return { type: 'CLEAR_PLANETS' };
  };