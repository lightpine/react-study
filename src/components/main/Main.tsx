import React, { useState } from 'react'
import Cathedral from '../Img/italy01.png'
import Venezia from '../Img/italy02.png'
import Colosseum from '../Img/italy03.png'
import Santorini from '../Img/italy04.png'
import Milano from '../Img/italy05.png'
import styled, { css, keyframes } from 'styled-components'



const Main: React.FC = () => {
  const Imgs = [Cathedral, Venezia, Colosseum, Santorini, Milano]
  const [imgNum, setImgNum] = useState(0)
  const [pageNum, setPageNum] = useState(0)

  const slideShow = (imgNum: number, pageNum: number) => {
    if (pageNum >= 3) {
      setPageNum(0)
    } else if (pageNum < 0) {
      setPageNum(2)
    } else {
      setPageNum(pageNum)
    }

    if (imgNum >= Imgs.length) {
      setImgNum(0)
    } else if (imgNum < 0) {
      setImgNum(Imgs.length - 1)
    } else {
      setImgNum(imgNum)
    }
  }

  return (
    <Wapper>
      <PrevBox pageNum={pageNum} imgNum={imgNum} Imgs={Imgs} />
      <NowBox pageNum={pageNum} imgNum={imgNum} Imgs={Imgs} />
      <NextBox pageNum={pageNum} imgNum={imgNum} Imgs={Imgs} />
      <PreButton onClick={(e) => slideShow(imgNum - 1, pageNum - 1)} col={1}>&#10094;</PreButton>
      <NextButton onClick={(e) => slideShow(imgNum + 1, pageNum + 1)} col={12}>&#10095;</NextButton>
      <Dot col="5"/>
      <Dot col="6"/>
      <Dot col="7"/>
      <Dot col="8"/>
    </Wapper>
  );
}
const FadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`
const Wapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12 1fr);
  grid-auto-rows: auto;
  grid-gap: 1rem;
  justify-content: center;
  position: relative;
  max-width: 1920px;
`
const Box = css`
  grid-column: 1 / 13;
  grid-row: 1;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  width: 70vw;
  height: 300px;
  animation: 1s ${FadeIn} ease-in-out;
`
const PrevBox = styled.div<{ pageNum: number, imgNum: number, Imgs: Array<string> }>`
  ${p => p.pageNum === 0 ? css`display: block;` : css`display: none;`}
  background-image: url(${props => props.Imgs[props.imgNum]});
  ${Box}
`
const NowBox = styled.div<{ pageNum: number, imgNum: number, Imgs: Array<string> }>`
  ${p => p.pageNum === 1 ? css`display: block;` : css`display: none;`}
  background-image: url(${props => props.Imgs[props.imgNum]});
  ${Box}
`
const NextBox = styled.div<{ pageNum: number, imgNum: number, Imgs: Array<string> }>`
  ${p => p.pageNum >= 2 ? css`display: block;` : css`display: none;`}
  background-image: url(${props => props.Imgs[props.imgNum]});
  ${Box}
`

const Dot = styled.div<{ col: string }>`
  display: grid;
  grid-column: ${props => props.col};
  height: 10px;
  width: 10px;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  :hover{
    cursor: pointer;
    background-color: black;

  }
`

const Buttons = css`
  grid-row: 1;
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  user-select: none;
  :hover{
    background-color: rgba(0,0,0,0.8);
  }
`

const PreButton = styled.div<{ col: number }>`
  grid-column: ${p => p.col};
  ${Buttons}
  border-radius: 0 3px 3px 0;
`

const NextButton = styled.div<{ col: number }>`
  grid-column: ${p => p.col};
  ${Buttons}
  border-radius: 3px 0 0 3px;
`
export default Main
