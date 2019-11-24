import React, { useContext, useRef, useState, useEffect } from 'react'
import { scrollContext } from './Ohn/Scroll'
import styled, { AnyStyledComponent } from 'styled-components'

interface Props {
  styled: AnyStyledComponent
  duration?: number
}

const Parallax: React.FC<Props> = (props) => {

  const Wapper = styled(props.styled) <{ scroll: boolean }>`
    
  `

  const InnerFC: React.FC = () => {
    const { scrollY } = useContext(scrollContext)
    const wapperRef = useRef<HTMLDivElement>(null)
    const [scroll, setScroll] = useState(false)


    useEffect(() => {
      if (wapperRef.current) {
        if (scrollY + window.innerHeight - 100 > wapperRef.current.offsetTop &&
          wapperRef.current.offsetTop + wapperRef.current.getBoundingClientRect().height + 0 > scrollY
        ) {
          setScroll(true)
        } else {
          setScroll(false)
        }
      }
    }, [scrollY])

    return (
      <Wapper ref={wapperRef}>
        {props.children}
      </Wapper>
    )
  }
  return (
    <InnerFC children={props.children} />
  )

}
Parallax.defaultProps = {
  duration: 300
}

export default Parallax
