import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../global';

import light from '../styles/themes/light';
import dark from '../styles/themes/dark';
import { useState } from 'react';
import ReactSwitch from 'react-switch';

function MyApp({ Component, pageProps }) {
  const  [ theme, setTheme ] = useState(light);


  function toggleTheme() {
    (theme.title == 'light') ? setTheme(dark) : setTheme(light);
  }
  function isChecked() {
    if(theme.title == 'light') {
      return false;
    } else if( theme.title == 'dark') {
      return true;
    }
  }
  return (

<ThemeProvider theme ={ theme }>
  <GlobalStyle />
   {/* switch theme */}
   <ReactSwitch 
      onChange={toggleTheme}
      checked={isChecked()}
      checkedIcon={false}
      uncheckedIcon={false}
      height={10}
      width={ 40 }
      handleDiameter={25}
      offColor={'#000'}
      onColor={'#D3D3D3'}
    />
<div className={theme.colors.background}></div>
  <Component {...pageProps} />
</ThemeProvider>
  );
}

export default MyApp;
