import React from 'react'
import styled from 'styled-components'

const Wapper = styled.div`
    display:grid;
    grid-template-columns: repeat(12, 1fr);
    grid-auto-rows: auto;
    grid-gap: 1rem;
`

const Navigater = () => {
    return (
        <Wapper>
            <div>this is navigater</div>
            <div>menw1</div>
            <div>menw2</div>
            <div>menw3</div>
        </Wapper>
    )
}

export default Navigater
