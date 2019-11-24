import React from 'react'
import styled from 'styled-components'
import Image from '../Image/back_ground.png'
import { SizeInterface } from './Main'

interface Props {
  sizeChecker: SizeInterface
}

const Cover: React.FC<Props> = (props) => {

  const CoverWapper = styled.div`
    grid-column: 1 / 13;
    grid-row: 1;
    background-image: url(${Image});
    height:100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  `

  return (
    <CoverWapper />
  )
}

export default Cover
