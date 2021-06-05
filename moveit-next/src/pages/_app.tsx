import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../global';

import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

import { useContext, useState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import SwitchTheme from '../components/SwitchTheme';

function MyApp({ Component, pageProps }) {

  const themeContext = useContext(ThemeContext);
  // retirando o tema do contexto
  const { theme } = themeContext;

  return (
  <div> 
    {/* ao invés de passar direto o arquivo light ou dark, eu quero passar o theme.title */}
    <ThemeProvider theme = { light } >
      <p> tema : {theme}</p>
      <SwitchTheme />

      <GlobalStyle />

      <Component {...pageProps} />
    </ThemeProvider>
  </div>
  );
}

export default MyApp;
