import React, { useState, useEffect } from 'react'
import Img1 from '../Img/italy01.png'
import Img2 from '../Img/italy02.png'
import Img3 from '../Img/italy03.png'
import styled from 'styled-components'

const Main: React.FC = (props) => {
  const Imgs = [Img1, Img2, Img3]
  const [imgNum, setImgNum] = useState(0)

  useEffect(() => {
    for (let i = 0; i <= Imgs.length; i++) {
      setTimeout(() => {
        setImgNum(i)
        console.log("111", imgNum);
      }, 2000);
    }
    console.log("222", imgNum);
  }, [imgNum])


  return (
    <Wapper>
      {/* <ImgBox img={image} /> */}
      <ImgBox2 src={Imgs[imgNum]} />
      <Dot col="5" />
      <Dot col="6" />
      <Dot col="7" />
    </Wapper>
  );
}
const Wapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12 1fr);
  grid-auto-rows: auto;
  grid-gap: 1rem;
  justify-content: center;
`

const ImgBox2 = styled.img`
  grid-column: 1 / 13;
  width: 500px;
  height: 300px;
`
// const ImgBox = styled.div<{ img: string }>`
//   grid-column: 1 / 13;
//   background-position: center center;
//   background-image: url(${img});
//   background-repeat: no-repeat;
//   width: 1000px;
//   height: 300px;
// `
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

export default Main
