import React, { useRef, useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import Image from '../Image/back_ground.png'
import { WindowSizeInterface } from './Main'

interface Props {
  windowSize: WindowSizeInterface
}

const Cover: React.FC<Props> = (props) => {

  const { height, width } = props.windowSize
  const state = (height < width) ? "garo" : "sero"
  const imgRef = useRef<HTMLImageElement>(null)
  const [ss, setss] = useState(false)
  useEffect(() => {
    if (imgRef.current) {
      if (imgRef.current.getBoundingClientRect().height < height) {
        setss(true)
      } else {
        setss(false)
      }
    }
  }, [])
  const CoverWapper = styled.div`
    grid-column: 1 / 13;
    grid-row: 1;
    overflow: hidden;
    height:100vh;
  `
  const CoverImg = useCallback((
    styled.img`
    position: relative;
    
    ${(state === "sero" || ss) ?
        (`
        left: 50%;
        transform: translateX(-50%);
        height: 100%;
        width: auto;
      `) :
        (`
        top:50%;
        transform: translateY(-50%);
        width:100%;
        height:auto;
      `)
      }
`
  )
    , [])

  return (
    <CoverWapper>
      <CoverImg ref={imgRef} src={Image} />
    </CoverWapper>
  )
}

export default Cover
