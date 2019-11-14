import React, { useCallback } from 'react'
import styled from 'styled-components'
import logo from '../Image/ohn.png'

interface Props {
  gridSize: number
}

const Navigater: React.FC<Props> = (props) => {

  const { gridSize } = props

  const onClick = () => {
    
  }

  const Wapper = styled.div`
    display:grid;
    grid-template-columns: repeat(12, 1fr);
    grid-auto-rows: auto;
    grid-gap: 1rem;
    align-items: center;
  `
  const NaviIcon = styled.img`
    width: 5rem;
    height: auto;
    grid-column: 1 / 6;
    padding-left:${ gridSize / 2}px;
  `
  const NaviCover = styled.div`
    grid-column: 1;
  `
  const MenwBugerWapper = useCallback(styled.div`
    display: grid;
    grid-column: 6 / 13;
    grid-template-columns: repeat(6, 1fr);
    grid-auto-rows: auto;
    grid-gap: 1rem;

    @media (max-width: 500px) { 
      display:none;
    }

    @media (min-width: 481px) and (max-width: 767px) { 
    } 
      
    @media (min-width: 768px) and (max-width: 1280px){ 
    } 
      
    @media (min-width: 1281px) { 
    }
    `
    , [])

  const NaviContents = styled.div`
    grid-column: 3;
  `
  const NaviContact = styled.div`
    grid-column: 5;
  `
  const NaviLanguage = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column: 7;
    justify-items: center;
    align-items: center;
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
        <NaviCover>menw1</NaviCover>
        <NaviContents>menw2</NaviContents>
        <NaviContact>menw3</NaviContact>
        <NaviLanguage>Kr<NaviEng>Eng</NaviEng></NaviLanguage>
      </MenwBugerWapper>
      <Hambuger onClick={onClick}>click</Hambuger>
    </Wapper>
  )
}

export default Navigater
