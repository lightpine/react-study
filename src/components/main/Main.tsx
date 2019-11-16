import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components';
import Navigater from './Navigater'
import Cover from './Cover'
import Contents from './Contents'

export interface WindowSizeInterface {
  width: number
  height: number
}

const Main: React.FC = () => {

  const init: WindowSizeInterface = {
    width: window.innerWidth,
    height: window.innerHeight
  }

  const browserRef = useRef<HTMLDivElement>(null)
  const [gridSize, setGridSize] = useState(0)
  const [winSize, setWinSize] = useState(init)

  useEffect(() => {
    const reSize = () => {
      const gridEl = browserRef.current
      if (gridEl) {
        const gridRect = gridEl.getBoundingClientRect()
        const gridPiceSize = (gridRect.width - (10 * 11)) / 12
        setGridSize(gridPiceSize)
      }
    }
    reSize()
    window.addEventListener("resize", reSize)
    return () => { window.removeEventListener("resiz", reSize) };
  }, [])

  useEffect(() => {
    const reSize = () => {
      setWinSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    window.addEventListener("resize", reSize)
    return () => {
      window.removeEventListener("resize", reSize)
    };
  }, [])

  const Wapper = styled.div`
    background-color: ${props => props.theme.main.background_color};
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-auto-rows: auto;
    grid-gap: 1rem;
    width:100%;
  `

  return (
    <Wapper ref={browserRef}>
      <Navigater gridSize={gridSize} />
      <Cover windowSize={winSize} />
      <Contents />
      <div>contact</div>
    </Wapper>
  );
}

export default Main
