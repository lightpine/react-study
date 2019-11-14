import React, { useRef, useState, useEffect } from 'react'
import Navigater from './Navigater'
import styled from 'styled-components';

const Main: React.FC = () => {

  const browserRef = useRef<HTMLDivElement>(null)
  const [gridSize, setGridSize] = useState(0)
  const [browserSize, setBrowserSize] = useState(0)

  useEffect(() => {
    const gridEl = browserRef.current
    if (gridEl) {
      const gridRect = gridEl.getBoundingClientRect()
      const gridPiceSize = (gridRect.width - (10 * 11)) / 12
      setGridSize(gridPiceSize)
    }
  }, [])

  useEffect(() => {
    const reSize = () => {
      const gridEl = browserRef.current
      if (gridEl) {
        const gridRect = gridEl.getBoundingClientRect()
        const gridPiceSize = (gridRect.width - (10 * 11)) / 12
        setGridSize(gridPiceSize)
      }
    }
    window.addEventListener("resize", reSize)
    return () => { window.removeEventListener("resiz", reSize) };
  }, [])

  useEffect(() => {
    const browserSize = browserRef.current
    if (browserSize) {
      // const innerSize = window.innerWidth
      const browserrect = browserSize.getBoundingClientRect()
      const browserWidth = browserrect.width
      setBrowserSize(browserWidth)
    }
  }, [])

  useEffect(() => {
    const reSize = () => {
      const browserSize = browserRef.current
      if (browserSize) {
        // const innerSize = window.innerWidth
        const browserrect = browserSize.getBoundingClientRect()
        const browserWidth = browserrect.width
        setBrowserSize(browserWidth)
      }
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
  `

  const NaviWapper = styled.div`
    grid-column: 1 / 13;
  `

  return (
    <Wapper ref={browserRef}>
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
