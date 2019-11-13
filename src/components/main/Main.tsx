import React from 'react'
import Navigater from './Navigater'
import styled from 'styled-components';

const Wapper = styled.div`
  background-color: ${props => props.theme.main.background_color};
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: auto;
  grid-gap: 1rem;
`

const NaviWapper = styled.div`
  grid-column: 1 / 13;
`

const Main: React.FC = () => {
  return (
    <Wapper>
      <NaviWapper>
        <Navigater />
      </NaviWapper>
      <div>cover</div>
      <div>contents</div>
      <div>contact</div>
    </Wapper>
  );
}

export default Main
