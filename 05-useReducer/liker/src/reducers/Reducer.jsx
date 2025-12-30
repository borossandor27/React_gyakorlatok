import { useReducer } from 'react';

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case 'SET_USERS':
      // A backendből érkező adatok betöltése
      return action.payload;
    case 'UPDATE_LIKE':
      // A konkrét felhasználó like értékének módosítása
      return state.map((user) =>
        user.id === action.userId ? { ...user, like: action.index + 1 } : user
      );
    default:
      return state;
  }
}

export { initialState, reducer };