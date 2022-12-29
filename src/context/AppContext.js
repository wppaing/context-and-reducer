import { createContext, useReducer } from "react";

export const AppContext = createContext(null);

const initialState = {
  theme: "light",
};

function reducer(state, action) {
  switch (action.type) {
    case "theme-update":
      return { ...state, theme: action.value };
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}
