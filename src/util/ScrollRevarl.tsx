import React, { useContext, useRef, useEffect, useState } from 'react'
import styled, { AnyStyledComponent, css } from 'styled-components'
import { scrollContext } from './Ohn/Scroll'

interface Props {
  type: TYPE
  styled: AnyStyledComponent
  duration?: number
}

type TYPE = "Fade" | "Pra"

const OnhReveal: React.FC<Props> = (props) => {

  const Wapper = styled(props.styled) <{ isOnscreen: boolean }>`
    transition: all;
    opacity:0;
    transition-duration: 1000ms;
    top: ${p => -(p.scrollY * 0.2)};
    ${p => (p.type === "Pra") && css`
    height: 150vh;
    max-height: 100%;
    overflow-x: hidden;
    perspective: 1px;
    perspective-origin: center top;
    transform-style: preserve-3d;
    `}
    ${p => p.isOnscreen && css`
    opacity:1;
    `}
`
  const InnerFC: React.FC = (props) => {
    const { scrollY } = useContext(scrollContext)
    const wapperRef = useRef<HTMLElement>(null)
    const [isOnscreen, setIsOnscreen] = useState(false)


    useEffect(() => {

      if (wapperRef.current) {
        if (scrollY + window.innerHeight - 100 > wapperRef.current.offsetTop &&
          wapperRef.current.offsetTop + wapperRef.current.getBoundingClientRect().height + 0 > scrollY
        ) {
          setIsOnscreen(true)
        } else {
          setIsOnscreen(false)
        }
      }
    }, [scrollY])

    return (
      <Wapper ref={wapperRef} isOnscreen={isOnscreen}>
        {props.children}
      </Wapper>
    )
  }
  return (
    <InnerFC children={props.children} />
  )
}
OnhReveal.defaultProps = {
  duration: 300
}
export default OnhReveal
