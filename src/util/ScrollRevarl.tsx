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
  const getType = (type: TYPE) => {
    switch (type) {
      case "Fade":
        return css``
      case "Pra":
        return css``
      default:
        return css``
    }
  }

  const Wapper = styled(props.styled) <{ isOnscreen: boolean }>`
    ${getType(props.type)}
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
