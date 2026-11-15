import { useReducer, useEffect } from "react";
import { AuthContext } from "./AuthContext";


// 1. Action típusok definiálása
const AuthActions = {
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  LOGOUT: 'LOGOUT',
  LOAD_USER: 'LOAD_USER',
  SET_LOADING: 'SET_LOADING'
};

// 2. Kezdeti állapot
const initialState = {
  user: {
    isLoggedIn: false,
    role: "guest",
    userName: null,
    userId: null,
    userEmail: null
  },
  isLoading: true,
  error: null,
  lastLogin: null
};

// 3. Reducer függvény
function authReducer(state, action) {
  switch (action.type) {
    case AuthActions.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };
      
    case AuthActions.LOAD_USER:
      return {
        ...state,
        user: action.payload.user,
        isLoading: false,
        error: null
      };
      
    case AuthActions.LOGIN_SUCCESS:
      return {
        ...state,
        user: {
          isLoggedIn: true,
          role: action.payload.role,
          userName: action.payload.userName,
          userId: action.payload.userId,
          userEmail: action.payload.userEmail
        },
        isLoading: false,
        error: null,
        lastLogin: new Date().toISOString()
      };
      
    case AuthActions.LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
      
    case AuthActions.LOGOUT:
      return {
        ...initialState,
        isLoading: false
      };
      
    default:
      return state;
  }
}

// A felhasználók listája (ez lehetne egy külső adatbázis).
// FIGYELEM: éles alkalmazásban jelszót soha nem tárolunk a kliens kódjában,
// az ellenőrzést a szerver végzi!
const users = [
  { username: "admin", password: "admin123", role: "admin", userId: 1, userEmail: "admin@example.com" },
  { username: "user", password: "user123", role: "registered", userId: 2, userEmail: "user@example.com" },
  { username: "test", password: "test123", role: "registered", userId: 3, userEmail: "test@example.com" },
];

export const AuthProvider = ({ children }) => {
  // 4. useReducer használata
  const [state, dispatch] = useReducer(authReducer, initialState);

  // 5. Műveletek (action creator-ek)
  // A login Promise-t ad vissza, mert a (szimulált) API hívás eredménye csak később
  // érkezik meg. A hívó oldalon ezért await-tel kell megvárni.
  const login = async (username, password) => {
    // Betöltés állapot beállítása
    dispatch({ type: AuthActions.SET_LOADING, payload: true });

    // Szimulált API hívás: fél másodperc várakozás
    await new Promise((resolve) => setTimeout(resolve, 500));

    const userData = users.find(user => 
      user.username === username && user.password === password
    );

    if (userData) {
      const user = {
        isLoggedIn: true,
        role: userData.role,
        userName: userData.username,
        userId: userData.userId,
        userEmail: userData.userEmail
      };

      // LocalStorage mentés
      if (typeof window !== 'undefined') {
        localStorage.setItem('authUser', JSON.stringify(user));
      }

      // Sikeres bejelentkezés action
      dispatch({
        type: AuthActions.LOGIN_SUCCESS,
        payload: user
      });

      return { success: true, message: `Sikeres bejelentkezés!` };
    } else {
      // Sikertelen bejelentkezés action
      dispatch({
        type: AuthActions.LOGIN_FAILURE,
        payload: { error: 'Hibás felhasználónév vagy jelszó!' }
      });

      return { success: false, message: 'Hibás felhasználónév vagy jelszó!' };
    }
  };

  const logout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('authUser');
    }
    
    dispatch({ type: AuthActions.LOGOUT });
  };

  // Betöltés a LocalStorage-ból
  useEffect(() => {
    dispatch({ type: AuthActions.SET_LOADING, payload: true });
    
    if (typeof window !== 'undefined') {
      const savedUser = localStorage.getItem('authUser');
      if (savedUser) {
        try {
          const user = JSON.parse(savedUser);
          dispatch({
            type: AuthActions.LOAD_USER,
            payload: { user }
          });
        } catch (error) {
          console.error('Hibás user adat:', error);
          localStorage.removeItem('authUser');
          dispatch({ type: AuthActions.SET_LOADING, payload: false });
        }
      } else {
        dispatch({ type: AuthActions.SET_LOADING, payload: false });
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{
      user: state.user,
      isLoading: state.isLoading,
      error: state.error,
      login,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
};
