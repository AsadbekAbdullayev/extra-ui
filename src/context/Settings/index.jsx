import React, { useReducer, createContext, useContext } from 'react';
import { reducer, initialState } from './reducer';
export const Settings = createContext();
export const useSettings = () => useContext(Settings);

export const SettingsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Settings.Provider value={[state, dispatch]}>
      {children}
    </Settings.Provider>
  );
};