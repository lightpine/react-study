import React, { Fragment } from 'react'
import Img from '../Img/italy01.png'
import styled from 'styled-components'
import Dot from './Dots'

const Main: React.FC = () => {
  return (
    <Fragment>
      <ImgBox />
      <Dot />
    </Fragment>
  );
}
const ImgBox = styled.div`
  background-image: url(${Img});
  background-position: center center;
  background-repeat: no-repeat;
  height:300px;
`

export default Main
