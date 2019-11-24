import React, { Fragment } from 'react'
import styled from 'styled-components'


const Contact: React.FC = () => {
  return (
    <Fragment>
      <Title>E-Mail</Title>
      <ContactText>useing_Email.com</ContactText>
      <Title>Instargrem</Title>
      <ContactText>InstarPro</ContactText>
      <Title>Facebook</Title>
      <ContactText>venecia.facebook</ContactText>
      <Spcae />
    </Fragment>
  )
}

const Title = styled.div`
  grid-column: 6 / 11;
  font-size: 4rem;
  color: skyblue;
  text-decoration-line: underline;
  text-decoration-color: papayawhip;
`
const ContactText = styled.div`
  grid-column: 6 / 11;
  justify-items: center;
  color: skyblue;
  font-size: 2rem;
  padding-bottom: 2rem;
`
const Spcae = styled.div`
  height: 40vh;
`

export default Contact
