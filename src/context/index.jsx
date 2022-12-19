import React from 'react'
import {ZoneContextProvider} from './card';
import {SettingsProvider} from './Settings';

function MainContextProvider({ children }) {
  return (
    <ZoneContextProvider>
      <SettingsProvider>
          {children}
      </SettingsProvider>
    </ZoneContextProvider>
  )
}

export default MainContextProvider;
    


