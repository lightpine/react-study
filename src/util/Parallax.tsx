import React, { useContext, useRef, useState, useEffect } from 'react'
import { scrollContext } from './Ohn/Scroll'
import styled, { AnyStyledComponent } from 'styled-components'

interface Props {
  styled: AnyStyledComponent
  duration?: number
}

const ParallaxScroll: React.FC<Props> = (props) => {
  const Wapper = styled(props.styled)`
  `
  const Ta = styled.div`
  grid-column: 3 / 11;
  overflow:hidden;
  width:100%;
  height:300px;
  `

  const InnerFC: React.FC = () => {

    const { scrollY } = useContext(scrollContext)
    const wapperRef = useRef<HTMLDivElement>(null)
    const [persentA, setPersent] = useState(0)

    useEffect(() => {
      if (wapperRef.current) {
        const divHaf = (wapperRef.current.getBoundingClientRect().height) / 2
        const winHaf = (window.innerHeight / 2)
        const divLoc = scrollY + wapperRef.current.getBoundingClientRect().top
        const max = winHaf + divHaf
        const cur = (winHaf + scrollY) - (divHaf + divLoc)
        const persent = cur / max * 100
        if (scrollY + window.innerHeight > divLoc &&
          divLoc + wapperRef.current.getBoundingClientRect().height > scrollY
        ) {
          setPersent(persent)
        }
      }
    }, [scrollY])

    return (
      <Ta ref={wapperRef}>
        <Wapper style={{ transform: `translateY(${persentA * 0.3}%)` }} >
          {props.children}
        </Wapper>
      </Ta >
    )
  }
  return (<InnerFC children={props.children} />)
}

ParallaxScroll.defaultProps = {
  duration: 300
}

export default ParallaxScroll