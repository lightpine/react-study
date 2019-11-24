import React from 'react'
import ReactDOM from 'react-dom'
import Intercepter from './util/Interceptor'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { theme } from './theme'
import OhnProvider from './util/OhnProvider'


const GlobalStyle = createGlobalStyle`
  html{
    font-size: 10px; /* rem을 간편하게 쓰기 위해 10으로 지정  */
  }
  body{
    margin: 0px;
    background-color: ${props => props.theme.main.background_color};
  }
  /* root div 중앙 정열 */
  #Wapper{
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
const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <OhnProvider>
        <GlobalStyle />
        <Intercepter />
      </OhnProvider>
    </ThemeProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))