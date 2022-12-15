import React, { useReducer, createContext, useContext } from 'react';
import { reducer, initialState } from './reducer';
export const ZoneContext = createContext();
export const useZoneContext = () => useContext(ZoneContext);

export const ZoneContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ZoneContext.Provider value={[state, dispatch]}>
      {children}
    </ZoneContext.Provider>
  );
};