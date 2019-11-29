import React, { useState } from 'react'
import Img1 from '../Img/italy01.png'
import Img2 from '../Img/italy02.png'
import Img3 from '../Img/italy03.png'
import styled, { css } from 'styled-components'

const Main: React.FC = () => {
  const Imgs = [Img1, Img2, Img3]
  const [imgNum, setImgNum] = useState(0)
  const [pageNum, setPageNum] = useState(0)

  const slideShow = (imgNum: number) => {
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
      <PrevBox imgNum={imgNum} />
      <NowBox imgNum={imgNum} />
      <NextBox imgNum={imgNum} />
      <PreButton onClick={(e) => slideShow(imgNum - 1)} >&#10094;</PreButton>
      <NextButton onClick={(e) => slideShow(imgNum + 1)} >&#10095;</NextButton>
    </Wapper>
  );
}
const Wapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12 1fr);
  grid-auto-rows: auto;
  grid-gap: 1rem;
  justify-content: center;
  position: relative;
  max-width: 1920px;
`
const PrevBox = styled.div<{ imgNum: number }>`
  ${p => p.imgNum === 0 ? css`display: block;` : css`display: none;`}
  grid-column: 1 / 13;
  grid-row: 1;
  background-position: center center;
  background-image: url(${Img1});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  width: 50vw;
  height: 300px;
`
const NowBox = styled.div<{ imgNum: number }>`
  ${p => p.imgNum === 1 ? css`display: block;` : css`display: none;`}
  grid-column: 1 / 13;
  grid-row: 1;
  background-position: center center;
  background-image: url(${Img2});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  width: 50vw;
  height: 300px;
`
const NextBox = styled.div<{ imgNum: number }>`
  ${p => p.imgNum === 2 ? css`display: block;` : css`display: none;`}
  grid-column: 1 / 13;
  grid-row: 1;
  background-position: center center;
  background-image: url(${Img3});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  width: 50vw;
  height: 300px;
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
`
const PreButton = styled.div`
  grid-column: 1;
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
  border-radius: 0 3px 3px 0;
  user-select: none;
  :hover{
    background-color: rgba(0,0,0,0.8);
  }
`

const NextButton = styled.div`
  grid-column: 12;
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
  border-radius: 3px 0 0 3px;
  user-select: none;
  :hover{
    background-color: rgba(0,0,0,0.8);
  }
`
export default Main
