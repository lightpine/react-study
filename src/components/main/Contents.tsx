import React from 'react'
import styled from 'styled-components'

const Contents = () => {
  const Contents = styled.div`
    grid-column: 1 / 13;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 1rem;
    grid-auto-rows: auto;
    `
  const Content = styled.div`
    grid-column: 3 / 11;
    `
  return (
    <Contents>
      <Content>Contents</Content>
    </Contents>
  )
}

export default Contents
