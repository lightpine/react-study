import React from 'react'
import Img from '../Img/italy01.png'
import styled from 'styled-components'

const Main: React.FC = () => {

  return (
    <Wapper>
      <ImgBox />
      <Dot col="5" />
      <Dot col="6" />
      <Dot col="7" />
    </Wapper>
  );
}
const Wapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12 1fr);
  grid-auto-rows: auto;
  grid-gap: 1rem;
`
const ImgBox = styled.div`
  grid-column: 1 / 13;
  background-image: url(${Img});
  background-position: center center;
  background-repeat: no-repeat;
  width: 1000px;
  height: 300px;
`
const Dot = styled.div<{ col: string }>`
  display: grid;
  grid-column: ${props => props.col};
  height: 10px;
  width: 10px;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
`

export default Main
