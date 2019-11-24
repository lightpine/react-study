import React, { createContext, useState, useEffect } from 'react'

export interface ScrollInterface {
  scrollX: number
  scrollY: number
}

export const scrollContext = createContext<ScrollInterface>({ scrollX: 0, scrollY: 0 })

//스크롤 값을 가지고있음
const Scroll: React.FC = (props) => {
  const [scroll, setScroll] = useState<ScrollInterface>({ scrollX: 0, scrollY: 0 })

  useEffect(() => {
    const onScroll = () => {

      setScroll({ scrollX: window.scrollX, scrollY: window.scrollY })
    }
    window.addEventListener("scroll", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  return (
    <scrollContext.Provider value={scroll}>
      {props.children}
    </scrollContext.Provider>
  )
}

export default Scroll
