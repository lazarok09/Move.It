import React, { createContext, ReactNode, useState } from 'react';
import light from '../styles/themes/light';
import dark from '../styles/themes/dark';


interface  ThemeProviderProps  {
    children: ReactNode;
}
interface ThemeContextData {
    theme : Object;
    setTheme: (theme) => void;
    toggleTheme: () => void;
    isChecked: () => boolean;
}

// cria o contexto
export const ThemeContext = createContext({} as ThemeContextData);
// exporta o contexto
export default function ThemeProvider ( { children } : ThemeProviderProps) {
    
    const [ theme, setTheme ] = useState(light);
    // toggle theme
    function toggleTheme() {
      if (theme.title == 'light') {
     setTheme(dark) } else {
        setTheme(light);
     } 
    }
    // o return altera o ícone no switch
    function isChecked() {
        if(theme.title == 'light') {
          return false;
        } else if( theme.title == 'dark') {
          return true;
        }
      }
    return (
        <ThemeContext.Provider value ={{ theme, setTheme, toggleTheme, isChecked}}>
            { children }
        </ThemeContext.Provider>
       
    )
    
}

