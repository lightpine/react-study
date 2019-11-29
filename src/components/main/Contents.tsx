import React from 'react'
import styled from 'styled-components'
import Img from '../Image/night_place.png'
import Img2 from '../Image/venice20.png'
import Img3 from '../Image/venezia5.png'
import OnhReveal from '../../util/ScrollRevarl'
import ParallaxScroll from '../../util/Parallax'

const Contents: React.FC = (props) => {

  return (
    <OnhReveal type="Fade" styled={Wapper}>
      <Spce />
      <ParallaxScroll styled={Content1} />
      <ContentText>
        "hello" thie is Venecia! velra venecia!
        </ContentText>
      <Spce />
    </OnhReveal>
  )
}

export default Contents

const Wapper = styled.div`
 grid-column: 1 / 13;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 1rem;
  grid-auto-rows: auto;
`

const Content1 = styled.div`
  grid-column: 3/ 11;
  height: 50vh;
  background-image: url(${Img});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  :hover {
  opacity: 0.4;
  }

`
// const Content2 = styled.div`
//   grid-column: 3 / 11;
//   background-image: url(${Img2});
//   height: 50vh;
//   background-attachment: fixed;
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: contain;
//   height: 50vh;
//   transition: all 0.1s;
//   overflow: hidden;
//   :hover {
//   transform: scale(1.06);
//   opacity: 0.4;
//   }
// `
// const Content3 = styled.div`
//   grid-column: 3 / 11;
//   background-image: url(${Img3});
//   height: 50vh;
//   background-attachment: fixed;
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: contain;
//   height: 50vh;
//   transition: all 0.1s;
//   :hover {
//   transform: scale(1.06);
//   opacity: 0.4;
//   }
// `
const ContentText = styled.div`
  grid-column: 3/ 11;
  font-size: 2rem;
  color: skyblue;
  justify-items: center;
`
const Spce = styled.div`
  grid-column: 1/13;
  height: 100vh;
`