import React from 'react'
import ReactDOM from 'react-dom'
import Main from './components/main/Main'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { theme } from './theme'


const GlobalStyle = createGlobalStyle`
  html{
    font-size: 10px; /* rem을 간편하게 쓰기 위해 10으로 지정  */
  }
  body{
    margin: 0px;
    background-color: ${props => props.theme.main.background_color};
  }
  /* root div 중앙 정열 */
  #root{
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
  }
  /* 링크 스타일 제거 */
  a, a:visited, a:hover, a:active {
    text-decoration: none;
    color: inherit;
    }
`

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Main />
    </ThemeProvider>
    , document.getElementById('root'))