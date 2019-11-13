import React, { useRef, useState, useEffect } from 'react'
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

  const gridRef = useRef<HTMLDivElement>(null)
  const [gridSize, setGridSize] = useState(0)

  useEffect(() => {
    const gridEl = gridRef.current
    if (gridEl) {
      const gridRect = gridEl.getBoundingClientRect()
      setGridSize(gridRect.width)
    }
  }, [])

  useEffect(() => {
    const reSize = () => {
      const gridEl = gridRef.current
      if (gridEl) {
        const gridRect = gridEl.getBoundingClientRect()
        const gridPiceSize = (gridRect.width - (10 * 11)) / 12
        setGridSize(gridPiceSize)
      }
    }
    window.addEventListener("resize", reSize)
    return () => { window.removeEventListener("resiz", reSize) };
  }, [])

  return (
    <Wapper ref={gridRef}>
      <NaviWapper>
        <Navigater gridSize={gridSize} />
      </NaviWapper>
      <div>cover</div>
      <div>contents</div>
      <div>contact</div>
    </Wapper>
  );
}

export default Main
