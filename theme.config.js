import { createGlobalStyle } from "styled-components";

export const defaultTheme = {
  text: '#333333',
  border: '#333333',
  headerHeight: '7rem',
}

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'M PLUS Rounded 1c';
    font-style: normal;
    font-weight: 500;
    src: url('/fonts/m-plus-rounded-1c-v10-latin-ext_latin/m-plus-rounded-1c-v10-latin-ext_latin-500.eot'); /* IE9 Compat Modes */
    src: local(''),
         url('/fonts/m-plus-rounded-1c-v10-latin-ext_latin/m-plus-rounded-1c-v10-latin-ext_latin-500.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
         url('/fonts/m-plus-rounded-1c-v10-latin-ext_latin/m-plus-rounded-1c-v10-latin-ext_latin-500.woff2') format('woff2'), /* Super Modern Browsers */
         url('/fonts/m-plus-rounded-1c-v10-latin-ext_latin/m-plus-rounded-1c-v10-latin-ext_latin-500.woff') format('woff'), /* Modern Browsers */
         url('/fonts/m-plus-rounded-1c-v10-latin-ext_latin/m-plus-rounded-1c-v10-latin-ext_latin-500.ttf') format('truetype'), /* Safari, Android, iOS */
         url('/fonts/m-plus-rounded-1c-v10-latin-ext_latin/m-plus-rounded-1c-v10-latin-ext_latin-500.svg#MPLUSRounded1c') format('svg'); /* Legacy iOS */
  }
  
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/roboto-v27-latin-ext_latin/roboto-v27-latin-ext_latin-regular.eot'); /* IE9 Compat Modes */
    src: local(''),
         url('/fonts/roboto-v27-latin-ext_latin/roboto-v27-latin-ext_latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
         url('/fonts/roboto-v27-latin-ext_latin/roboto-v27-latin-ext_latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
         url('/fonts/roboto-v27-latin-ext_latin/roboto-v27-latin-ext_latin-regular.woff') format('woff'), /* Modern Browsers */
         url('/fonts/roboto-v27-latin-ext_latin/roboto-v27-latin-ext_latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
         url('/fonts/roboto-v27-latin-ext_latin/roboto-v27-latin-ext_latin-regular.svg#Roboto') format('svg'); /* Legacy iOS */
  }

  html, body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }
  
  body {
    background: url('/background.png');
    background-size: cover;
    font-family: 'Roboto', sans-serif;
  }
`;