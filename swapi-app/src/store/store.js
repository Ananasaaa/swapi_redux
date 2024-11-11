import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';

const initialState = {
  planets: [],
  loading: false,
  error: null,
};

function planetsReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_PLANETS_REQUEST':
      return { ...state, loading: true, error: null };
    case 'FETCH_PLANETS_SUCCESS':
      return { ...state, loading: false, planets: action.payload };
    case 'FETCH_PLANETS_FAILURE':
      return { ...state, loading: false, error: action.error, planets: [] };
    case 'CLEAR_PLANETS':
      return { ...state, planets: [] };
    default:
      return state;
  }
}

const store = createStore(planetsReducer, applyMiddleware(thunk));

export default store;