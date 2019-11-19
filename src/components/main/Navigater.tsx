import React, { useState, useEffect, useCallback } from 'react'
import styled, { keyframes, css } from 'styled-components'
import logo from '../Image/ohn.png'
import { log } from 'util'

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

  useEffect(() => {
    setIsDesktop(handleWin(gridSize))
  }, [gridSize])

  return (
    <Wapper>
      <NaviIcon src={logo} gridSize={gridSize} style={{ paddingLeft: gridSize }} />
      <MenwBugerWapper hamClick={hamClick}>
        <Menu col="1 / 3">Cover</Menu>
        <Menu col="3 / 5">Contents</Menu>
        <Menu col="5 / 7">Contact</Menu>
        <NaviLanguage>Kr<NaviEng>Eng</NaviEng></NaviLanguage>
      </MenwBugerWapper>
      <HanbugerButtonWapper onClick={() => setHamClick(!hamClick)} >
        <HambugerTop hamClick={hamClick} />
        <HambugerMiddel hamClick={hamClick} />
        <HambugerBouttom hamClick={hamClick} />
      </HanbugerButtonWapper>
    </Wapper>
  )
}
export default Navigater
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
const HanbugerButtonWapper = styled.div`
    @media (max-width: 500px) { 
      grid-column: 11/ 12;
      display: inline-block;
      transition: 0.4s;
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

const NaviIcon = styled.img<{ gridSize: number }>`
    width: 5rem;
    height: auto;
    grid-column: 1 / 6;
    padding-left:${ p => p.gridSize / 2}px;
  `
const MenwBugerWapper = styled.div<{ hamClick: boolean }>`
    grid-column: 6 / 13;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-gap: 1rem;
     ${p => p.hamClick ? "display:none;" : ""}
    font-size: ${props => props.theme.navigater.font_size};
    font-weight: ${props => props.theme.navigater.font_weight};
   
    @media (max-width: 500px) { 
      ${p => p.hamClick ? "display: block;" : "display:none;"}
      position:absolute;
      top:0px;
      left:0px;
      background-color:#888888;
    }

    `


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

const ham = css`
    display: block;
    width: 35px;
    height: 5px;
    background-color: black;
    margin: 6px 0;
`


const HambugerTop = styled.div<{ hamClick: boolean }>`
    ${ham}
    transition:all 0.5s;

    ${ p => p.hamClick && css` transform: rotate(-45deg) translate(-9px, 6px);`}
  `

const HambugerMiddel = styled.div<{ hamClick: boolean }>`
     ${ham}
     transition:all 0.5s;
     ${ p => p.hamClick && css`opacity:0;`}

  `
const HambugerBouttom = styled.div<{ hamClick: boolean }>`
    ${ham}
    transition:all 0.5s;

    ${ p => p.hamClick && css`transform: rotate(45deg) translate(-8px, -8px);`}
  `
