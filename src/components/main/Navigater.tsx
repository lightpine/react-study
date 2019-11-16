import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import logo from '../Image/ohn.png'

interface Props {
  gridSize: number
}

const Navigater: React.FC<Props> = (props) => {
  const handleWin = (winsize: number) => {
    if (winsize <= 500) {
      return false
    } else {
      return true
    }
  }

  const [isDesktop, setIsDesktop] = useState(handleWin(props.gridSize))
  const [hamClick, setHamClick] = useState(handleWin(props.gridSize))
  const { gridSize } = props

  const onClick = () => {
    setHamClick(!hamClick)
  }

  useEffect(() => {
    setIsDesktop(handleWin(gridSize))
    setHamClick(handleWin(gridSize))
  }, [gridSize])

  const Wapper = styled.div`
    grid-column: 1 / 13;
    grid-row: 1;
    display:grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 1rem;
    position: sticky;
    top: 0;
    height:100px;
    z-index: 1000;
  `
  const NaviIcon = styled.img`
    width: 5rem;
    height: auto;
    grid-column: 1 / 6;
    padding-left:${ gridSize / 2}px;
  `
  const MenwBugerWapper = useCallback((styled.div`
    grid-column: 6 / 13;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-gap: 1rem;
     ${hamClick ? "display:none;" : ""}
    font-size: ${props => props.theme.navigater.font_size};
    font-weight: ${props => props.theme.navigater.font_weight};
   
    @media (max-width: 500px) { 
      ${hamClick ? "display: block;" : "display:none;"}
      position:absolute;
      top:0px;
      left:0px;
      background-color:#888888;
    }

    `), [hamClick])

  const Menu = styled.div<{ col: string }>`
    grid-column:${props => props.col};
  `

  const NaviLanguage = styled.div`
    grid-column: 7;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  `
  const NaviEng = styled.div`
    grid-column: 2;
  `
  const Hambuger = styled.div`
    @media (max-width: 500px) { 
      display: block;
      width: 2rem;
      height: 2rem;
      background-color:red;
      grid-column: 12;
      transition: all 0.3s;
    }
    @media (min-width: 501px) and (max-width: 767px) { 
      display:none;
    } 
    /* Media Query for Desktop */ 
    @media (min-width: 768px) and (max-width: 1280px){ 
      display: none;
    } 
    /* Media Query for Large screens */ 
    @media (min-width: 1281px) { 
      display: none;
    }
  `
  
  return (
    <Wapper>
      <NaviIcon src={logo} />
      <MenwBugerWapper>
        <Menu col="1 / 3">Cover</Menu>
        <Menu col="3 / 5">Contents</Menu>
        <Menu col="5 / 7">Contact</Menu>
        <NaviLanguage>Kr<NaviEng>Eng</NaviEng></NaviLanguage>
      </MenwBugerWapper>
      <Hambuger onClick={onClick}>click</Hambuger>
    </Wapper>
  )
}

export default Navigater
