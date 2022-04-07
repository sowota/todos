import  { createContext } from 'react';
import React from 'react';
import { useMediaQuery } from 'react-responsive'


const themeContext = createContext()

function ThemeContextProvider ({children}){
    const[theme, setTheme] = React.useState(JSON.parse(localStorage.getItem("themeMode")) ||'dark')


    const themeToggler = () =>{
        theme === 'dark'? setTheme('light'): setTheme('dark')
    }

    useMediaQuery(
        {
            query: '(prefers-color-scheme: dark)'
        },
        undefined,
        (isDark) => setTheme(isDark? 'dark' : 'light')
    )

    React.useEffect(() => {
        localStorage.setItem("themeMode", JSON.stringify(theme))
    }, [theme])

    

    return (
        <themeContext.Provider value={{theme, themeToggler, setTheme}} >
            {children}
        </themeContext.Provider>
    )
}

export {themeContext, ThemeContextProvider}
