import React from 'react'
import Sidebar from './components/Sidebar'
import Todos from './components/Todos';
import {ContextProvider} from './context/context'
import {ThemeProvider} from 'styled-components'
import { DarkMode, LightMode } from './styles/sidebars';
import {themeContext} from './context/themeContext'

import './css/app.css'

function App() {

  const{theme} = React.useContext(themeContext)
  
  return (
    <ContextProvider>
      <ThemeProvider theme={theme === 'light'? LightMode: DarkMode} >
        <div className="app">
              <Sidebar />
              <Todos  />
        </div>
      </ThemeProvider>
    </ContextProvider>
  );
}

export default App;
