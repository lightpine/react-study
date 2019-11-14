import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import logo from '../Image/ohn.png'

interface Props {
  gridSize: number
  browserSize: number
}

interface NaviInterface {
  isCheck: boolean
}

const Navigater: React.FC<Props> = (props) => {

  const { gridSize, browserSize } = props
  const [isCheck, setIsCheck] = useState(false)


  // const HandleSize = (browserSize: number) => {
  //   console.log(browserSize);

  //   if (browserSize <= 650) {
  //     console.log("모바일 버전입니다.");
  //     setIsCheck(!isCheck)
  //   }
  // }

  useEffect(() => {
    if (browserSize >= 650) {
      setIsCheck(isCheck)
      console.log(isCheck);

    } else { setIsCheck(!isCheck) }
  }, [])

  // useEffect(() => {
  //   if (browserSize) {
  //     console.log("모바일 버전입니다.");
  //     setIsCheck(!isCheck)
  //   }
  // }, [])



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
  const MenwBugerWapper = styled.div<NaviInterface>`
    ${props => props.isCheck ? "display: none" : "display: grid"}
    grid-column: 6 / 13;
    /* display: grid; */
    grid-template-columns: repeat(6, 1fr);
    grid-auto-rows: auto;
    grid-gap: 1rem;
  `
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


  return (
    <Wapper>
      <NaviIcon src={logo} />
      <MenwBugerWapper isCheck={isCheck}>
        <NaviCover>menw1</NaviCover>
        <NaviContents>menw2</NaviContents>
        <NaviContact>menw3</NaviContact>
        <NaviLanguage>Kr<NaviEng>Eng</NaviEng></NaviLanguage>
      </MenwBugerWapper>
    </Wapper>
  )
}

export default Navigater
