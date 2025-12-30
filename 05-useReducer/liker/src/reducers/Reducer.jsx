import { useReducer } from 'react';
const initialState = {
  data: [],
  isLoading: false
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'SET_USERS':
      return { ...state, data: action.payload, isLoading: false };
    case 'UPDATE_LIKE':
      return {
        ...state,
        isLoading: false,
        data: state.data.map((user) =>
          user.id === action.userId ? { ...user, like: action.index + 1 } : user
        ),
      };
    default:
      return state;
  }
}

export { initialState, reducer };