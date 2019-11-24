import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components';
import Navigater from './Navigater'
import Cover from './Cover'
import Contents from './Contents'
import Contact from './Contact'

export interface SizeInterface {
  width: number
  height: number
}

export interface ArrayInterface {
  contents: string
  text: string
}

export interface refInterface {
  refWidth: number
  ref2Width: number
}

const Main: React.FC = () => {

  const init: SizeInterface = {
    width: window.innerWidth,
    height: window.innerHeight
  }

  const browserRef = useRef<HTMLDivElement>(null)
  const pageRef = useRef<HTMLDivElement>(null)
  const pageRef2 = useRef<HTMLDivElement>(null)
  const [gridSize, setGridSize] = useState(0)
  const [sizeChecker, setSizeChecker] = useState(init)
  const [refWidth, setRefWidth] = useState<number>(0)
  const [ref2Width, setRef2Width] = useState<number>(0)

  const refArry = { refWidth, ref2Width }

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
      setSizeChecker({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    reSize()
    window.addEventListener("resize", reSize)
    return () => {
      window.removeEventListener("resize", reSize)
    };
  }, [])

  useEffect(() => {
    const ref = pageRef.current
    if (ref) {
      const refW = ref.getBoundingClientRect().top
      setRefWidth(refW)
    }
  }, [])
  useEffect(() => {
    const ref = pageRef2.current
    if (ref) {
      const refW = ref.getBoundingClientRect().top
      setRef2Width(refW)
    }
  }, [])

  const handleClick = (move: number) => {
    const movePoint = move
    let i = 10 // 수치는 상황에 맞게 조절 가능
    const moveSpeed = setInterval(() => {
      window.scroll(0, i)
      i += 80 // 수치는 상황에 맞게 조절 가능
      if (i >= movePoint + 300)
        clearInterval(moveSpeed)
    }, 20) // 수치는 상황에 맞게 조절 가능
  }

  return (
    <Wapper ref={browserRef}>
      <Navigater gridSize={gridSize} handleClick={handleClick} move={refArry} />
      <Cover sizeChecker={sizeChecker} />
      <Wapper2 ref={pageRef}>
        <Contents />
      </Wapper2>
      <Wapper2 ref={pageRef2}>
        <Contact />
      </Wapper2>
    </Wapper>
  );
}

export default Main

const Wapper = styled.div`
    background-color: ${props => props.theme.main.background_color};
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-auto-rows: auto;
    grid-gap: 1rem;
    width:100%;
  `
const Wapper2 = styled.div`
  grid-column: 1/ 13;
  background-color: ${props => props.theme.main.background_color};
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: auto;
  grid-gap: 1rem;
  width:100%;
`
