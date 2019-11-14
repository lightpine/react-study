import React from 'react'
import styled from 'styled-components'
import Image from '../Image/back_ground.png'

const Cover = () => {

    const Cover = styled.img`
        grid-column: 1 / 13;
        grid-row: auto;
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-gap: 1rem;
        width: 100vmax;
    `
    return (
        <Cover src={Image} />
    )
}

export default Cover
