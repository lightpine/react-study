import React, { useState } from 'react'
import styled from 'styled-components'
import Image from '../Image/back_ground.png'
import { SizeInterface } from './Main'
import { log } from 'util'

interface Props {
  sizeChecker: SizeInterface
}

const Cover: React.FC<Props> = (props) => {

  const { width, height } = props.sizeChecker
  const [checker, setCheker] = useState(false)


  const CoverWapper = styled.div`
    grid-column: 1 / 13;
    grid-row: 1;
    background-image: url(${Image});
    height:100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  `
  //   const CoverImg = styled.img`
  //     height: 100%;
  //     background-position: center;
  //     background-repeat: no-repeat;
  //     background-size: cover;
  // `

  return (
    <CoverWapper>
      {/* <CoverImg src={Image} /> */}
    </CoverWapper>
  )
}

export default Cover
