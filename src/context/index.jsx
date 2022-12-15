import React from 'react'
import {ZoneContextProvider} from './card';

function MainContextProvider({ children }) {
  return (
    <ZoneContextProvider>
    {children}
</ZoneContextProvider>
  )
}

export default MainContextProvider;
    


